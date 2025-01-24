import { query } from "@/utils/Dbconnect";
import { uploadImage } from "@/utils/multer.middleware";
import { writeFile } from "fs/promises";

export async function GET(request) {
    try {
        const results = await query({
            query: "SELECT products.*, category.cat_name FROM products JOIN category ON products.cat_id = category.cat_id",
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

        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'string') {
                data[key] = data[key].trim();
            }
        });

        const {
            productname, code, catalogue, variation, color, places,
            thikness, layer, prod_finish, size, spiece, no_of_groves,
            m2pack, plank, prod_images, category
        } = data;

        let cat_id = null;
        if (category.toLowerCase() === 'spc') {
            cat_id = 1;
        } else if (category.toLowerCase() === 'lvt') {
            cat_id = 2;
        }
        const updateFields = [];
        const values = [];


        const frontImageFiles = [];
        const frontImageNames = [];


        for (let i = 0; i < requestData.getAll('frontImage').length; i++) {
            const frontImageFile = requestData.getAll('frontImage')[i];
            if (frontImageFile) {
                frontImageFiles.push(frontImageFile);

                // Upload each front image
                try {
                    await uploadImage(request, response, frontImageFile);
                    frontImageNames.push(frontImageFile.name); // Collect image names for DB
                } catch (error) {
                    console.error('Error uploading front image:', error);
                }
            }
        }


         if (frontImageNames.length > 0) {
            updateFields.push('prod_images');
            values.push(frontImageNames.join(',')); // Join names with a comma
        }


        const otherImageFiles = [];
        const otherImageNames = [];

        for (let i = 0; i < requestData.getAll('otherImages').length; i++) {
            const otherImageFile = requestData.getAll('otherImages')[i];
            if (otherImageFile) {
                otherImageFiles.push(otherImageFile);

                // Upload each other image
                try {
                    await uploadImage(request, response, otherImageFile);
                    otherImageNames.push(otherImageFile.name); // Collect image names for DB
                } catch (error) {
                    console.error('Error uploading other images:', error);
                }
            }
        }

        if (otherImageNames.length > 0) {
            updateFields.push('prod_image2');
            values.push(otherImageNames.join(',')); // Join other image names
        }

        const seoUrl = productname ? productname.replace(/\s+/g, '_') : null;

        const fields = {
            'prod_name': productname,
            'seo_url': seoUrl,
            'cat_id': cat_id,
            'prod_code': code,
            'prod_catalogue': catalogue,
            'variation': variation,
            'color': color,
            'place': places,
            'thikness': thikness,
            'layer': layer,
            'prod_finish': prod_finish,
            'prod_size': size,
            'prod_spiece': spiece,
            'no_of_groves': no_of_groves,
            'm2pack': m2pack,
            'plank': plank
        };

        for (const [field, value] of Object.entries(fields)) {
            if (value !== undefined && value !== null) {
                updateFields.push(field);
                values.push(value);
            } else {
                updateFields.push(field);
                values.push(null);
            }
        }

        const placeholders = updateFields.map(() => '?').join(', ');

        const sqlQuery = `INSERT INTO products (${updateFields.join(', ')}) VALUES (${placeholders})`;
        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Product added successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function PUT(request, response) {
    try {
        const requestData = await request.formData();
        const data = Object.fromEntries(requestData.entries());

        // Trim all string fields
        Object.keys(data).forEach(key => {
            if (typeof data[key] === 'string') {
                data[key] = data[key].trim();
            }
        });

        const {
            productId, productname, code, catalogue, variation, color, places,
            thikness, layer, prod_finish, size, spiece, no_of_groves, m2pack, plank,
            status, prod_images, category ,frontImage
        } = data;

        // Handle category ID
        let cat_id = null;
        if (category === 'SPC') {
            cat_id = 1;
        } else if (category === 'LVT') {
            cat_id = 2;
        }

        const updateFields = [];
        const values = [];

        // Handle front images (allowing multiple files)
        const frontImageFiles = [];
        const frontImageNames = [];


        for (let i = 0; i < requestData.getAll('frontImage').length; i++) {
            const frontImageFile = requestData.getAll('frontImage')[i];
            if (frontImageFile) {
                frontImageFiles.push(frontImageFile);

                // Upload each front image
                try {
                    await uploadImage(request, response, frontImageFile);
                    frontImageNames.push(frontImageFile.name); // Collect image names for DB
                } catch (error) {
                    console.error('Error uploading front image:', error);
                }
            }
        }


         if (frontImageNames.length > 0) {
            updateFields.push('prod_images = ?');
            values.push(frontImageNames.join(',')); // Join names with a comma
        }


        // Handle other product images
         const otherImageFiles = [];
        const otherImageNames = [];

        for (let i = 0; i < requestData.getAll('otherImages').length; i++) {
            const otherImageFile = requestData.getAll('otherImages')[i];
            if (otherImageFile) {
                otherImageFiles.push(otherImageFile);

                // Upload each other image
                try {
                    await uploadImage(request, response, otherImageFile);
                    otherImageNames.push(otherImageFile.name); // Collect image names for DB
                } catch (error) {
                    console.error('Error uploading other images:', error);
                }
            }
        }

        if (otherImageNames.length > 0) {
            updateFields.push('prod_image2 = ?');
            values.push(otherImageNames.join(',')); // Join other image names
        }

        // Update product fields
        const fields = {
            'prod_name = ?': productname,
            'prod_code = ?': code,
            'cat_id = ?': cat_id,
            'prod_catalogue = ?': catalogue,
            'variation = ?': variation,
            'color = ?': color,
            'place = ?': places,
            'thikness = ?': thikness,
            'layer = ?': layer,
            'prod_finish = ?': prod_finish,
            'prod_size = ?': size,
            'prod_spiece = ?': spiece,
            'no_of_groves = ?': no_of_groves,
            'm2pack = ?': m2pack,
            'plank = ?': plank,
            'prod_status = ?': status,
        };

        for (const [field, value] of Object.entries(fields)) {
            if (value !== undefined && value !== null) {
                updateFields.push(field);
                values.push(value);
            }
        }

        if (updateFields.length === 0) {
            return new Response(JSON.stringify({ status: 400, message: "No fields to update" }), { status: 400 });
        }

        values.push(productId);

        const sqlQuery = `UPDATE products SET ${updateFields.join(', ')} WHERE prod_id = ?`;

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Product updated successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}

export async function DELETE(request) {
    try {
        const { id } = await request.json();

        const sqlQuery = `DELETE FROM products WHERE prod_id = ? `;
        const values = [id];

        const result = await query({
            query: sqlQuery,
            values,
        });

        return new Response(JSON.stringify({ status: 200, message: "Product deleted successfully", result }), { status: 200 });
    } catch (error) {
        return new Response(JSON.stringify({ status: 500, message: error.message }), { status: 500 });
    }
}
