/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'juross14.github.io',
            port: '',
            pathname: '/myprofile/**',
          },
        ],
      },
};

export default nextConfig;
