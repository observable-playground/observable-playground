const withBundleAnalyzer = require('@next/bundle-analyzer')({
    enabled: process.env.ANALYZE === 'true'
})
  
const config = withBundleAnalyzer({
    trailingSlash: true
});

module.exports = config;