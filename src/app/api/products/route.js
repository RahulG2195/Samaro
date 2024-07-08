import { query } from "@/utils/Dbconnect";

export async function GET(req, res) {

  try {
    // const variation = req.url;
    let paramString = req.url.split('?')[1];
    let paramString2 = paramString.split('=')[1];

    if (paramString2 == 'All') {
      const category = await query({
        query: "SELECT products.*,category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id ",
        values: [],
      });

      let data = JSON.stringify(category);
      return new Response(data, {
        status: 200,
      });
    }
    else {

      const category = await query({
        query: "SELECT products.*,category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id WHERE variation = ? ",
        values: [paramString2.toLowerCase()],
      });

      let data = JSON.stringify(category);
      return new Response(data, {
        status: 200,
      });
    }

    // let data = JSON.stringify(category);
    // return new Response(data, {
    //   status: 200,
    // });

  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: error.message,
      })
    );
  }
}



export async function POST(request) {
  try {
    const { id } = await request.json();
    //  console.log("here is id bro",id) 

    const category = await query({
      query: "SELECT products.*,category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id WHERE seo_url = ?",
      values: [id],
    });

    let data = JSON.stringify(category);
    return new Response(data, {
      status: 200,
    });

  
  } catch (error) {
    return new Response(
      JSON.stringify({
        status: 500,
        message: error.message,
      })
    );
  }
  
}



//  this put is for similiar prod. jsx
export async function PUT(request) {

  try {
      
      
      const category = await query({
          query: "SELECT products.*,category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id",
          values: [],
      });

      let data = JSON.stringify(category);
      return new Response(data, {
          status: 200,
      });
  } catch (error) {
      return new Response(
          JSON.stringify({
              status: 500,
              message: error.message,
          })
      );
  }
}


export async function PATCH(request) {
  console.log("Received PATCH request");

  try {
      const { prod_status, prodId } = await request.json();
      console.log("Payload:", prod_status, prodId);

      const updateResult = await query({
          query: "UPDATE products SET prod_status = ? WHERE prod_id = ?",
          values: [prod_status, prodId],
      });

      let data = JSON.stringify(updateResult);
      return new Response(data, {
          status: 200,
      });
  } catch (error) {
      return new Response(
          JSON.stringify({
              status: 500,
              message: error.message,
          })
      );
  }
}
