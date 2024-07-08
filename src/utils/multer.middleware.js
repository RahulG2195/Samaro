import path from "path";
import multer from "multer";
import { writeFile } from "fs/promises";

const upload = multer({
  dest: "public/uploads/",
  limits: { fileSize: 10 * 1024 * 1024 }, // 10 MB size limit
  storage: multer.diskStorage({
    destination: "public/uploads/",
    filename: (_req, file, cb) => {
      cb(null, file.originalname);
    },
  }),
  fileFilter: (_req, file, cb) => {
    let ext = path.extname(file.originalname);
    const allowedExtensions = [".jpg", ".jpeg", ".webp", ".png", ".mp4", ".pdf"];

    if (!allowedExtensions.includes(ext.toLowerCase())) {
      return cb(new Error(`Unsupported file type: ${ext}`), false);
    }

    cb(null, true);
  },
});

const handleUpload = (req, res) => {
  return new Promise((resolve, reject) => {
    upload.single('file')(req, res, (err) => {
      if (err instanceof multer.MulterError) {
        // Multer error (e.g., file size exceeded)
        reject({ status: 400, message: `Upload error: ${err.message}` });
      } else if (err) {
        // Other errors (e.g., unsupported file type)
        reject({ status: 400, message: err.message });
      } else {
        // Successful upload
        resolve({ status: 200, message: 'File uploaded successfully' });
      }
    });
  });
};
const uploadImage = async (req, res, file) => {
  try {
    console.log("Uploading", file);
    const result = await handleUpload(req, res);
    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);
    const path = `public/uploads/${file.name}`;
    await writeFile(path, buffer);
    console.log("Uploaded", result);
    return result.filename; 
  } catch (error) {
    console.log('Upload error: ', error.message);
    throw error;
  }
}
export { handleUpload , uploadImage };