export default defineEventHandler(async (event: any) => {
  const z = useZod();
  const body = await readBody(event);

  const schema = z.object({
    fullName: z.string().min(1),
    email: z.string().min(1),
    message: z.string().min(1),
  });

  const result = schema.safeParse(body);

  if (!result.success) {
    return {
      status: 422,
      statusMessage: "Validation Error",
      message: result.error.issues[0]?.message || "Not valid data!",
      data: result.error.issues,
    };
  }

  const { fullName, email, message } = result.data;

  return {
    status: 200,
    data: { fullName, email, message },
  };
});
