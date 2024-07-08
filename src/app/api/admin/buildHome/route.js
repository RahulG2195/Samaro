
import { query } from "@/utils/Dbconnect"; 
import {  uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM build_home ", 
    });
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function PUT(request,response) {
  // console.log("build home build home put request come");
  try {
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());

    const {
      heading,
      description,
      feature1_icon,
      feature1_title,
      feature2_icon,
      feature2_title,
      feature3_icon,
      feature3_title,
    } = data;

    // console.log("build home build home", requestData);
    const updateFields = [];
    const values = [];

    if (feature1_icon) {
      console.log("iconicon",feature1_icon)
      try {
          await uploadImage(request, response, feature1_icon);
          console.log("iconicon1",feature1_icon.name)

          updateFields.push('feature1_icon = ?');
          values.push(feature1_icon.name);
      } catch (error) {
          console.error('Error feature1_icon image:', error);
      }
  }
  if (feature2_icon) {
      try {
           await uploadImage(request, response,  feature2_icon);
          updateFields.push('feature2_icon = ?');
          values.push(feature2_icon.name);
      } catch (error) {
          console.error('Error uploading feature2_icon image:', error);
      }
  }
  if (feature3_icon) {
      try {
          await uploadImage(request, response,  feature3_icon);
          updateFields.push('feature3_icon = ?');
          values.push(feature3_icon.name);
      } catch (error) {
          console.error('Error uploading feature3_icon image:', error);
      }
  }

  const fieldsToUpdate = ['heading','description','feature1_title','feature2_title','feature3_title']
  fieldsToUpdate.forEach(field => {
    if (data[field]) {
        updateFields.push(`${field} = ?`);
        values.push(data[field]);
    }
});

    const sqlQuery = `
      UPDATE build_home SET  ${updateFields.join(', ')} WHERE id = 1
    `;

    console.log("qry: ", sqlQuery);
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
