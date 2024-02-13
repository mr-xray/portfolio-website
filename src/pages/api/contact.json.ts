import type { APIRoute } from "astro";
import { sendMail } from "../../service/mail";

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
        return new Response("Success", {
          headers: {
            "Content-Type": "text/plain",
          },
          status: 200,
        });
      }
      throw response;
    } else {
      throw { message: "Form data invalid" };
    }
  } catch (error: any) {
    return new Response(error.message, {
      headers: {
        "Content-Type": "text/plain",
      },
      status: 422,
    });
  }
};
