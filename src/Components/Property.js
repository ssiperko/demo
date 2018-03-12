import React from 'react';
import {Head} from './Head';

export class Property extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <div className=''>
              <h1>Property</h1>
              <img  src="https://chelseamodernimages.shootproof.com/gallery/256-3rdStreet/photo/809651042" alt="building lobby" />
          </div>
      </div>
    );
  }
}
