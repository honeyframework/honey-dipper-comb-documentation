import React from 'react';
import { Link } from 'react-router';
import honeyLogo from '../../assets/honey-logo.png';
import descriptionData from '../data/user-style.json';

// TODO
// move this to honey-core
// as a helper / model

const descriptors = {
  'palette': {
    path: 'palette',
    name: 'Palette'
  },
  'colour-map': {
    path: 'colormap',
    name: 'Color Map'
  },
  'spacing': {
    path: 'scaffold',
    name: 'Scaffold'
  },
  'font': {
    path: 'font',
    name: 'Font'
  },
  'typography': {
    path: 'typography',
    name: 'Typography'
  }
}

export default class Menu extends React.Component {
  render() {
    return(
      <div className='menu' style={{width: '300px'}}>
        <img src={honeyLogo} style={{width: '67px'}} />
        <ul>
          <li className='menu-list-header nohover'>style descriptors</li>
          {
            Object.keys(descriptionData).map((key, i) => {
              return <li><Link to={descriptors[key].path} activeClassName="active">{descriptors[key].name}</Link></li>
            })
          }
        </ul>
      </div>
    )
  }
}
