/** @type {import('next').NextConfig} */


const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "**",
      },
    ],
  },
  devIndicators: {
    buildActivity: false, // Hide build progress indicator
  },
  webpack: (config) => {
    config.infrastructureLogging = { level: "error" }; // Hide Webpack warnings
    return config;
  },
  typescript: {
    // Ignore TypeScript errors during build
    ignoreBuildErrors: true,
  },
};

export default nextConfig;
