import React from 'react';
import {Head} from './Head';
import {Carousel} from './Carousel';
export class Property extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <h1>The property</h1>
          <div className='photoContainerContainer'>
              <div className='photoContainer'>
                  <img className='coverImage' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/niagara-falls-at-dusk-black-and-white-adam-romanowicz.jpg" alt='niagra falls' />
              </div>
              <Carousel />
          </div>
      </div>
    );
  }
}
