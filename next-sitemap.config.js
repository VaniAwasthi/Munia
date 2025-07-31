const dev = process.env.NODE_ENV !== 'production';

module.exports = {
  siteUrl: dev ? 'http://localhost:3000' : 'https://muina.in',
  generateRobotsTxt: true, // Optional: generates robots.txt
  generateIndexSitemap: false, //Don't generate sitemap index pointing to sitemap-0.xml
  sitemapSize: 50000 
};