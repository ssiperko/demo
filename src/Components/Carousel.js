import React from 'react';
import photos from './photos.json';
import scrollTo from './animateScroll';
import './Carousel.css';

export class Carousel extends React.Component{
  constructor(props){
    super(props);
    this.state={
      name: 'luke'
    };

  }

  handle_leftNav(){
    console.log('left button clicked');
    const {carouselViewport} = this.refs;
    let numOfSlidesToScroll = 6;
    let widthOfSlide= (window.innerWidth * .1009) ;
    let newPos = carouselViewport.scrollLeft - (widthOfSlide * numOfSlidesToScroll);
    let timeToMoveOneSlide = 200;
    let totalTimeToMove = Math.min((numOfSlidesToScroll * timeToMoveOneSlide), 400);
    scrollTo(carouselViewport, newPos, totalTimeToMove, 'scrollLeft');
  }

  handle_rightNav(){
    console.log('right button clicked');
    const {carouselViewport} = this.refs;
    let numOfSlidesToScroll = 6;
    let widthOfSlide= (window.innerWidth * .1009);
    let newPos = carouselViewport.scrollLeft + (widthOfSlide * numOfSlidesToScroll);
    let timeToMoveOneSlide = 200;
    let totalTimeToMove = Math.min((numOfSlidesToScroll * timeToMoveOneSlide), 400);
    scrollTo(carouselViewport, newPos, totalTimeToMove, 'scrollLeft');
  }

onPhotoUpdate(e){
    this.props.photoUpdate(e.currentTarget.value);
}

    render(){

      const Slides =  photos.map((img)=>{
              return(
                  <div className='slide' key={img.key}>
                    <button value={img.name} onClick={this.onPhotoUpdate.bind(this)}>
                    <img  className="slideImage" src= {require(`${img.name}`) } />
                    </ button>
                </div>
              )
            });
        return(
          <div>
            <div className='carouselContainer'>
                <button onClick={this.handle_leftNav.bind(this)} className="carouselNav carouselLeftNav">&#60;</button>
                <div ref='carouselViewport' className="carouselViewport">
                  {Slides}
                </div>
                <button onClick={this.handle_rightNav.bind(this)} className="carouselNav carouselRightNav">&#62;</button>
            </div>
          </div>
        );
    }
}
