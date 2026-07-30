const nextConfig = {
  output: 'export',
  assetPrefix: '/Resume-site/',
  basePath: '/Resume-site',
  pageExtensions: ['tsx', 'mdx', 'ts'],
  reactStrictMode: true,
  trailingSlash: false,
  images: {
    unoptimized: true,
  },
};

module.exports = nextConfig;
