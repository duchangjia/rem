// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
  build: {
    env: require('./prod.env'),
    index: path.resolve(__dirname, '../dist/index.html'),
    assetsRoot: path.resolve(__dirname, '../dist'),
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    productionSourceMap: true,
    // Gzip off by default as many popular static hosts such as
    // Surge or Netlify already gzip all static assets for you.
    // Before setting to `true`, make sure to:
    // npm install --save-dev compression-webpack-plugin
    productionGzip: false,
    productionGzipExtensions: ['js', 'css'],
    // Run the build command with an extra argument to
    // View the bundle analyzer report after build finishes:
    // `npm run build --report`
    // Set to `true` or `false` to always turn it on or off
    bundleAnalyzerReport: process.env.npm_config_report
  },
  dev: {
    env: require('./dev.env'),
    port: 8080,
    autoOpenBrowser: true,
    assetsSubDirectory: 'static',
    assetsPublicPath: '/',
    proxyTable: {
      '/api': {
     target: 'http://10.0.0.242:5555/',
        // target: 'http://14.21.69.222:5555/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/api': '/api'
        },
      },
      '/iem_hrm': {
     target: 'http://10.0.0.242:8888/',
     //    target: 'http://192.168.8.102:8888/',
        // target: 'http://14.21.69.222:5555/api/hrm/',
//            target: 'http://192.168.8.103:8888/',
//         target: 'http://11.241.9.105:8888/',
        // target: 'http://192.168.1.102:8888/',
//            target: 'http://192.168.1.111:8888/',
        // target: 'http://192.168.1.102:8888/',
// //         target: 'http://192.168.1.111:8888/',
//         target: 'http://192.168.1.111:8888/',
//            target: 'http://192.168.1.103:8888/',
//         target: 'http://192.168.1.104:8888/',
        // target: 'http://10.0.0.242:8888/',
        // target: 'http://192.168.1.102:8888/',
//         target: 'http://192.168.1.111:8888/',
//         target: 'http://192.168.1.100:8888/',
        // target: 'http://192.168.1.104:8888/',
        // target: 'http://192.168.1.106:8888/',
//      target: 'http://192.168.1.116:8888/',
        // target: 'http://192.168.137.83:8888/',
        // target: 'http://192.168.1.130:8888/',
        //    target: 'http://11.241.9.105:8888/',
        // target: 'http://10.0.0.16:8888/',
//         target: 'http://10.0.0.30:8888/',
        // target: 'http://10.0.0.34:8888/',
        // target: 'http://10.0.0.43:8888/',
        // target: 'http://11.241.8.112:8888/',
        // target: 'http://11.241.8.132:8888/',
        // target: 'http://11.241.8.247:8888/',
        // target: 'http://11.241.8.200:8888/',
        // target: 'http://192.168.137.90:8888/',
        // target: 'http://localhost:3000/',
        changeOrigin: true,
        secure: false,
        pathRewrite: {
          '^/iem_hrm': ''
        }
      }
    },
    // CSS Sourcemaps off by default because relative paths are "buggy"
    // with this option, according to the CSS-Loader README
    // (https://github.com/webpack/css-loader#sourcemaps)
    // In our experience, they generally work as expected,
    // just be aware of this issue when enabling this option.
    cssSourceMap: false
  }
}
