import React from 'react';
import {Head} from './Head';

export class About extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <div className='aboutContainer'>
              <div>
                  <h1>About us</h1>
              </div>
              <div>
                    <h3>Who we are</h3>
                    <h3>What we do</h3>
                    <img src="https://goo.gl/maps/BTa7tceYF3D2" alt="map" />
              </div>
          </div>
      </div>
    );
  }
}
