import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // Disable powered-by header to prevent technology fingerprinting
  poweredByHeader: false,
  // Ensure browser source maps are not exposed in production
  productionBrowserSourceMaps: false,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "i.ytimg.com",
        pathname: "/**",
      },
      {
        protocol: "https",
        hostname: "saloon.wtf",
        pathname: "/**",
      },
    ],
  },
};

export default nextConfig;
