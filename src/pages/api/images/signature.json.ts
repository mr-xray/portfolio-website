import type { APIRoute } from "astro";
import { generateSignature } from "../../../service/cdn";

export const POST: APIRoute = async ({ request }) => {
  const body = await request.json();
  const password = body.password;
  const category = body.category;
  if (password?.toString() != import.meta.env.CDN_PERMISSION_KEY) {
    return new Response(
      JSON.stringify({
        message: "Wrong or missing password!",
      }),
      {
        status: 401,
      },
    );
  }
  try {
    const signature = await generateSignature(category);
    return new Response(
      JSON.stringify({
        signature: signature.signature,
        timestamp: signature.timestamp,
        folder: signature.folder,
        tags: signature.tags,
        cloudname: import.meta.env.CDN_CLOUD_NAME,
        apikey: import.meta.env.CDN_API_KEY,
      }),
      {
        status: 200,
        headers: {
          "Content-Type": "application/json",
        },
      },
    );
  } catch (error) {
    return new Response(
      JSON.stringify({
        message: "Error occurred trying to generate upload signature",
      }),
      {
        status: 500,
      },
    );
  }
};
