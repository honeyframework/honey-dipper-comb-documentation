var path = require('path');

var entry = {};

if (process.env.WEBPACK_TARGET === 'web') {
  // <-- build the script for the doc site
  entry['build/comb-documentation/comb-documentation'] = './lib/documentation/index.js';
} else if (process.env.WEBPACK_TARGET === 'node') {
  // <-- build the actual npm dipper fn
  entry['build/honey-dipper-comb-documentation'] = './lib/dipper/index.js';
  entry['./lib/dipper/docs/comb-docs.styl'];
  entry['./node_modules/stylus/index.js'];
}

module.exports = {
  entry: entry,
  output: {
    filename: '[name].js',
    path: path.resolve(__dirname),
    library: 'honey-dipper-comb-documentation',
    libraryTarget: 'umd'
  },
  target: process.env.WEBPACK_TARGET,
  module: {
    loaders: [
      {
        test: /\.js$/,
        loaders: ['babel-loader'],
        exclude: /node_modules/
      },
      {
        test: /\.css$/,
        loader: "style-loader!css-loader"
      },
      {
        test: /\.json$/,
        loader: "json-loader"
      },
      {
        test: /\.(png|jpg|jpeg|gif|svg|woff|woff2|ttf|eot)$/,
        loader: 'file-loader'
      },
      {
        test: /\.styl$/,
        loader: 'style-loader!css-loader!stylus-loader'
      }
    ]
  },
  watch: process.env.WEBPACK_BUILD === 'watch' ? true : false
}
