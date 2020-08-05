import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';


import Home from './Components/Home';
import Quiz from './Components/Quiz';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'App.css';



class App extends Component{
  
  render(){
   
    return(
      <BrowserRouter>
    
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>
            <Route exact path="/easy">
              <Quiz level='easy' questions={10} />
            </Route>  
            <Route exact path="/medium">
              <Quiz level='medium' questions={10}/>
            </Route>
            <Route exact path="/hard">
              <Quiz level='hard' questions={10}/>
            </Route>                                  
          </Switch>     
      </BrowserRouter>
    );
  } 
}
export default App;