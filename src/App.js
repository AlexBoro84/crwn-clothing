import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import {Switch, Route} from 'react-router-dom';


function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route path='/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
