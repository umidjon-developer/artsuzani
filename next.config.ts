import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  experimental: {
    serverActions: {
      bodySizeLimit: "10mb", // default 1mb -> 10mb
    },
  },
  images: {
    domains: [
      "avatars.mds.yandex.net",
      "dkm.gov.uz",
      "tourcentralasia.com",
      "0evi7lr5v8.ufs.sh",
    ],
  },
};

export default nextConfig;
