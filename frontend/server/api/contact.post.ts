export default defineEventHandler(async (event: any) => {
  const z = useZod();
  const body = await readBody(event);

  const schema = z.object({
    fullName: z.string().trim().min(1),
    email: z.email().min(1),
    message: z.string().trim().min(1),
  });

  const result = schema.safeParse(body);

  if (!result.success) {
    throw createError({
      status: 422,
      statusMessage: "Validation Error",
      message: result.error.issues[0]?.message || "Not valid data!",
      data: result.error.issues,
    });
  }

  const { fullName, email, message } = result.data;

  // send email
  const { sendMail } = useNodeMailer();

  try {
    await sendMail({
      subject: `Golden Comb Contact from ${fullName}`,
      text: `New contact form submission:\n\nName: ${fullName}\nEmail: ${email}\n\nMessage:\n${message}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${fullName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, "<br>")}</p>
      `,
      to: "reza2boyce@gmail.com",
      replyTo: email,
    });
  } catch (error: any) {
    console.error("Failed to send email:", error);
    throw createError({
      statusCode: 500,
      statusMessage: "Email Sending Failed",
      message:
        "Unable to send your message at this time. Please try again later.",
    });
  }

  return {
    status: 200,
    data: { fullName, email, message },
  };
});
