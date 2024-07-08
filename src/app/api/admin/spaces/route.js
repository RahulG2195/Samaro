// GET.js

import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM spaces WHERE id = 1", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request, response) {
  try {
    const formData = await request.formData();

    const commercialImages = [];
    const residentialImages = [];

    for (const [key, value] of formData.entries()) {
      if (key.startsWith('commercial_image_')) {
        commercialImages.push(value);
      } else if (key.startsWith('residential_image_')) {
        residentialImages.push(value);
      }
    }

    const updateFields = [];
    const values = [];
    const id = 1;

    if (commercialImages.length > 0) {
      const commercialImageNames = [];
      for (const image of commercialImages) {
        try {
          await uploadImage(request, response, image); // Upload each commercial image
          commercialImageNames.push(image.name);
        } catch (error) {
          console.error('Error uploading commercial image:', error);
          return new Response(JSON.stringify({ status: 500, message: 'Error uploading commercial image' }), { status: 500 });
        }
      }
      updateFields.push('commercial_images = ?');
      values.push(commercialImageNames.join(','));
    }

    if (residentialImages.length > 0) {
      const residentialImageNames = [];
      for (const image of residentialImages) {
        try {
          await uploadImage(request, response, image); // Upload each residential image
          residentialImageNames.push(image.name);
        } catch (error) {
          console.error('Error uploading residential image:', error);
          return new Response(JSON.stringify({ status: 500, message: 'Error uploading residential image' }), { status: 500 });
        }
      }
      updateFields.push('residential_images = ?');
      values.push(residentialImageNames.join(','));
    }

    if (updateFields.length === 0) {
      return new Response(JSON.stringify({ status: 400, message: 'No fields to update' }), { status: 400 });
    }

    const sqlQuery = `UPDATE spaces SET ${updateFields.join(',')} WHERE id = ?`;
    values.push(id);

    await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ updatedFields: updateFields }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      }
    });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}