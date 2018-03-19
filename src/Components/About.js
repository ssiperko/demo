import React from 'react';
import {Head} from './Head';

export class About extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <div className='photoContainer'>
              <h1 className='aboutCoverText'>“Every informed person needs to know about Bitcoin because it might be one of the world’s most important developments.” -Leon Luow, Nobel Prize Nominee</h1>
              <img className='coverImage' src="https://gcn.com/~/media/GIG/GCN/Redesign/Articles/2017/April/blockchain2.png" alt='niagra falls' />
          </div>
              <h1 className="pageHeadline">About us</h1>
          <div className="aboutContentContainer">
              <div>
                  <h1 className="who">Who we are</h1>
                  <p className="aboutContent">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
                  </p>
              </div>
              <div>
                  <h1 className="mission">Our Mission</h1>
                  <p className="aboutContent">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  </p>
                  <h1 className="mission">What we do</h1>
                  <p className="aboutContent">
                    "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. "
                  </p>
              </div>
          </div>
      </div>
    );
  }
}
