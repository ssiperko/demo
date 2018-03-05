import React from 'react';

export class Head extends React.Component{
    render(){
        return(
            <div className="header">
              <nav>
                  <div>
                      <h1>Company logo</h1>
                  </div>
                  <ul>
                      <li>Home</li>
                      <li>About</li>
                      <li>Projects</li>
                      <li>Prices</li>
                      <li>Contact</li>
                  </ul>
              </nav>
            </div>
        );
    }
}
