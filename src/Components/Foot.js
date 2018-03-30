import React from 'react';

export class Foot extends React.Component{
    render(){
      return(
        <div>
            <div className='foot'>
                <div className='footItems'>
                    <h1>BlockPro</h1>
                </div>
                <div className='footItems footLogo'>
                    <h1 className="footLogo">Company Logo</h1>
                </div>
                <div className='footItems'>
                    <a href="facetime:4079139425"><i className="fa fa-phone footIcon"></i></a>
                    <a href="mailto:blockprocapital@gmail.com"><i className="fa fa-envelope footIcon"></i></a>
                </div>
            </div>
            <div className='subFoot'>
                <h5 className="subFootItems">designed and coded by Steven Luke Siperko </h5> <h5 className="subFootItems"> copyright BlockPro Inc.</h5>
            </div>
        </div>
      );
    }
}
