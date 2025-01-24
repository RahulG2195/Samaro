import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT * FROM color ",
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function POST(request, response) {
    try {
        const requestData = await request.formData();
        const data = Object.fromEntries(requestData.entries());

        const { clrCode, image } = data;

        const updateFields = [];
        const values = [];


        if (image) {
            try {
                await uploadImage(request, response, image);
                updateFields.push('image');
                values.push(image.name);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        updateFields.push('clrCode');
        values.push(clrCode);

        const placeholders = updateFields.map(() => '?').join(', ');
        const sqlQuery = `INSERT INTO color (${updateFields.join(', ')}) VALUES (${placeholders})`;

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Color added successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}


export async function PUT(request, response) {
    try {
        const requestData = await request.formData();
        const data = Object.fromEntries(requestData.entries());

        const { id, clrCode, image } = data;

        const updateFields = [];
        const values = [];

        if (image) {
            try {
                await uploadImage(request, response, image);
                updateFields.push('image = ?');
                values.push(image.name);
            } catch (error) {
                console.error('Error uploading image:', error);
            }
        }

        updateFields.push('clrCode = ?');
        values.push(clrCode);

        values.push(id);

        const sqlQuery = `UPDATE color SET ${updateFields.join(',')} WHERE id = ? `;

        const result = await query({
            query: sqlQuery,
            values,
        });

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ status: 404, message: "Color not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ status: 200, message: "Color updated successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const requestData = await request.json();
        const { id } = requestData;

        const sqlQuery = `
      DELETE FROM color
      WHERE id = ?
    `;
        const values = [id];

        const result = await query({
            query: sqlQuery,
            values,
        });

        if (result.affectedRows === 0) {
            return new Response(JSON.stringify({ status: 404, message: "Color not found" }), { status: 404 });
        }

        return new Response(JSON.stringify({ status: 200, message: "Color deleted successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

