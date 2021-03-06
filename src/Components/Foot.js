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
                    <div className="footPhone">
                        <a href="facetime:4079139425"><i className="fa fa-phone footIcon"></i></a>
                        <h3>(407) 913-9425</h3>
                    </div>
                    <div className="footEmail"> 
                        <a href="mailto:blockprocapital@gmail.com"><i className="fa fa-envelope footIcon"></i></a>
                        <h3>blockprocapital@gmail.com</h3>
                    </div>
                </div>
            </div>
            <div className='subFoot'>
                <h5 className="subFootItems">designed and coded by Steven Luke Siperko </h5> <h5 className="subFootItems"> copyright BlockPro Inc.</h5>
            </div>
        </div>
      );
    }
}
