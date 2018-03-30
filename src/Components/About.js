import React from 'react';
import {Head} from './Head';

export class About extends React.Component{
  render(){
    return(
      <div>
          <Head />
          <div className='photoContainer'>
              <h1 className='aboutCoverText'>“Every informed person needs to know about Bitcoin because it might be one of the world’s most important developments.” -Leon Luow, Nobel Prize Nominee</h1>
              <img className='coverImage' src="https://gcn.com/~/media/GIG/GCN/Redesign/Articles/2017/April/blockchain2.png" alt='niagra falls' />
          </div>
              <h1 className="pageHeadline">About us</h1>
                  <div className="aboutContentContainer">
                  <h1 className="aboutHeadline">Our Mission</h1>
                  <p className="aboutContent">
                    "As the landscape for cryptocurrency mining becomes more and more saturated, BlockPro is dedicated to making sure you stay ahead of the competition by providing the facilities,  tools, and computing power you need to solve complex cryptography and generate cryptocurrency. "
                  </p>
                  <h1 className="aboutHeadline">Who we are</h1>
                  <p className="aboutContent">
                    "BlockPro is a provider of funding and office space for technology enthusiasts in the Western New York area. Our interest is in blockchain technology, and our desire is to invest in the mining of cryptocoins. Although we do not mine cryptocurrency ourselves, we believe cryptocurrency is the future of commerce, and therefore, we're passionate about developing long-term partnerships with miners, blockchain start-up companies, and data centers. If you currently mine cryptocurrency and feel like you're lacking the resources necessary to stay ahead of the competition, BlockPro can propel you forward and increase your success rate."
                  </p>
                  <h1 className="aboutHeadline">What we will do for you</h1>
                  <p className="aboutContent">
                    "In addition to funding, BlockPro has prime commercial real estate in Niagara Falls, and we're looking to lease this unused office space to our partners for their use in the mining of cryptocurrency Niagara Falls is a beautiful area with a scenic landscape and a rich culture, known primarily for its iconic waterfalls. However, Niagara Falls is also known for the abundant supply of electricity it generates. Because of this specific asset, we've strategically selected this location to be the home of our cryptocurrency operations, as we believe this is the best location for crypto miners. We understand computing power is often a limitation miners encounter, and as more and more miners join the competitive landscape and the algorithms become increasingly complex, the amount of electricity you have access to determines your success rate. Because our office building is located in Niagara Falls, the electricity hub of Western New York, it has a massive 1MW of electrical power flowing through and a generous amount fiber optic cables already installed. In addition to the vast amount of electricity our building can access, the electricity in this area is much cheaper than the rest of the country. The average commercial electricity rate in this area is 60% less expensive than the rest of New York (at 5.99¢/kWh compared to the NY average of 15.06¢/kWh) and 41% less expensive than the national average (of 10.09¢/kWh)."
                  </p>
          </div>
      </div>
    );
  }
}
