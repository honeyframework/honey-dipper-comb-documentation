import React from 'react';
import descriptionData from '../data/user-style.json';

export default class Palette extends React.Component {
  render() {

    const paletteData = descriptionData['palette'];

    return(
      <div className='content'>
        <h2>Palette</h2>
        <section className='scaffold col bubble-spacing-large only-stack'>
          {
            paletteData.groups.map((group) => {
              return(
                <div className='scaffold col bubble-spacing-small only-stack'>
                  <h3>{group[0].group}</h3>
                  <div className='palette'>
                    {
                      group.map((paletteValue) => {
                        return(
                          <div className='palette-item'>
                              <div style={{
                                    backgroundColor: paletteValue.value,
                                    width: '200px',
                                    height: '100px',
                                    borderRadius: '2px'
                                  }}></div>
                              <p><code>${paletteValue.name}</code></p>
                              <label>{paletteValue.value}</label>
                          </div>

                        )
                      })
                    }
                  </div>
                </div>
              )
            })
          }
        </section>
      </div>
    );
  }
}
