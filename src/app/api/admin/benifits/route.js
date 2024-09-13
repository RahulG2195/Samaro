import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";


export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM benefits",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// PUT endpoint to update benefits
export async function PUT(request,response) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const { id, heading, titles } = data;

    const values = [];
    const updateFields = [];

    // Handle heading update
    if (heading) {
      updateFields.push('heading = ?');
      values.push(heading);
    }

    // Handle titles update
    if (titles) {
      const filteredTitles = titles.split(",").map(title => title.trim()).filter(title => title !== '');
      if (filteredTitles.length > 0) {
        updateFields.push('titles = ?');
        values.push(filteredTitles.join(","));
      }
    }

    // Handle icons update
    const iconFiles = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('icons[')) {
        iconFiles.push(value);
      }
    }

    if (iconFiles.length > 0) {
      const iconNames=[];
      const uploadedIcons = await Promise.all(iconFiles.map(async (file) => {
        try {
           await uploadImage(request,response, file);
           iconNames.push(file.name)
        } catch (error) {
          console.error('Error uploading icon file:', error);
          return null;
        }
      }));
      
        updateFields.push('icons = ?');
        values.push(iconNames.join(","));
    }

    // Handle slider_images update
    const sliderImageFiles = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('slider_images[')) {
        sliderImageFiles.push(value);
      }
    }

    if (sliderImageFiles.length > 0) {
      const sliderImgName = [];
      const uploadedSliderImages = await Promise.all(sliderImageFiles.map(async (file) => {
        try {
           await uploadImage(request,response, file);
           sliderImgName.push(file.name)
        } catch (error) {
          console.error('Error uploading slider image file:', error);
          return null;
        }
      }));

        updateFields.push('slider_images = ?');
        values.push(sliderImgName.join(","));
    }

    // If no fields to update, throw an error
    if (updateFields.length === 0) {
      return new Response(JSON.stringify({ status: 400, message: 'No fields to update' }), { status: 400 });
    }

    // Construct SQL query
    const sqlQuery = `UPDATE benefits SET ${updateFields.join(', ')} WHERE id = ? `;

    values.push(id);

    // Execute SQL query
    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(
      JSON.stringify({ status: 200, message: "Data updated successfully", result }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    // Log and respond with error message
    console.error("Error updating data:", error);
    return new Response(
      JSON.stringify({ status: 500, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}