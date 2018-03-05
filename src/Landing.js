import React from 'react';

export class Landing extends React.Component{
  render(){
    return(
      <div className='photoContainer'>
          <h1 className='landingText'>Block Chain for the modern world</h1>
          <img className='coverImage' src="https://images.fineartamerica.com/images/artworkimages/mediumlarge/1/niagara-falls-at-dusk-black-and-white-adam-romanowicz.jpg" alt='niagra falls' />
      </div>
    );
  }
}
