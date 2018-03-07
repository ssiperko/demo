import React from 'react';
import {Landing} from './Components/Landing';
import {About} from './Components/About';
import {Property} from './Components/Property';
import {Fun} from './Components/Funding';
import {News} from './Components/News';
import {Contact} from './Components/Contact';

import {Switch, Route} from 'react-router-dom';

export class Main extends React.Component {
    render(){
      return(
          <div>
              <Switch>
                  <Route exact path = '/' component = {Landing}/>
                  <Route exact path = '/landing' component = {Landing}/>
                  <Route exact path = '/about' component = {About}/>
                  <Route exact path = '/property' component = {Property}/>
                  <Route exact path ='./fun' component = {Fun} />
                  <Route exact path ='/news' component = {News} />
                  <Route exact path ='/contact' component = {Contact} />
              </Switch>
          </div>
      );
    }
}
