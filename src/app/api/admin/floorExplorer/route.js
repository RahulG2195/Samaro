// GET.js

import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM floor_explorer WHERE id = 1", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(req, res) {
  try {
    const requestData = await req.formData();
    const data = Object.fromEntries(requestData.entries());

    const {
      heading,
      sub_heading,
      description,
      button,
      url,
      ply_image,
      tab_image,
    } = data



    const updateFields = [];
    const values = [];


    if (ply_image) {
      try {
       await uploadImage(req, res, ply_image);
        updateFields.push('ply_image = ?');
        values.push(ply_image.name);
      } catch (error) {
        console.error('Error ply_image image:', error);
      }
    }

    if (tab_image) {
      try {
        await uploadImage(req, res, tab_image);
        updateFields.push('tab_image = ?');
        values.push(tab_image.name);
      } catch (error) {
        console.error('Error uploading tab_image image:', error);
      }
    }

    const fieldsToUpdate = ['heading', 'sub_heading', 'description', 'button', 'url']
    fieldsToUpdate.forEach(field => {
      if (data[field]) {
        updateFields.push(`${field} = ?`);
        values.push(data[field]);
      }
    });

    const sqlQuery = `UPDATE floor_explorer SET ${updateFields.join(', ')} WHERE id = 1`;

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ ...data, updatedFields: updateFields }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
