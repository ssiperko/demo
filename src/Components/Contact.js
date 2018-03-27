import React from 'react';
import {Map} from './Map';
import {Head} from './Head';

export class Contact extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <div>
              <div className="contactPhotoContainer">
                  <h1 className="contactCoverText">Contact Us</h1>
                  <img className='contactPhoto' src="https://gcn.com/~/media/GIG/GCN/Redesign/Articles/2017/April/blockchain2.png" alt='niagra falls' />
              </div>
              <div>
                  <h2 className="contactHeadline">Drop us a line. We would love to hear from you.</h2>
                  <hr />
                  <div className="contactForm">
                      <p className="contactHeadline">This is where people can contact us</p>
                  </div>
              </div>
                  <Map />
          </div>
      </div>
    );
  }
}
