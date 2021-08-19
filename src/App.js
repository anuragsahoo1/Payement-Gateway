import React from 'react';
import './App.css'
import Home from './components/pages/Home'
import { BrowserRouter as Router,Switch,Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Bank from './components/pages/bank'
import Contact from './components/pages/contact'


function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route  path='/' exact component={Home} >

        </Route>
      <Route path='/Donate' component={Bank}></Route>
        <Route path='/Contact' component={Contact}></Route>
      </Switch>
    </Router>
    </>
  );
}

export default App;
