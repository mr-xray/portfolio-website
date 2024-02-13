import { v2 as cloudinary } from "cloudinary";
import { atom } from "nanostores";

let cdn = atom(null as any);

export async function uploadToCloudify(image: File, category: string) {
  ensureConfig();
  let base64 = await fileToBase64(image);
  return await cloudinary.uploader.upload("data:image/png;base64," + base64, {
    folder: import.meta.env.CDN_FOLDER,
    tags: category + ", image",
  });
}

export async function fetchFolder(
  folder: string,
  tags: string[],
  resource_type: "image" | "video",
  max_results: number,
) {
  ensureConfig();
  return cloudinary.search
    .expression(
      `resource_type:${resource_type} AND folder=${folder}` +
        (tags.length > 0 ? " AND tags=" + tags.join(", ") : ""),
    )
    .sort_by("uploaded_at", "desc")
    .max_results(max_results)
    .execute();
}

async function fileToBase64(file: File) {
  let buffer = await file.arrayBuffer();
  let binary = "";
  const bytes = new Uint8Array(buffer);
  const len = bytes.byteLength;
  for (var i = 0; i < len; i++) {
    binary += String.fromCharCode(bytes[i]);
  }
  return btoa(binary);
}

function ensureConfig() {
  if (!cdn.get()) {
    const config = cloudinary.config({
      cloud_name: import.meta.env.CDN_CLOUD_NAME,
      api_key: import.meta.env.CDN_API_KEY,
      api_secret: import.meta.env.CDN_SECRET,
    });
    cdn.set(config);
  }
}
