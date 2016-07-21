import express from 'express';
import cors from 'cors';
import bodyParser from 'body-parser';
import http from 'http';
import dotenv from 'dotenv';
import webpack from 'webpack';
import webpackDevMiddleware from 'webpack-dev-middleware';

import defaultRoutes from './routes/default.js';

import webpackConfig from './webpack.config.js';

const app = express();
const PORT = process.env.PORT || 5007;

app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(cors());

let compiler = webpack(webpackConfig);
app.use(webpackDevMiddleware(compiler, {
  noInfo: true,
  publicPath: '/',
  stats: { colors: true }
}));

app.use(express.static('lib/server/static'));
app.use(defaultRoutes);

http
  .createServer(app)
  .listen(PORT, (err) => {
    if (err) {
      console.error(err);
    } else {
      console.log(`On Port: ${PORT}`);
    }
  });
