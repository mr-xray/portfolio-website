import type { APIRoute } from "astro";
import { fetchCursor, fetchFolder } from "../../../service/cdn";
import { ui } from "../../../i18n/ui";

export const GET: APIRoute = async ({ params, request }) => {
  if (!request.url.includes("?")) {
    return new Response(null, {
      status: 400,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
  let urlParams = new URLSearchParams(request.url.split("?")[1]);
  let category = urlParams.get("category");
  let nextCursor = urlParams.get("next_cursor");
  if (
    !category ||
    !Object.keys(ui.en).includes(category) ||
    !category.startsWith("pics.")
  ) {
    return new Response("Category is missing!", {
      status: 422,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }

  try {
    const cloudinaryResult = await fetchFolder(
      import.meta.env.CDN_FOLDER,
      ["image", category],
      "image",
      10,
      nextCursor,
    );
    let urls = cloudinaryResult.resources;
    urls = {
      urls: urls.map((element: any) => element.secure_url),
      next_cursor: cloudinaryResult.next_cursor,
    };
    return new Response(JSON.stringify(urls), {
      status: 200,
      headers: {
        "Content-Type": "application/json",
      },
    });
  } catch (error) {
    console.log(error);
    return new Response("An error occurred fetching images", {
      status: 500,
      headers: {
        "Content-Type": "text/plain",
      },
    });
  }
};
