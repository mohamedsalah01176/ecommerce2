/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'http',
        hostname: 'react-ecommerce.activegroup-eg.com',
      },
      {
        protocol: 'https',
        hostname: 'cdn.dummyjson.com',
      },
      {  protocol: 'https',
        hostname: 'dummyjson.com',
      },
      {
        protocol: 'http',
        hostname: 'localhost',
      },
    ],
  },
};



export default nextConfig;
