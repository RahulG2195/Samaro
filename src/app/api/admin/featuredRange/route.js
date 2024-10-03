// /api/admin/featuredRange/GET.js
import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM featured_range", // Adjust query as needed
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function PUT(req, res) {
    try {
      const requestData = await req.formData();
      const data = Object.fromEntries(requestData.entries());
  
      const {
        id,
        title,
        name,
        description,
      } = data;
  
      let image = data.image;
      console.log("and id is ", id )
  
      const updateFields = [];
      const values = [];
  
      // Handle image upload if a new image is provided
      if (image) {
        try {
          await uploadImage(req, res, image); // This will handle image upload to the server
          updateFields.push('image = ?');
          values.push(image.name);
        } catch (error) {
          console.error('Error uploading image:', error);
          return new Response(JSON.stringify({ status: 500, message: 'Image upload failed' }), { status: 500 });
        }
      }
  
      // Handle other fields
      const fieldsToUpdate = ['title', 'name', 'description'];
      fieldsToUpdate.forEach(field => {
        if (data[field]) {
          updateFields.push(`${field} = ?`);
          values.push(data[field]);
        }
      });
  
      const sqlQuery = `UPDATE featured_range SET ${updateFields.join(', ')} WHERE id = ${id}`;
  
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