import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT * FROM gallery",
        });
        return new Response(JSON.stringify(results), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function POST(request, response) {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries());

        const { image } = data;

        const updateFields = [];
        const values = [];

        if (image) {
            try {
                await uploadImage(request, response, image); 
                updateFields.push('imageName');
                values.push(image.name); 
            } catch (error) {
                console.error('Error uploading image:', error);
                return new Response(JSON.stringify({ status: 500, message: 'Error uploading image' }), { status: 500 });
            }
        }

        const sqlQuery = `
            INSERT INTO gallery (${updateFields.join(', ')})
            VALUES (${values.map(() => '?').join(', ')})
        `;

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Image added successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}


export async function PUT(request, response) {
    try {
        const formData = await request.formData();
        const data = Object.fromEntries(formData.entries());

        const { id, imageName } = data;

        const updateFields = [];
        const values = [];

        if (imageName) {
            try {
                await uploadImage(request, response, imageName);
                updateFields.push('imageName = ?');
                values.push(imageName.name);
            } catch (error) {
                console.error('Error uploading image:', error);
                throw new Error('Failed to upload image.');
            }
        }

        values.push(id);

        const sqlQuery = `UPDATE gallery SET ${updateFields.join(', ')} WHERE id = ?`;

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Image updated successfully", result }), { status: 200 });
    } catch (error) {
        console.error('Error updating gallery image:', error);
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const formData = await request.json();
        const {id} = formData;

        const sqlQuery = `
            DELETE FROM gallery
            WHERE id = ?
        `;
        const values = [id];

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Image deleted successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}