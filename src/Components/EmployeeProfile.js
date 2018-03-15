import React from 'react';

export class Profile extends React.Component{
  render(){
    return(
      <div>
        <div className='profileLeft'>
        <div>
            <img src="https://sites.google.com/site/sssandddd/_/rsrc/1407231221185/videos/highlights/samart-payakaroon/4.jpg?height=320&width=320" alt='employee' />
        </div>
        <div>
            <h1>First & LastName</h1>
            <p>
              "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.""Lorem ipsum dolor sit amet"
            </p>
        </div>
        </div>
      </div>
    );
  }
}
