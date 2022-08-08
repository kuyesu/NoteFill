const withTM = require('next-transpile-modules')([
  '@stripe/firestore-stripe-payments',
  '@stripe/stripe-js',
]);


module.exports = {
  webpack(config) {
    config.module.rules.push({
      test: /\.svg$/,
      use: ["@svgr/webpack"]
    });

    return config;
  }
};

/** @type {import('next').NextConfig} */
module.exports = withTM({
  reactStrictMode: true,
});
