import React from 'react';
import {Head} from './Head';
import {Carousel} from './Carousel';
import {Map} from './Map';
import photos from './photos.json';
export class Property extends React.Component{
  constructor(props){
    super(props);

    this.state={
      name: "./photos/256-3rdSt10.jpg"
    };

  }

  updateCoverPhoto(newName){
      this.setState({
         name: newName
      });
      console.log(this.state.name + "hi");
  }

  render(){
    return(
      <div>
        <Head />
        <div>
          <div className='photoContainerContainer'>
              <div className='photoContainer'>
                  <img className='coverImage' src={require(`${this.state.name}`) } alt='niagra falls' />
              </div>
          </div>
              <Carousel photoUpdate={this.updateCoverPhoto.bind(this)} />
          </div>
          <h1 className="pageHeadline">The property : 256 3rd St</h1>
          <p className="propertyContent">Upstate Realty Associates is pleased to offer a built-to-suit, customized real estate solution for your operational needs. Located in the centre of downtown Niagara Falls, 256 3rd St property is just moments from the Canadian border, Robert Moses Parkway and NYS Thruway.
Upstate Realty Associates understand that every business has unique needs and provide ample power and space for you to quickly scale your environments as your business needs change. Spaces are fully customizable to your company’s personality, culture and needs.
Located directly across from the Seneca Niagara Casino and a block from the Niagara Falls Convention Center and Niagara Falls Culinary Institute, provides tenants with the opportunity to be in the center of business deals and transactions.
With its 1MW electrical power running through the property and unlimited fiber cable installed in the building, making it ideal to operate businesses such as data centers, crypto currency mining centers, and tech centers.
In addition to great location, Niagara Falls is home to cheap electricity and offers an excellent opportunity for businesses that consume vast amount of energy to operate economically.  The average commercial electricity rate in Niagara Falls is 5.99¢/kWh, which is 40.63% less than the national average rate of 10.09¢/kWh.
        </p>
          <Map />
      </div>
    );
  }
}
