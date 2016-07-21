import React from 'react';
import descriptionData from '../data/user-style.json';

class CustomElement extends React.Component {
  render() {
    const Element = this.props.element;
    return(
      <Element className={this.props.classes}>
        {this.props.text}
      </Element>
    )
  }
}

const dummyText = 'Pommy ipsum done up like a kipper bog roll pants Elementary my dear Watson because there was nothing on the gogglebox Doctor Who.';

export default class Typography extends React.Component {
  render() {

    const typographyData = descriptionData['typography'];

    return(
      <div className='content'>
        <h2>Typography</h2>
        <section>
        {
          typographyData.groups.map((group) => {
            return(
              <div>
                <h3>{group[0].group}</h3>
                <div className='generated-ui scaffold col bubble-spacing-large only-stack'>
                  {
                    group.map((typoValue) => {
                      return(
                        <div className='font scaffold col bubble-spacing-small only-stack'>
                          <div className='code-list'>
                            <code>{typoValue.element}</code>
                          </div>
                          <CustomElement element={typoValue.element} text={dummyText} classes={'font-' + typoValue.style}/>
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
