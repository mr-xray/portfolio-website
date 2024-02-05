import type { APIRoute } from "astro";
import { fetchFolder } from "../../../service/cdn";

/*export const GET: APIRoute = async ({ params, request }) => {
  const uploadResponses = [];
  const formData: FormData = await request.formData();
  let category: string | undefined;
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
    uploadResponses.push(
      await uploadToCloudify(input[1] as any as File, category ?? "pics.other"),
    );
  }
  return new Response(
    JSON.stringify(uploadResponses.map((res) => res?.public_id)),
  );
};*/
