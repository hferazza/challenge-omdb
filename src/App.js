import React, { Component } from 'react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import Navbar from './components/layout/Navbar';
import HomePage from './components/pages/HomePage';
import SearchPage from './components/pages/SearchPage';

class App extends Component {
  render(){
    return (
      <BrowserRouter>
        <div className="App">
          <Navbar />
          <Switch>
            <Route exact path="/" component={HomePage}/>
            <Route path="/search" component={SearchPage}/>
          </Switch>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;
