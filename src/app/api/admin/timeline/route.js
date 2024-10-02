import { query } from "@/utils/Dbconnect"; // Database query utility

// GET all timeline entries
export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM timeline", // Fetch all entries
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// GET a specific timeline entry by ID
export async function GET_ONE(request) {
  const { id } = request.params; // Assuming you are using some kind of routing to get the id
  try {
    const results = await query({
      query: "SELECT * FROM timeline WHERE id = ?", // Fetch entry by ID
      values: [id],
    });
    if (results.length === 0) {
      return new Response(JSON.stringify({ status: 404, message: "Entry not found" }), { status: 404 });
    }
    return new Response(JSON.stringify(results[0]), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// POST a new timeline entry
export async function POST(request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const { year, title, icon } = data;

    const sqlQuery = `INSERT INTO timeline (year, title, icon) VALUES (?, ?, ?)`;
    const result = await query({
      query: sqlQuery,
      values: [year, title, icon],
    });

    return new Response(
      JSON.stringify({ status: 201, message: "Timeline entry created successfully", id: result.insertId }),
      { status: 201 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// PUT to update a timeline entry by ID
export async function PUT(request) {
  try {
    const formData = await request.formData();
    const data = Object.fromEntries(formData.entries());

    const { id, year, title, icon } = data;

    const updateFields = [];
    const values = [];

    if (year) {
      updateFields.push('year = ?');
      values.push(year);
    }
    if (title) {
      updateFields.push('title = ?');
      values.push(title);
    }
    if (icon) {
      updateFields.push('icon = ?');
      values.push(icon);
    }

    if (updateFields.length === 0) {
      return new Response(JSON.stringify({ status: 400, message: "No fields to update" }), { status: 400 });
    }

    const sqlQuery = `UPDATE timeline SET ${updateFields.join(',')} WHERE id = ?`;
    values.push(id);

    const result = await query({
      query: sqlQuery,
      values,
    });

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ status: 404, message: "Entry not found" }), { status: 404 });
    }

    return new Response(
      JSON.stringify({ status: 200, message: "Timeline entry updated successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// DELETE a timeline entry by ID
export async function DELETE(request) {
    console.log("requestres",request)
    const requestData = await request.json();
    const { id } = requestData;
    console.log("requestres",id)
//   const { id } = request.params; 
  try {
    const result = await query({
      query: "DELETE FROM timeline WHERE id = ?",
      values: [id],
    });

    if (result.affectedRows === 0) {
      return new Response(JSON.stringify({ status: 404, message: "Entry not found" }), { status: 404 });
    }

    return new Response(
      JSON.stringify({ status: 200, message: "Timeline entry deleted successfully" }),
      { status: 200 }
    );
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}
