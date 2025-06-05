const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})
const TerserPlugin = require('terser-webpack-plugin');

module.exports = {
  transpileDependencies: true,

  productionSourceMap: false, // geen source maps in productie, kleinere bestanden

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      config.optimization = {
        minimize: true,
        minimizer: [
          new TerserPlugin({
            terserOptions: {
              compress: {
                drop_console: true, // verwijder console.logs in productie
              },
              format: {
                comments: false, // verwijder comments
              },
            },
            extractComments: false,
          }),
        ],
      };
    }
  },
};
