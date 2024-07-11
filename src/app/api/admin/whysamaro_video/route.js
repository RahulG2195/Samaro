// GET.js

import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const sqlQuery = `
      SELECT * FROM whysamaro_video 
    `;
    
    const results = await query({
      query: sqlQuery,
      values: [],
    });

    if (results.length === 0) {
      return new Response(JSON.stringify({ status: 404, message: "Video not found" }), { status: 404 });
    }

    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
// PUT.js


export async function PUT(request, response) {
  try {
    const id = 1;
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());
    const {
      heading,
      description,
      logo_file,
      video_file,
    } = data;

    const updateFields = [];
    const values = [];

    if (logo_file) {
      try {
       await uploadImage(request, response, logo_file);
        updateFields.push('logo = ?');
        values.push(logo_file.name);
      } catch (error) {
        console.error('Error logo_file:', error);
        return new Response(JSON.stringify({ status: 500, message: 'Error uploading logo file' }), { status: 500 });
      }
    }
    
    if (video_file) {
      try {
         await uploadImage(request, response, video_file);
        updateFields.push('video = ?');
        values.push(video_file.name);
      } catch (error) {
        console.error('Error video_file:', error);
        return new Response(JSON.stringify({ status: 500, message: 'Error uploading video file' }), { status: 500 });
      }
    }

    const fieldsToUpdate = ['heading', 'description'];
    fieldsToUpdate.forEach(field => {
      if (data[field]) {
        updateFields.push(`${field} = ?`);
        values.push(data[field]);
      }
    });

    if (updateFields.length === 0) {
      return new Response(JSON.stringify({ status: 400, message: 'No fields to update' }), { status: 400 });
    }

    const sqlQuery = `UPDATE whysamaro_video SET ${updateFields.join(', ')} WHERE id = ? `;
    values.push(id);

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Video updated successfully", result }), { status: 200 });
  } catch (error) {
    console.error("Error updating data:", error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}