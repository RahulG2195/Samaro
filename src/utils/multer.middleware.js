import path from "path";
import { writeFile } from "fs/promises";

const allowedExtensions = [".jpg", ".jpeg", ".webp", ".png", ".mp4", ".pdf"];

const uploadImage = async (_req, _res, file) => {
  try {
    if (!file || typeof file.name !== "string") {
      throw { status: 400, message: "Invalid file object" };
    }

    const ext = path.extname(file.name).toLowerCase();
    if (!allowedExtensions.includes(ext)) {
      throw { status: 400, message: `Unsupported file type: ${ext}` };
    }

    const uploadDir = process.env.NEXT_PUBLIC_UPLOAD_PATH_DIR || "public/uploads";
    const savePath = path.join(uploadDir, file.name);

    const arrayBuffer = await file.arrayBuffer(); // `File` from FormData
    const buffer = Buffer.from(arrayBuffer);

    await writeFile(savePath, buffer);

    return file.name;
  } catch (error) {
    console.error("uploadImage error:", error.message || error);
    throw error;
  }
};

export { uploadImage };
