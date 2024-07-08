import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM whysamaro_download_center",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request, response) {
  try {
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());

    const { id, image, heading, description, button_text, button_url } = data;

    const updateFields = [];
    const values = [];

    if (image) {
      try {
        
        await uploadImage(request, response, image);
        updateFields.push('image_url = ?');
        values.push(image.name);
      } catch (error) {
        console.error('Error uploading image_url:', error);
      }
    }
    if (heading !== undefined) {
      updateFields.push('heading = ?');
      values.push(heading);
    }

    if (description) {
      updateFields.push('description = ?');
      values.push(description);
    }

    if (button_text) {
      updateFields.push('button_text = ?');
      values.push(button_text);
    }

    if (button_url) {
      updateFields.push('button_url = ?');
      values.push(button_url);
    }

    
    // values.push(id)

    const sqlQuery = `
      UPDATE whysamaro_download_center
      SET
       ${updateFields.join(', ')}
      WHERE id = 1;
    `;

    // const values = [
    //   image_url || null,
    //   heading || null,
    //   description || null,
    //   button_text || null,
    //   button_url || null,
    //   id
    // ];

    await query({ query: sqlQuery, values });

    return new Response(JSON.stringify({ status: 200, message: "Download center item updated successfully" }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
