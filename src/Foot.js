import React from 'react';

export class Foot extends React.Component{
    render(){
      return(
        <div>
            <div className='foot'>
            <h1>Contact:</h1>
                <h2 className='footItems'>Telephone: 407 555 5566</h2>
                <h2><a className='footItems' href="mailto:steven@steven-siperko.space">E-mail: xyz@abc.com</a></h2>
            </div>
            <div className='subFoot'>
                <h5 className="subFootItems">designed and coded by Steven Luke Siperko </h5> <h5 className="subFootItems"> copyright Kimmins Inc.</h5>
            </div>
        </div>
      );
    }
}
