/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ciscoviit.in',
        port: '',
        pathname: '/static/media/**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
