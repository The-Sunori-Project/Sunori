import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  // Before commit add " basepath: "sunori.org/"
  // If developing remove basepath
  images: {
    unoptimized: true,
  },
};

export default nextConfig;
