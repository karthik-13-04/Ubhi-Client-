/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'sin1.contabostorage.com',
        pathname: '/**',
      },
    ],
  },
};
export default nextConfig;
