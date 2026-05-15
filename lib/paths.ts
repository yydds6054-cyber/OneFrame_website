// Prefix for static assets when the site is served under a subpath
// (e.g. https://<user>.github.io/OneFrame_website/). next/image with
// `unoptimized: true` does not auto-apply basePath, so use this for any
// raw asset src that should resolve under the project's basePath.
const BASE_PATH =
  process.env.NODE_ENV === "production" ? "/OneFrame_website" : "";

export const asset = (path: string) => `${BASE_PATH}${path}`;
