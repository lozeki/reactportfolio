import React from 'react';
import './App.css';
import Home from './pages'

import {BrowserRouter as Router, Switch, Route } from 'react-router-dom'
import Contact from './components/Contact';
import Resume from './components/Resume';

function App() {
  return (
    <Router>
      <Switch>
        <Route path='/' component={Home} exact />  
        <Route path='/contact' component={Contact} exact />
        <Route path='/resume' component={Resume} exact />
      </Switch>
    </Router>
  );
}
export default App;
