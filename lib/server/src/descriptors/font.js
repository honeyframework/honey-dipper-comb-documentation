import React from 'react';
import descriptionData from '../data/user-style.json';

export default class Font extends React.Component {
  render() {

    const fontData = descriptionData['font'];

    return(
      <div className='content'>
        <h2>Font</h2>
        <section>
          {
            fontData.groups.map((group) => {
              return(
                <div>
                  <h3>{group[0].group}</h3>
                  <div className='generated-ui scaffold col bubble-spacing-large only-stack'>
                    {
                      group.map((fontValue) => {
                        return(
                          <div className='font scaffold col bubble-spacing-small only-stack'>
                            <div className='code-list'>
                              <code>{fontValue.name}</code>
                              <code>.font-{fontValue.style}</code>
                            </div>
                            <p className={'font-' + fontValue.style}>This font of <strong>{fontValue.style}</strong> looks like this.</p>
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
