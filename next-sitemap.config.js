/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: "https://www.csmstudyzone.in",
  generateRobotsTxt: true,
  sitemapSize: 7000,
  trailingSlash: false,
  // Exclude redirecting URLs and non-indexable pages
  exclude: [
    "/api/*",
    "/404",
    "/500",
  ],
  robotsTxtOptions: {
    policies: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/", "/404", "/500"],
      },
    ],
  },
};

