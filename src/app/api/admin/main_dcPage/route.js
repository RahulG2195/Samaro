import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM download_center",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function POST(request, response) {
  try {
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());

    const { dc_category, dc_type, Badgetitle, imgurl, pdf } = data;

    const updateFields = [];
    const values = [];

    if (imgurl) {
      try {
        await uploadImage(request, response, imgurl);
        updateFields.push('imgurl');
        values.push(imgurl.name);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    if (pdf) {
      try {
        await uploadImage(request, response, pdf);
        updateFields.push('pdf');
        values.push(pdf.name);
      } catch (error) {
        console.error('Error uploading PDF:', error);
      }
    }

    updateFields.push('dc_category');
    values.push(dc_category);
    updateFields.push('dc_type');
    values.push(dc_type);
    updateFields.push('Badgetitle');
    values.push(Badgetitle);

    // Generate placeholders for the values
    const placeholders = updateFields.map(() => '?').join(', ');

    const sqlQuery = `INSERT INTO download_center (${updateFields.join(', ')}) VALUES (${placeholders})`;

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Posted data successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function PUT(request, response) {
  try {
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());

    const { dc_id, dc_category, dc_type, Badgetitle, imgurl, pdf } = data;

    const updateFields = [];
    const values = [];

    // const imgFile = requestData.get('imgurl');
    // const pdfFile = requestData.get('pdf');

    if (imgurl) {
      try {
        await uploadImage(request, response, imgurl);
        updateFields.push('imgurl = ?');
        values.push(imgurl.name);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    if (pdf) {
      try {
        await uploadImage(request, response, pdf);
        updateFields.push('pdf = ?');
        values.push(pdf.name);
      } catch (error) {
        console.error('Error uploading PDF:', error);
      }
    }
    updateFields.push('dc_category = ?');
    values.push(dc_category);
    updateFields.push('dc_type = ?');
    values.push(dc_type);
    updateFields.push('Badgetitle = ?');
    values.push(Badgetitle);

    values.push(dc_id)


    const sqlQuery = `UPDATE download_center SET ${updateFields.join(',')} WHERE dc_id = ?`;
    const result = await query({
      query: sqlQuery,
      values,
    });


    return new Response(JSON.stringify({ status: 200, message: "DC updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function DELETE(request) {
  try {
    const { dc_id } = await request.json();

    const sqlQuery = `
      DELETE FROM download_center
      WHERE dc_id = ?
    `;
    const values = [dc_id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "DC deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
