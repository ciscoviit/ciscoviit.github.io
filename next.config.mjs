/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'ciscoviit.in',
        port: '',
        pathname: '/static**',
        search: '',
      },
    ],
  },
};

export default nextConfig;
