import React from 'react';
import './App.css';
import Sign from './Components/Sign'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <Router>
      <div className="App">
        <Route exact path="/sign" component={ Sign } />
      </div>
    </Router>
  );
}

export default App;
