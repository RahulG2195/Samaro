import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

// GET endpoint to fetch all benefits ordered by sequence
export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM benefits ORDER BY sequence ASC", // Order by sequence in ascending order
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


// POST endpoint to create a new benefit
export async function POST(request, response) {
  try {
    // Step 1: Fetch the current maximum sequence
    const maxSeqResult = await query({
      query: "SELECT MAX(sequence) AS max_sequence FROM benefits",
    });

    const maxSequence = maxSeqResult[0].max_sequence || 0; // Default to 0 if no records exist
    const newSequence = maxSequence + 1; // Set the new sequence

    // Step 2: Process form data
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const {
      titles,
      file,
      files,
    } = data;

    const values = [];

    // Handle titles
    if (titles) {
      values.push(titles);
    } else {
      return new Response(JSON.stringify({ status: 400, message: 'Titles are required' }), { status: 400 });
    }

    // Handle icons
    let iconPaths = [];
    if (file) {
      try {
        await uploadImage(request, response, file);
        iconPaths.push(file.name);
      } catch (error) {
        console.error('Error uploading icon file:', error);
      }
    }
    values.push(iconPaths.join(","));

    // Handle slider_images
    let sliderImagePaths = [];
    if (files) {
      for (const sliderImage of files) {
        try {
          const sliderImagePath = await uploadImage(request, sliderImage);
          sliderImagePaths.push(sliderImagePath);
        } catch (error) {
          console.error('Error uploading slider image file:', error);
        }
      }
    }
    values.push(sliderImagePaths.join(","));

    // Step 3: Construct SQL query for insert including the new sequence
    const sqlQuery = `INSERT INTO benefits (titles, icons, slider_images, sequence) VALUES (?, ?, ?, ?)`;
    values.push(newSequence); // Add new sequence to values

    // Execute SQL query
    await query({ query: sqlQuery, values });

    return new Response(JSON.stringify({ status: 201, message: "Benefit created successfully" }), { status: 201 });
  } catch (error) {
    console.error("Error creating benefit:", error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// PUT endpoint to update benefits
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());
    const { id, titles, sequence } = data; // Get sequence

    const values = [];
    const updateFields = [];

    if (titles) {
      const filteredTitles = titles.split(",").map(title => title.trim()).filter(title => title !== '');
      if (filteredTitles.length > 0) {
        updateFields.push('titles = ?');
        values.push(filteredTitles.join(","));
      }
    }

    // Add sequence update
    if (sequence !== undefined) {
      updateFields.push('sequence = ?');
      values.push(sequence); // Add the new sequence
    }

    // Handle icons and slider_images...
    // (keep existing logic for file uploads)

    if (updateFields.length === 0) {
      return new Response(JSON.stringify({ status: 400, message: 'No fields to update' }), { status: 400 });
    }

    const sqlQuery = `UPDATE benefits SET ${updateFields.join(', ')} WHERE id = ?`;
    values.push(id);

    await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Data updated successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error updating data:", error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
// DELETE endpoint to remove a benefit
export async function DELETE(request) {
  try {
    const { id } = await request.json(); // Assuming the ID is sent in the request body

    if (!id) {
      return new Response(JSON.stringify({ status: 400, message: 'ID is required' }), { status: 400 });
    }

    const sqlQuery = `DELETE FROM benefits WHERE id = ?`;

    const result = await query({
      query: sqlQuery,
      values: [id],
    });

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ status: 404, message: 'Benefit not found' }), { status: 404 });
    }

    return new Response(JSON.stringify({ status: 200, message: "Benefit deleted successfully" }), { status: 200 });
  } catch (error) {
    console.error("Error deleting benefit:", error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

