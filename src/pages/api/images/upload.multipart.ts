import type { APIRoute } from "astro";
import { uploadToCloudify } from "../../../service/cdn";

export const POST: APIRoute = async ({ request }) => {
  const uploadResponses = [];
  const formData: FormData = await request.formData();
  let category: string | undefined;
  let password = formData.get("password");
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
  formData.delete("password");
  formData.delete("compression");
  try {
    for (let input of formData) {
      if (!category && input[0] == "category" && input[1]) {
        category = input[1] as string;
        continue;
      }
      if (input[0] != "file") {
        return new Response(
          JSON.stringify({
            message: "All form entries must be of type file!",
          }),
          {
            status: 422,
          },
        );
      }
      if ((input[1] as any as File).type.split("/")[0] !== "image") {
        return new Response(
          JSON.stringify({
            message: "All files must be of type image!",
          }),
          {
            status: 422,
          },
        );
      }
      if ((input[1] as any as File).size > 10485760) {
        return new Response(
          JSON.stringify({
            message:
              "File size is " +
              ((input[1] as any as File).size / 1048576).toFixed(2) +
              "MB but must not exceed 10MB",
          }),
          {
            status: 422,
          },
        );
      }
      uploadResponses.push(
        await uploadToCloudify(
          input[1] as any as File,
          category ?? "pics.other",
        ),
      );
    }
    return new Response(
      JSON.stringify(uploadResponses.map((res) => res?.public_id)),
    );
  } catch (error) {
    return new Response(
      JSON.stringify({ message: "Unknown error occurred." }),
      {
        status: 500,
      },
    );
  }
};
