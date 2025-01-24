
import { query } from "@/utils/Dbconnect";

export async function GET(req, res) {

  try {
    // const variation = req.url;
    let paramString = req.url.split('?')[1];
    let paramString2 = paramString.split('=')[1];
    console.log("param -------------------" + paramString);
    console.log("param -------------------" + paramString2);
    let value = 2;
    if(paramString2 == "spcProducts"){
      value = 1
    }
    console.log("param -------------------" + value );
    if(paramString2){
      const category = await query({
        query: "SELECT products.*, category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id WHERE products.cat_id = ?",
        values: [value],
      });

      let data = JSON.stringify(category);
      return new Response(data, {
        status: 200,
      });
    }

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

  try {
      const { prod_status, prodId } = await request.json();

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
