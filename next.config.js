const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
  
const config = withBundleAnalyzer({
    trailingSlash: true,
    experimental: { optimizeCss: true }
});

module.exports = config;