import React from 'react';
import {Head} from './Head';
import {Carousel} from './Carousel';
import {Map} from './Map';
import photos from './photos.json';
export class Property extends React.Component{
  constructor(props){
    super(props);

    this.state={
      name: "./photos/256-3rdSt01 (2).jpg"
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
        <h2 className="pageHeadline">256 3rd St</h2>
        <div>
          <div className='photoContainerContainer2'>
              <div className='photoContainer2'>
                  <img className='coverImage2' src={require(`${this.state.name}`) } alt='niagra falls' />
              </div>
          </div>
              <Carousel photoUpdate={this.updateCoverPhoto.bind(this)} />
          </div>
          <div className="propertyContent">
              <h2> The Property </h2>
              <p>Upstate Realty Associates is pleased to offer a built-to-suit, customizable real estate solution for your operational needs. We understand that every business has unique needs and provide ample power and space for you to quickly scale your environments as your business needs change. Spaces can be customized to fit your company’s personality, culture, and needs. With 1MW of electrical power running through the property and unlimited fiber optic cable installed in the building, this space is the ideal place to operate businesses such as data centers, crypto currency mining centers, and tech centers. In addition to its great location, Niagara Falls is home to cheap electricity and offers an excellent opportunity for businesses that consume vast amount of energy to operate economically. The average commercial electricity rate in Niagara Falls is 5.99¢/kWh, which is 40.63% less than the national average rate of 10.09¢/kWh.
              </p>
              <h2>Location</h2>
              <p>Located in the centre of downtown Niagara Falls, the 256 3rd St property is just moments from the Canadian border, Robert Moses Parkway and NYS Thruway. Located directly across from the Seneca Niagara Casino and a block from the Niagara Falls Convention Center and Niagara Falls Culinary Institute, provides tenants with the opportunity to be in the center of business deals and transactions.
              </p>
              <h2>Features</h2>
              <p>- 1mw electrical power <br /> - Unlimited fiber optic cable <br />  - Power at US 5.99¢/ kWh <br />- Fully customizable space <br />  - Excellent location

              </p>
          </div>
          <Map />
          <hr />
          <div className="expert">
              <h2 className="expertInfo2">Want to know more? <br /> Reach out to a property expert.</h2>
              <h1 className="expertInfo2"> Jodi Collins</h1>
              <span className="expertInfo"><i className="fa fa-envelope icon"></i><a href="mailto:jodi@greatlakesre.com"><h3>jodi@greatlakesre.com</h3></a>
              <i className="fa fa-phone icon"></i><h3>(716) 417-0271</h3> </span>
          </div>
          <hr />
      </div>
    );
  }
}
