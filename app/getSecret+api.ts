export function GET(request: Request) {
  return Response.json({
    secret: process.env.MY_SECRET,
    sensitive: process.env.MY_SENSITIVE,
    otherSecretValue: process.env.OTHER_SECRET,
  });
}
