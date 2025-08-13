const config = {
  siteUrl: 'https://mocamp-front-end.vercel.app',
  generateRobotsTxt: true,
  changefreq: 'daily',
  priority: 1.0, // 중요도 최상
  sitemapSize: 7000,
  exclude: ['/admin/*'],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: '*',
        allow: '/',
        disallow: ['/admin'],
      },
    ],
  },
};

export default config;
