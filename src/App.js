import React, { Component } from 'react';
import {Foot} from './Components/Foot';
//import {Head} from './Components/Head';
//import {Content} from './Components/Content';
//import {Landing} from './Components/Landing';
import {Main} from './Main';



import './App.scss';

class App extends Component {
  render() {
    return (
        <div>
            <Main />
            <Foot />
        </div>
    );
  }
}

export default App;
