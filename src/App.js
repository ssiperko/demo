import React, { Component } from 'react';
import {Foot} from './Foot';
import {Head} from './Head';
import {Content} from './Content';
import {Landing} from './Landing';



import './App.scss';

class App extends Component {
  render() {
    return (
        <div>
            <Landing />
            <Head />
            <Content />
            <Foot />
        </div>
    );
  }
}

export default App;
