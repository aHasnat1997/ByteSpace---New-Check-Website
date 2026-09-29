import type { NextConfig } from "next"

const nextConfig: NextConfig = {
  turbopack: {
    rules: {
      // Applies SVGR loader specifically to files inside an "icons" directory
      "*.svg": {
        loaders: ["@svgr/webpack"],
        condition: { path: "**/svgs/**" },
        as: "*.js",
      },
    },
  },
}

export default nextConfig
