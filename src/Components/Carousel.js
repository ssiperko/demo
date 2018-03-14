import React from 'react';
import data from './data.json';
import scrollTo from './animateScroll';
import './Carousel.css';

export class Carousel extends React.Component{

  handle_leftNav(){
    console.log('left button clicked');
    const {carouselViewport} = this.refs;
    let numOfSlidesToScroll = 1;
    let widthOfSlide= window.innerWidth * .177;
    let newPos = carouselViewport.scrollLeft - (widthOfSlide * numOfSlidesToScroll);
    let timeToMoveOneSlide = 200;
    let totalTimeToMove = Math.min((numOfSlidesToScroll * timeToMoveOneSlide), 400);
    scrollTo(carouselViewport, newPos, totalTimeToMove, 'scrollLeft');
  }

  handle_rightNav(){
    console.log('right button clicked');
    const {carouselViewport} = this.refs;
    let numOfSlidesToScroll = 1;
    let widthOfSlide= window.innerWidth * .177;
    let newPos = carouselViewport.scrollLeft + (widthOfSlide * numOfSlidesToScroll);
    let timeToMoveOneSlide = 200;
    let totalTimeToMove = Math.min((numOfSlidesToScroll * timeToMoveOneSlide), 400);
    scrollTo(carouselViewport, newPos, totalTimeToMove, 'scrollLeft');
  }

    render(){
      const Slides =  data.map((state)=>{
              return(
                  <div className='slide' key={state.abbreviation}>
                    <img className="slideImage" src={state.name} />
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
