/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "app.synergyai.io",
      },
    ],
  },
  webpack: (config) => {
    config.externals ??= [];
    config.externals.push("pino-pretty");
    config.externals.push("lokijs");
    config.externals.push("encoding");
    return config;
  },
};

export default nextConfig;
