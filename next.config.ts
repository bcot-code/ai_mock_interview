import type { NextConfig } from "next";
//NoteToSelf: still underdeveoping this will keep warning bay while testing app
const nextConfig: NextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  }
};

export default nextConfig;
