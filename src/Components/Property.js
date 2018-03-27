import React from 'react';
import {Head} from './Head';
import {Carousel} from './Carousel';
import {Map} from './Map';
export class Property extends React.Component{
  render(){
    return(
      <div>
        <div>
          <Head />
          <h1 className="pageHeadline">The property</h1>
          <div className='photoContainerContainer'>
              <div className='photoContainer'>
                  <img className='coverImage' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/niagara-falls-at-dusk-black-and-white-adam-romanowicz.jpg" alt='niagra falls' />
                  <img className='coverImage' src="https://chelseamodernimages.shootproof.com/gallery/256-3rdStreet/photo/809649622" alt='niagra falls' />
              </div>
              </div>
              <Carousel />
          </div>
          <Map />
      </div>
    );
  }
}
