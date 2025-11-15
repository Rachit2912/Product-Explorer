import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  productionBrowserSourceMaps: false, // Disable source maps in productioncls
  images: {
    remotePatterns: [new URL("https://picsum.photos/seed/**")],
  },
};

export default nextConfig;
