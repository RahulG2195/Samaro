import { query } from "@/utils/Dbconnect"; // Assuming 'your-database-module' is the correct path to your database module
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM basic_info WHERE bi_id = 1", // Adjust query as needed
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request,response) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());


    const {
      comp_logo,
      email1,
      email2,
      mobile_no_1,
      mobile_no_2,
      facebook_url,
      insta_url,
      linkedin_url,
      youtube_url,
      address,
      map_url,
    } = data;

    const updateFields = [];
    const values = [];

    if (comp_logo) {
      try {
        await uploadImage(request, response, comp_logo);
        updateFields.push('comp_logo = ?');
        values.push(comp_logo.name);
      } catch (error) {
        console.error('Error comp_logo image:', error);
      }
    }

    // updateFields.push('email1 = ?');
    // values.push(email1);
    // updateFields.push('email2 = ?');
    // values.push(email2);
    // updateFields.push('mobile_no_1 = ?');
    // values.push(mobile_no_1);
    // updateFields.push('mobile_no_2 = ?');
    // values.push(mobile_no_2);
    // updateFields.push('facebook_url = ?');
    // values.push(facebook_url);
    // updateFields.push('insta_url = ?');
    // values.push(insta_url);
    // updateFields.push('linkedin_url = ?');
    // values.push(linkedin_url);
    // updateFields.push('youtube_url = ?');
    // values.push(youtube_url);
    // updateFields.push('address = ?');
    // values.push(address);
    // updateFields.push('map_url = ?');
    // values.push(map_url);

    ['email1', 'email2', 'mobile_no_1', 'mobile_no_2', 'facebook_url', 'insta_url', 'linkedin_url', 'youtube_url', 'address', 'map_url'].forEach(field => {
      if (data[field]) {
        updateFields.push(`${field} = ?`);
        values.push(data[field]);
      }
    });
    
   
    const sqlQuery = `UPDATE basic_info SET ${updateFields.join(',')} WHERE bi_id = 1 `;

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(
      JSON.stringify({ status: 200, message: "Basic info updated successfully", result }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
