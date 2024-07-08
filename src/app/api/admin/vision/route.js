import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM vision_mission WHERE id = 1", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request , response) {
  try {
    const id = 1; // Assuming 'id' is hardcoded
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());

    const { title, logo, subpoints } =  data;
    
    const updateFields = [];
    const values = [];

    if (logo) {
      try {
        console.log("loggolo",logo)
       await uploadImage(request ,response, logo);
        updateFields.push('logo = ?');
        values.push(logo.name);
      } catch (error) {
        console.error('Error logo image:', error);
      }
    }

    const fieldsToUpdate = ['title', 'subpoints',]
    fieldsToUpdate.forEach(field => {
      if (data[field]) {
        updateFields.push(`${field} = ?`);
        values.push(data[field]);
      }
    });
    
    const sqlQuery = `UPDATE vision_mission SET ${updateFields.join(', ')} WHERE id = 1`;



    await query({ query: sqlQuery, values });

    return new Response(JSON.stringify({ status: 200, message: "Vision updated successfully" }), { status: 200 });
  } catch (error) {
    console.error('Error updating vision:', error);
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
