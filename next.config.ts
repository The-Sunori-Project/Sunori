import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Before commit add " basepath: "nextjs.sunori.org/"
  // If developing remove basepath
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
