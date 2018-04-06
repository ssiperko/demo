import React from 'react';

export class NewsSlide extends React.Component{
    render(){
      return(
        <div className="newsSlideContainer">
            <img className="newsLogo" src={this.props.logo} />
            <div className="newsHeadlineContainer">
                <h1>{this.props.headline}</h1>
                <a href={this.props.link} target="_blank"><button className="newsLink">view article</button></a>
            </div>
            <div className="newsSynopsis">
                <h3>{this.props.quote}</h3>
                <p>{this.props.synops}</p>
            </div>
        </div>
      );
    }
}
