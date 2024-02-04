import type { APIRoute } from "astro";
import { v2 as cloudinary } from "cloudinary";
import { atom } from "nanostores";

let cdn = atom(null as any);

export const POST: APIRoute = async ({ request }) => {
  const uploadResponses = [];
  const formData: FormData = await request.formData();
  for (let image of formData) {
    if (image[0] != "file") {
      return new Response(
        JSON.stringify({
          message: "All form entries must be of type file!",
        }),
        {
          status: 422,
        },
      );
    }
    if ((image[1] as any as File).type.split("/")[0] !== "image") {
      return new Response(
        JSON.stringify({
          message: "All files must be of type image!",
        }),
        {
          status: 422,
        },
      );
    }
    uploadResponses.push(await uploadToCloudify(image[1] as any as File));
  }
  return new Response(
    JSON.stringify(uploadResponses.map((res) => res?.public_id)),
  );
};

async function uploadToCloudify(image: File) {
  if (!cdn.get()) {
    const config = cloudinary.config({
      cloud_name: import.meta.env.CDN_CLOUD_NAME,
      api_key: import.meta.env.CDN_API_KEY,
      api_secret: import.meta.env.CDN_SECRET,
    });
    cdn.set(config);
  }
  let base64 = await fileToBase64(image);
  return await cloudinary.uploader.upload("data:image/png;base64," + base64);
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
