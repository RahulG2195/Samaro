// src/controllers/heroBannerController.js
import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";

export async function PUT(req, res) {
    try {
        const formData = await req.formData();
        const data = Object.fromEntries(formData.entries());
        const { banner_id } = data;

        const updateFields = [];
        const values = [];

        // Fetch existing images
        const existingData = await query({
            query: "SELECT banner_img, mobileBanner_img FROM herobanner WHERE banner_id = ?",
            values: [banner_id],
        });

        const existingBannerImages = existingData[0]?.banner_img ? existingData[0].banner_img.split(',') : [];
        const existingMobileBannerImages = existingData[0]?.mobileBanner_img ? existingData[0].mobileBanner_img.split(',') : [];

        // Handle banner images
        const bannerImages = [...existingBannerImages];
        for (let i = 0; formData.has(`banner_img[${i}]`); i++) {
            const bannerImgFile = formData.get(`banner_img[${i}]`);
            if (bannerImgFile) {
                try {
                    await uploadImage(req, res, bannerImgFile);
                    bannerImages.push(bannerImgFile.name);
                } catch (error) {
                    console.error('Error uploading banner image:', error);
                }
            }
        }
        if (bannerImages.length > 0) {
            updateFields.push('banner_img = ?');
            values.push(bannerImages.join(','));
        }

        // Handle mobile banner images
        const mobileBannerImages = [...existingMobileBannerImages];
        for (let i = 0; formData.has(`mobileBanner_img[${i}]`); i++) {
            const mobileBannerImgFile = formData.get(`mobileBanner_img[${i}]`);
            if (mobileBannerImgFile) {
                try {
                    await uploadImage(req, res, mobileBannerImgFile);
                    mobileBannerImages.push(mobileBannerImgFile.name);
                } catch (error) {
                    console.error('Error uploading mobile banner image:', error);
                }
            }
        }
        if (mobileBannerImages.length > 0) {
            updateFields.push('mobileBanner_img = ?');
            values.push(mobileBannerImages.join(','));
        }

        // Add other fields to update
        const fieldsToUpdate = ['banner_title', 'banner_content', 'banner_url', 'button_text'];
        fieldsToUpdate.forEach(field => {
            if (data[field]) {
                updateFields.push(`${field} = ?`);
                values.push(data[field]);
            }
        });

        // Add banner_id to values array
        values.push(banner_id);

        // Construct and execute SQL query
        const sqlQuery = `UPDATE herobanner SET ${updateFields.join(', ')} WHERE banner_id = ?`;
        const result = await query({
            query: sqlQuery,
            values,
        });

        // Return the updated data
        return new Response(JSON.stringify({ ...data, updatedFields: updateFields }), {
            status: 200,
            headers: {
                'Content-Type': 'application/json',
            }
        });
    } catch (error) {
        console.error('Error handling PUT request:', error.message);
        return new Response(
            JSON.stringify({ status: 500, message: error.message }),
            {
                status: 500,
                headers: {
                    'Content-Type': 'application/json',
                }
            }
        );
    }
}
export async function GET(request) {
    try {
        const category = await query({
            query: "SELECT * FROM herobanner",
            values: [],
        });

        let data = JSON.stringify(category);
        return new Response(data, { status: 200 });
    } catch (error) {
        return new Response(
            JSON.stringify({ status: 500, message: error.message }),
            { status: 500 }
        );
    }
}

export async function DELETE(req) {
    try {
      const { banner_id, imageType, imageName } = await req.json();
      console.log("deleteeeeeee",imageName)
      
      if (!banner_id || !imageType || !imageName) {
        return new Response(
          JSON.stringify({ message: 'Missing required fields' }),
          {
            status: 400,
            headers: {
              'Content-Type': 'application/json',
            }
          }
        );
      }
  
      // Fetch existing images
      const existingData = await query({
        query: `SELECT ${imageType} FROM herobanner WHERE banner_id = ?`,
        values: [banner_id],
      });
  
      const existingImages = existingData[0]?.[imageType]
      ? existingData[0][imageType].split(',').map(img => img.trim())
      : [];
          console.log("existing data ",existingImages)
      
      // Check if the image exists in the list
      if (!existingImages.includes(imageName)) {
       try {
        return new Response(
            console.log("first inside the includes"),
            JSON.stringify({ message: 'Missing required fields' }),
            {
              status: 404,
              headers: {
                'Content-Type': 'application/json',
              }
            }
          );
       } catch (error) {
        console.log(error)
       }
      }
      console.log("passeddd")
  
      // Remove the specified image
      const updatedImages = existingImages.filter(img => img !== imageName);
      console.log("updated string is ",updatedImages)
  
      // Update the database with the remaining images
      const updatedImagesString = updatedImages.length > 0 ? updatedImages.join(',') : null;
      await query({
        query: `UPDATE herobanner SET ${imageType} = ? WHERE banner_id = ?`,
        values: [updatedImagesString, banner_id],
      });

  
      return new Response(
        JSON.stringify({ message: 'Image deleted successfully', updatedImages }),
        {
          status: 200,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    } catch (error) {
      console.error('Error handling DELETE request:', error);
      return new Response(
        JSON.stringify({ message: 'Internal Server Error' }),
        {
          status: 500,
          headers: {
            'Content-Type': 'application/json',
          }
        }
      );
    }
  }