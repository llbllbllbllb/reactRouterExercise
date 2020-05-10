import React from 'react';
import './App.css';

import Nav from './Nav';
import About from './about';
import Shop from './Shop';
import Item from './ItemDetail';

import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';


const Home = () => (
  <div>
    <h1>Home Page</h1>
  </div>
);

function App() {
  return (
    <Router>
      <div className="App">
        <Nav />
        <Switch>
          <Route path="/" exact component={Home}/>
          <Route path="/about" component={About}/>
          <Route path="/shop" exact component={Shop}/>
          <Route path="/shop/:id" component={Item}/>
        </Switch>

      </div>
    </Router>
  );
}



export default App;
