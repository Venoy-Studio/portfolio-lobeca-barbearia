export async function onRequest(context) {
  const url = new URL(context.request.url);
  const targetUrl = url.searchParams.get('url');
  if (!targetUrl) {
    return new Response('Missing url parameter', { status: 400 });
  }
  return context.env.ASSETS.fetch(new URL(targetUrl, url.origin));
}
