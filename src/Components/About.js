import React from 'react';
import {Head} from './Head';
import {Profile} from './EmployeeProfile';

export class About extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <h1>About us</h1>
          <div className='aboutContainer'>
              <div className="photoContainer">
                  <img className="coverImage" src="https://i.pinimg.com/originals/65/09/0a/65090aac124066b4c9bd3459a5c9fe6e.jpg" alt='workers' />
              </div>
          </div>
          <div>
          <h1>--Our Mission--</h1>
          <p>
            "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum."
          </p>
          </div>
          <div>
              <Profile />
              <Profile />
              <Profile />
              <Profile />
              <Profile />
              <Profile />
          </div>
      </div>
    );
  }
}
