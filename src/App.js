import React, { Component } from 'react';
import {Foot} from './Components/Foot';
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
