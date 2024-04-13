export function response(
  content: string | Record<string, unknown>,
  statusCode: number = 200,
  contentType: string = 'application/json'
): Response {
  let body: string;
  if (typeof content === 'string') {
    body = content;
  } else {
    body = JSON.stringify(content);
  }

  return new Response(body, {
    status: statusCode,
    headers: {
      'Content-Type': contentType,
    },
  });
}
