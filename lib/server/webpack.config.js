var path = require('path');

module.exports = {
  entry: [
    path.join(__dirname, './src/index.js')
  ],
  output: {
    filename: 'comb-documentation.js',
    path: path.join(__dirname, '/static/x')
  },
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
  watch: process.env.WEBPACK_WATCH ? true : false
}
