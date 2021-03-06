import React from 'react';
import './App.css';
import HomePage from './pages/Homepage/Homepage'
import ShopPage from './pages/Shop/Shop'
import {Switch, Route} from 'react-router-dom';
import Header from './components/Header/Header'


function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path='/' component = {HomePage} />
        <Route path='/shop' component = {ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
