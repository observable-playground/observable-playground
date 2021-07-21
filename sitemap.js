const sitemap = require('nextjs-sitemap-generator');
const fs = require("fs");
const BUILD_ID = fs.readFileSync(".next/BUILD_ID").toString();

// a really hacky way to generate sitemap

sitemap({
  baseUrl: 'https://thinkrx.io',
  ignoredPaths: ['gist', '[libId]', 'index', '404'],
  extraPaths: ['/'],
  pagesDirectory: __dirname + "/.next/server/pages",
  targetDirectory : 'out/',
  nextConfigPath: __dirname + "/next.config.js",
});

console.log(`✅ sitemap.xml generated!`);