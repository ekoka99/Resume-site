module.exports = {
  siteUrl: 'https://ekoka99.github.io/Resume-site',
  outDir: './out',
  exclude: ['/404*', '/500*'],
  generateRobotsTxt: true,
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/404', '/500'],
      },
    ],
  },
};
