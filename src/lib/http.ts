export default async function http<T>(
  input: RequestInfo | URL,
  init?: RequestInit,
): Promise<T> {
  const response = await fetch(input, {
    headers: {
      accept: 'application/json',
      'content-type': 'application/json',
    },
    ...init,
  });
  const data = await response.json();

  if (response.ok) {
    return data as T;
  } else {
    throw response;
  }
}
