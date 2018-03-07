import React from 'react';
import {Content} from './Content';
import {Head} from './Head';

export class Landing extends React.Component{
  render(){
    return(
      <div>
          <div className='photoContainerContainer'>
              <div className='photoContainer'>
                  <h1 className='landingText'>Block Chain for the modern world</h1>
                  <img className='coverImage' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/niagara-falls-at-dusk-black-and-white-adam-romanowicz.jpg" alt='niagra falls' />
              </div>
              <Head />
              <Content />
          </div>
      </div>
    );
  }
}
