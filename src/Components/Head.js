import React from 'react';
import {Link} from 'react-router-dom';

export class Head extends React.Component{
    constructor(props){
      super(props);
        this.state={
          menu: 'headerHidden'
        }
    }

    toggleMenu(){
      if (this.state.menu === 'headerHidden'){
      this.setState({
        menu: 'header'
      })
    } else {
      this.setState({
        menu: 'headerHidden'
      })
    }
    }

    render(){
        return(
          <div className='headContainer'>
              <button className='burger' onClick={this.toggleMenu.bind(this)}>
                  <div className='burgerBun'>
                      <div className='burgerBox'> </div>
                      <div className='burgerBox'> </div>
                      <div className='burgerBox'> </div>
                  </div>
              </button>
                <div className={this.state.menu}>
                  <nav className='nav'>
                      <div>
                          <h1>Company logo</h1>
                      </div>
                      <ul>
                          <li><Link to ='./landing'>Home</Link></li>
                          <li><Link to ='./about'>About</Link></li>
                          <li><Link to ='./property'>Property</Link></li>
                          <li><Link to ='./news'>News</Link></li>
                          <li><Link to ='./funding'>Funding</Link></li>
                          <li><Link to ='./contact'>Contact</Link></li>
                      </ul>
                  </nav>
                </div>
          </div>
        );
    }
}
