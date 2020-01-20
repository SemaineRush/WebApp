import React from 'react';
import './App.css';
import LogIn from './Components/LogIn'
import Register from './Components/Register'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
    <div className="App">
      <Route exact path="/login" component={ LogIn } />
      <Route exact path="/register" component={ Register } />
    </div>
    </Router>
  );
}

export default App;
