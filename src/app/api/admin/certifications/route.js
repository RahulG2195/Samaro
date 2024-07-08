import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM certifications",
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
    const { logo } = data;

    const values = [];
    const updateFields = [];

    if (logo) {
      try {
        await uploadImage(request, response, logo);
        updateFields.push('logo');
        values.push(logo.name);
      } catch (error) {
        console.error('Error uploading logo:', error);
        throw new Error('Failed to upload logo');
      }
    }

    const sqlQuery = `INSERT INTO certifications (${updateFields.join(', ')}) VALUES (?)`;
    // values.push(data.logo); 

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Certification added successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function PUT(request, response) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const { id, logo } = data;

    const updateFields = [];
    const values = [];

    if (id) {
      updateFields.push('id = ?');
      values.push(id);
    }

    if (logo) {
      try {
       await uploadImage(request, response, logo);
        updateFields.push('logo = ?');
        values.push(logo.name);
      } catch (error) {
        console.error('Error uploading logo:', error);
        throw new Error('Failed to upload logo');
      }
    }

    const sqlQuery = `UPDATE certifications SET ${updateFields.join(', ')} WHERE id = ?`;
    values.push(id);

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Certification updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    const { id } = await request.json();

    const sqlQuery = `
      DELETE FROM certifications
      WHERE id = ?
    `;
    const values = [id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Certification deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
