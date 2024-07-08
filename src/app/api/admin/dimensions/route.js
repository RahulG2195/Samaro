// api/admin/dimensions.js

import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM dimensions",
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

    const {
      id,
      plank_sizes_heading,
      plank_sizes_description,
      plank_sizes_image,
      plank_thickness_heading,
      plank_thickness_description,
      plank_thickness_main_image_url,
      plank_thickness_image_1,
      plank_thickness_size_range_1,
      plank_thickness_image_2,
      plank_thickness_size_range_2,
      plank_thickness_image_3,
      plank_thickness_size_range_3,
    } = data;

    const updateFields = [];
    const values = [];

    // Handle each field update and file upload separately
    if (plank_sizes_heading !== undefined) {
      updateFields.push('plank_sizes_heading = ?');
      values.push(plank_sizes_heading);
    }

    if (plank_sizes_description !== undefined) {
      updateFields.push('plank_sizes_description = ?');
      values.push(plank_sizes_description);
    }

    if (plank_sizes_image !== undefined) {
      try {
        await uploadImage(request, response, plank_sizes_image);
        updateFields.push('plank_sizes_image_url = ?');
        values.push(plank_sizes_image.name); // Assuming this is the file name
      } catch (error) {
        console.error('Error uploading plank_sizes_image:', error);
      }
    }

    if (plank_thickness_heading !== undefined) {
      updateFields.push('plank_thickness_heading = ?');
      values.push(plank_thickness_heading);
    }

    if (plank_thickness_description !== undefined) {
      updateFields.push('plank_thickness_description = ?');
      values.push(plank_thickness_description);
    }

    if (plank_thickness_main_image_url !== undefined) {
      try {
        await uploadImage(request, response, plank_thickness_main_image_url);
        updateFields.push('plank_thickness_main_image_url = ?');
        values.push(plank_thickness_main_image_url.name); // Assuming this is the file name
      } catch (error) {
        console.error('Error uploading plank_thickness_main_image_url:', error);
      }
    }

    if (plank_thickness_image_1 !== undefined) {
      try {
        await uploadImage(request, response, plank_thickness_image_1);
        updateFields.push('plank_thickness_image_1_url = ?');
        values.push(plank_thickness_image_1.name); // Assuming this is the file name
      } catch (error) {
        console.error('Error uploading plank_thickness_image_1:', error);
      }
    }

    if (plank_thickness_size_range_1 !== undefined) {
      updateFields.push('plank_thickness_size_range_1 = ?');
      values.push(plank_thickness_size_range_1);
    }

    if (plank_thickness_image_2 !== undefined) {
      try {
        await uploadImage(request, response, plank_thickness_image_2);
        updateFields.push('plank_thickness_image_2_url = ?');
        values.push(plank_thickness_image_2.name); // Assuming this is the file name
      } catch (error) {
        console.error('Error uploading plank_thickness_image_2:', error);
      }
    }

    if (plank_thickness_size_range_2 !== undefined) {
      updateFields.push('plank_thickness_size_range_2 = ?');
      values.push(plank_thickness_size_range_2);
    }

    if (plank_thickness_image_3 !== undefined) {
      try {
        await uploadImage(request, response, plank_thickness_image_3);
        updateFields.push('plank_thickness_image_3_url = ?');
        values.push(plank_thickness_image_3.name); // Assuming this is the file name
      } catch (error) {
        console.error('Error uploading plank_thickness_image_3:', error);
      }
    }

    if (plank_thickness_size_range_3 !== undefined) {
      updateFields.push('plank_thickness_size_range_3 = ?');
      values.push(plank_thickness_size_range_3);
    }

    // Add id to values array for WHERE clause
    values.push(id);

    const sqlQuery = `UPDATE dimensions SET ${updateFields.join(', ')} WHERE id = ?`;

    await query({ query: sqlQuery, values });

    return new Response(JSON.stringify({ status: 200, message: "Dimensions updated successfully" }), { status: 200 });
  } catch (error) {
    console.error('Error in executing query:', error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}