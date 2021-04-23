import React from 'react';
import Navbar from './components/Navbar';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import './App.css';
import Home from './components/pages/Home'
import Skills from './components/pages/Skills'
import About from './components/pages/About'
import Contact from './components/pages/Contact'

function App() {
  return (
    <>
    <Router>
      <Navbar/>
      <Switch>
        <Route exact path='/' component={Home}/>
        <Route exact path='/skills' component={Skills}/>
        <Route exact path='/about' component={About}/>
        <Route exact path='/contact' component={Contact}/>
      </Switch>
    </Router>      
    </>
  );
}

export default App;
