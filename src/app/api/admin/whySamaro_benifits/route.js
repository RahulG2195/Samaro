import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT * FROM whysamaro_benifits",
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
  
      const { id, point_heading, subpoints, logo } = data;
      console.log("subsub",data)
  
      const updateFields = [];
      const values = [];
  
      if (logo) {
        try {
          await uploadImage(request, response, logo);
          updateFields.push('logo = ?');
          values.push(logo.name); 
        } catch (error) {
          console.error('Error uploading logo:', error);
        }
      }
  
      updateFields.push('point_heading = ?');
      values.push(point_heading);
  
      // Initialize subpoints as an empty array if it's undefined
      const subpointsArray = subpoints.split(',').map(item => item.trim()).filter(item => item !== '');

      updateFields.push('subpoints = ?');
      values.push(subpointsArray.join(', '));
  
      values.push(id);
  
      const sqlQuery = `UPDATE whysamaro_benifits SET ${updateFields.join(', ')} WHERE id = ?`;
  
      await query({ query: sqlQuery, values });
  
      return new Response(JSON.stringify({ status: 200, message: "Benefit updated successfully" }), { status: 200 });
    } catch (error) {
      console.error('Error updating benefit:', error);
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }