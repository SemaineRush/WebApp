import React from 'react';
<<<<<<< HEAD
=======

import Home from './Components/Home'
>>>>>>> 3bfd17c482c268c41068dfa662ea85da6f80ef26
import Vote from './Components/Vote';
import Sign from './Components/Sign'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/sign" component={ Sign } />
          <Route exact path="/vote" component={ Vote } />
          <Route exact path="/home" component={ Home } />
        </div>
      </Router>
    </>
  );
}

export default App;
