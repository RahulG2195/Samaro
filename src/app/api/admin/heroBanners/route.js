
// src/controllers/heroBannerController.js
import { query } from "@/utils/Dbconnect";

// import { uploadImage } from "@/utils/multer.middleware";
import { writeFile } from "fs/promises";

import {  uploadImage } from "@/utils/multer.middleware";

export async function PUT(req, res) {
    try {
        const formData = await req.formData();
        const data = Object.fromEntries(formData.entries());
        const { banner_id, banner_img, mobileBanner_img } = data;

        const updateFields = [];
        const values = [];
        // Handle image uploads and add to updateFields if successful
        if (banner_img) {
            try {
                const bannerImgName = await uploadImage(req, res, banner_img);
                updateFields.push('banner_img = ?');
                values.push(banner_img.name);
            } catch (error) {
                console.error('Error uploading banner image:', error);
            }
        }
        if (mobileBanner_img) {
            try {
                const mobileBannerImgName = await uploadImage(req, res, mobileBanner_img);
                updateFields.push('mobileBanner_img = ?');
                values.push(mobileBanner_img.name);
            } catch (error) {
                console.error('Error uploading mobile banner image:', error);
            }
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
