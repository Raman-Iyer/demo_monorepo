/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    externalDir: ["@demo_monorepo/common"],
  },
};

export default nextConfig;
