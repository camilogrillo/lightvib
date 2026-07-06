import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Standalone output bundles everything needed to run on a VPS without node_modules
  output: "standalone",
};

export default nextConfig;
