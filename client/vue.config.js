const path = require('path');

module.exports = {
  chainWebpack: config => {
    config.resolve.alias
      .set('@components', path.resolve('src/components/'))
      .set('@views', path.resolve('src/views/'))
      .set('@router', path.resolve('src/router/'))
      .set('@store', path.resolve('src/store/'))
      .set('@styles', path.resolve('src/styles/'))
      .set('@services', path.resolve('src/services/'))
      .set('@layouts', path.resolve('src/layouts/'))
      .set('@locales', path.resolve('src/locales/'))
      .set('@constants', path.resolve('src/constants/'))
      .set('@config', path.resolve('src/config/config.dev.json'))
      .set('@api', path.resolve('src/services/api-service.service.js'))
      .set('@icons', path.resolve(__dirname, 'node_modules/vue-material-design-icons'))
  }
};

// .set('@assets', path.resolve('src/assets/'))
// .set('@filters', path.resolve('src/filters/'))
