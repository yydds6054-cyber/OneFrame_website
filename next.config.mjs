/** @type {import('next').NextConfig} */
const isProd = process.env.NODE_ENV === "production";
const repo = "OneFrame_website";

const nextConfig = {
  reactStrictMode: true,
  output: "export",
  images: { unoptimized: true },
  basePath: isProd ? `/${repo}` : "",
  assetPrefix: isProd ? `/${repo}/` : "",
  trailingSlash: true,
};

export default nextConfig;
