import React from 'react';
import Header from './Components/Header';
import Vote from './Components/Vote';
import './App.css';
import Sign from './Components/Sign'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <div>
      <Header/>
      <Router>
        <div className="App">
          <Route exact path="/sign" component={ Sign } />
          <Route exact path="/vote" component={ Vote } />
        </div>
      </Router>
    </div>

  );
}

export default App;
