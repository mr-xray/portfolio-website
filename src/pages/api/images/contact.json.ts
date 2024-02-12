import type { APIRoute } from "astro";
import { sendMail } from "../../../service/mail";

export const POST: APIRoute = async ({ request }) => {
  try {
    const data = await request.formData();
    const name = data.get("name");
    const email = data.get("email");
    const message = data.get("message");
    if (name && email && message) {
      const response = await sendMail(
        name.toString(),
        email.toString(),
        message.toString(),
      );
      if (response[0].statusCode == 202) {
        return new Response(
          JSON.stringify({
            message: "Success",
          }),
          {
            status: 200,
          },
        );
      }
      throw response;
    } else {
      throw Error("Form data invalid");
    }
  } catch (error) {
    return new Response(
      JSON.stringify({
        error,
      }),
      {
        status: 422,
      },
    );
  }
};
