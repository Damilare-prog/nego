import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  basePath: "/nego",
  images: {
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
