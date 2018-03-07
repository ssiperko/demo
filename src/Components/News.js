import React from 'react';
import {Head} from './Head';

export class News extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <div className=''>
              <h1>News</h1>
          </div>
      </div>
    );
  }
}
