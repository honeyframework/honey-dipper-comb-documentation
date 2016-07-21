import React from 'react';
import './app.styl';
import './data/user-style.css';
import Menu from './menu';

export default class App extends React.Component {
  render() {
    return(
      <div className='scaffold row stretch-row'>
        <Menu />
        <div className='scaffold col bubble-spacing-large stretch-col scroll-overflow'>
          {this.props.children}
        </div>
      </div>
    );
  }
}
