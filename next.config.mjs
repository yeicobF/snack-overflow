/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  images: {
    remotePatterns: [
      {
        hostname: "source.unsplash.com",
      },
      {
        hostname: "images.unsplash.com",
      },
    ],
  },
}

export default nextConfig
