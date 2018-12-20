const withTs = require("@zeit/next-typescript");
module.exports = withTs({
  webpack(config, options) {
    config.module.rules.push({
      loader: "svg-inline-loader",
      test: /\.svg$/,
    });
    config.resolve.modules.push(__dirname);
    return config;
  },
});
