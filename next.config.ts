import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  outputFileTracingIncludes: {
    "/*": ["./content/**/*", "./config/**/*.yaml"],
  },
  outputFileTracingExcludes: {
    "/*": ["./tools/penetration/python/**/*"],
  },
};

export default nextConfig;
