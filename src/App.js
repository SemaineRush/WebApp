import React from 'react';
import './App.css';
import LogIn from './Components/LogIn'
import Register from './Components/Register'
import Home from './Components/Home'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/login" component={ LogIn } />
        <Route exact path="/register" component={ Register } />
        <Route exact path="/home" component={ Home } />
      </div>
    </Router>
  );
}

export default App;
