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



export async function POST(request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const { heading, titles } = data;

    const values = [];
    const insertFields = ['heading', 'titles'];

    // Handle heading
    if (heading) {
      values.push(heading);
    } else {
      insertFields.splice(insertFields.indexOf('heading'), 1);
    }

    // Handle titles
    if (titles) {
      const filteredTitles = titles.split(",").map(title => title.trim()).filter(title => title !== '');
      if (filteredTitles.length > 0) {
        values.push(filteredTitles.join(","));
      } else {
        insertFields.splice(insertFields.indexOf('titles'), 1);
      }
    }

    // Handle icons upload
    const iconFiles = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('icons[')) {
        iconFiles.push(value);
      }
    }

    if (iconFiles.length > 0) {
      const iconNames = [];
      await Promise.all(iconFiles.map(async (file) => {
        try {
          const uploadedFile = await uploadImage(request, file); // Adjusted to handle file only
          iconNames.push(uploadedFile.filename); // Assume filename is returned
        } catch (error) {
          console.error('Error uploading icon file:', error);
          return null;
        }
      }));

      insertFields.push('icons');
      values.push(iconNames.join(","));
    }

    // Handle slider images upload
    const sliderImageFiles = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('slider_images[')) {
        sliderImageFiles.push(value);
      }
    }

    if (sliderImageFiles.length > 0) {
      const sliderImgNames = [];
      await Promise.all(sliderImageFiles.map(async (file) => {
        try {
          const uploadedFile = await uploadImage(request, file); // Adjusted to handle file only
          sliderImgNames.push(uploadedFile.filename); // Assume filename is returned
        } catch (error) {
          console.error('Error uploading slider image file:', error);
          return null;
        }
      }));

      insertFields.push('slider_images');
      values.push(sliderImgNames.join(","));
    }

    // If no fields to insert, return an error
    if (values.length === 0) {
      return new Response(JSON.stringify({ status: 400, message: 'No fields to insert' }), { status: 400 });
    }

    // Construct SQL query for insertion
    const sqlQuery = `INSERT INTO benefits (${insertFields.join(', ')}) VALUES (${insertFields.map(() => '?').join(', ')})`;

    // Execute SQL query
    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(
      JSON.stringify({ status: 200, message: "Data inserted successfully", result }),
      { status: 200, headers: { 'Content-Type': 'application/json' } }
    );
  } catch (error) {
    console.error("Error inserting data:", error);
    return new Response(
      JSON.stringify({ status: 500, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}

// PUT endpoint to update existing benefits
export async function PUT(request) {
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
      const iconNames = [];
      await Promise.all(iconFiles.map(async (file) => {
        try {
          const uploadedFile = await uploadImage(request, file); // Adjusted to handle file only
          iconNames.push(uploadedFile.filename); // Assume filename is returned
        } catch (error) {
          console.error('Error uploading icon file:', error);
          return null;
        }
      }));

      updateFields.push('icons = ?');
      values.push(iconNames.join(","));
    }

    // Handle slider images update
    const sliderImageFiles = [];
    for (const [key, value] of formData.entries()) {
      if (key.startsWith('slider_images[')) {
        sliderImageFiles.push(value);
      }
    }

    if (sliderImageFiles.length > 0) {
      const sliderImgNames = [];
      await Promise.all(sliderImageFiles.map(async (file) => {
        try {
          const uploadedFile = await uploadImage(request, file); // Adjusted to handle file only
          sliderImgNames.push(uploadedFile.filename); // Assume filename is returned
        } catch (error) {
          console.error('Error uploading slider image file:', error);
          return null;
        }
      }));

      updateFields.push('slider_images = ?');
      values.push(sliderImgNames.join(","));
    }

    // If no fields to update or id is missing, return an error
    if (updateFields.length === 0 || !id) {
      return new Response(JSON.stringify({ status: 400, message: 'No fields to update or missing id' }), { status: 400 });
    }

    // Construct SQL query for update
    const sqlQuery = `UPDATE benefits SET ${updateFields.join(', ')} WHERE id = ?`;

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
    console.error("Error updating data:", error);
    return new Response(
      JSON.stringify({ status: 500, message: error.message }),
      { status: 500, headers: { 'Content-Type': 'application/json' } }
    );
  }
}
