import { query } from "@/utils/Dbconnect"; // Adjust path as per your project structure
import { uploadImage } from "@/utils/multer.middleware";

export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM newsletter",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function POST(request, response) {
  try {
    const requestData = await await request.formData();
    const data = Object.fromEntries(requestData.entries());
    const { news_category, imgurl, title, author, video} =data
    // const status = 1; 

    const updateFields = [];
    const values = [];

    if (imgurl) {
      try {
        await uploadImage(request, response, imgurl);
        updateFields.push('imgurl');
        values.push(imgurl.name);
      } catch (error) {
        console.error('Error uploading imgurl:', error);
      }
    }

    
    if (video) {
      try {
        await uploadImage(request, response, video);
        updateFields.push('video');
        values.push(video.name);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    }

    updateFields.push('news_category');
    values.push(news_category);
    updateFields.push('title');
    values.push(title);
    updateFields.push('author');
    values.push(author);

    const placeholders = updateFields.map(() => '?').join(', ');
    const sqlQuery = `INSERT INTO newsletter (${updateFields.join(', ')}) VALUES (${placeholders})`;

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Newsletter added successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

export async function PUT(request, response) {
  try {
    const requestData = await request.formData();
    const data = Object.fromEntries(requestData.entries());
    const { news_id, news_category, imgurl, title, author, video, status } = data;

    const updateFields = [];
    const values = [];

    if (imgurl) {
      try {
        console.log("fordinesh",imgurl)
        await uploadImage(request, response, imgurl);
      console.log("imgimg",imgurl.name)
        updateFields.push('imgurl = ?');
        values.push(imgurl.name);
      } catch (error) {
        console.error('Error uploading image:', error);
      }
    }

    if (video) {
      try {
        await uploadImage(request, response, video);
        updateFields.push('video = ?');
        values.push(video.name);
      } catch (error) {
        console.error('Error uploading video:', error);
      }
    }
    updateFields.push('news_category = ?');
    values.push(news_category);
    updateFields.push('title = ?');
    values.push(title);
    updateFields.push('author = ?');
    values.push(author);

    values.push(news_id)

    const sqlQuery = `UPDATE newsletter SET ${updateFields.join(',')} WHERE news_id = ?`;


    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Newsletter updated successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}


export async function DELETE(request) {
  try {
    const { news_id } = await request.json();

    const sqlQuery = `
      DELETE FROM newsletter
      WHERE news_id = ?
    `;
    const values = [news_id];

    const result = await query({
      query: sqlQuery,
      values,
    });

    return new Response(JSON.stringify({ status: 200, message: "Newsletter deleted successfully", result }), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
