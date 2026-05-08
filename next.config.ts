import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    // Allow all local images in public/
    unoptimized: false,
    formats: ["image/webp", "image/avif"],
  },
};

export default nextConfig;
