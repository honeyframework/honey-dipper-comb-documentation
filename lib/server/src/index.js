import React from 'react';
import { render } from 'react-dom';
import { Router, Route, IndexRoute, browserHistory } from 'react-router';

import App from './app';
import DescriptorExample from './descriptors/example';
import Palette from './descriptors/palette';
import ColorMap from './descriptors/color-map';
import Spacing from './descriptors/spacing';
import Font from './descriptors/font';
import Typography from './descriptors/typography';

render(
  <Router history={browserHistory}>
    <Route path='/' component={App}>
      <Route path='palette' component={Palette} />
      <Route path='colormap' component={ColorMap} />
      <Route path='scaffold' component={Spacing} />
      <Route path='font' component={Font} />
      <Route path='typography' component={Typography} />
    </Route>
  </Router>,
  document.getElementById('honey-comb-documentation')
);
