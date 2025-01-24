import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

// GET endpoint to fetch all benefits
export async function GET(request) {
  try {
    const results = await query({
      query: "SELECT * FROM benefits_slider",
    });
    return new Response(JSON.stringify(results), { status: 200 });
  } catch (error) {
    return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
  }
}

// POST endpoint to add slider images
export async function POST(request,response) {
    const formData = await request.formData();
    const files = formData.getAll("files");
  
    try {
      // Logic to retrieve current images
      const currentResult = await query({
        query: "SELECT image FROM benefits_slider WHERE id = 1", // Adjust as needed
      });
      const currentImages = currentResult[0].image.split(',');
  
      const newImagePaths = [];
      for (const file of files) {
        const imagePath = await uploadImage(request,response, file); // Implement your upload logic
        newImagePaths.push(file.name);
      }
  
      const updatedImages = [...currentImages, ...newImagePaths].join(',');
  
      await query({
        query: "UPDATE benefits_slider SET image = ? WHERE id = 1", // Adjust as needed
        values: [updatedImages],
      });
  
      return new Response(JSON.stringify({ status: 200, message: "Images added successfully." }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }

  
// DELETE endpoint to remove a slider image
export async function DELETE(request) {
    const { imageUrl } = await request.json();
  
    try {
      const currentResult = await query({
        query: "SELECT image FROM benefits_slider WHERE id = 1", // Adjust as needed
      });
      const currentImages = currentResult[0].image.split(',');
      const updatedImages = currentImages.filter(image => image !== imageUrl).join(',');
  
      await query({
        query: "UPDATE benefits_slider SET image = ? WHERE id = 1", // Adjust as needed
        values: [updatedImages],
      });
  
      return new Response(JSON.stringify({ status: 200, message: "Image deleted successfully." }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }
  

  export async function PUT(request) {
    const { heading } = await request.json(); // Extract the heading from the request body
  
    try {
      await query({
        query: "UPDATE benefits_slider SET heading = ? WHERE id = 1", // Adjust as needed
        values: [heading],
      });
  
      return new Response(JSON.stringify({ status: 200, message: "Heading updated successfully." }), { status: 200 });
    } catch (error) {
      return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
  }