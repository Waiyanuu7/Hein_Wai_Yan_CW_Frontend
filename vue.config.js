const { defineConfig } = require('@vue/cli-service');

module.exports = {
  publicPath: process.env.NODE_ENV === 'production'
    ? '/Hein_Wai_Yan_CW_Frontend/'
    : '/'
}
