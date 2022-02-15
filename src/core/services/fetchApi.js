export async function fetchApi(endpoint, method, head, body) {
  const headers = { ...head, Accept: 'application/json' };
  method = method || 'GET';
  const config = {
    method,
    headers,
  };
  if (body) config.body = body;
  const response = await fetch(endpoint, config);
  return response;
}
