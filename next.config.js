/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  webpack: (config, { isServer }) => {
    if (isServer) {
      // Fix for Node.js compatibility issues
      config.externals = config.externals || [];
    }
    return config;
  },
  async redirects() {
    return [
      // Redirect non-www to www
      {
        source: '/:path*',
        has: [
          {
            type: 'host',
            value: 'csmstudyzone.in',
          },
        ],
        destination: 'https://www.csmstudyzone.in/:path*',
        permanent: true,
      },
      // Redirect trailing slash to non-trailing slash (except root)
      {
        source: '/:path+/',
        destination: '/:path+',
        permanent: true,
      },
    ];
  },
}

module.exports = nextConfig

