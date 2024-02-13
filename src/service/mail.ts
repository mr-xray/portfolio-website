import sendGrid from "@sendgrid/mail";
sendGrid.setApiKey(import.meta.env.SENDGRID_API_KEY);

export const sendMail = (name: string, email: string, message: string) => {
  const msg = {
    to: import.meta.env.SENDGRID_VERIFIED_EMAIL,
    from: import.meta.env.SENDGRID_VERIFIED_EMAIL,
    replyTo: { email: email, name: name },
    subject: `Contact form submission from ${name}`,
    text: message,
  };
  return sendGrid.send(msg);
};
