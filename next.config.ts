import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "picsum.photos",
      },
      {
        protocol: "https",
        hostname: "i.pravatar.cc",
      },
      {
        protocol: "https",
        hostname: "rukmini1.flixcart.com",
      },
      {
        protocol: "https",
        hostname: "*.flixcart.com",
      },
    ],
  },
};

export default nextConfig;
