import React from 'react';

import Home from './Components/Home'
import Vote from './Components/Vote';
import Sign from './Components/Sign'
import GuiralVote from './Components/GuiralVote'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={ Sign } />
          <Route exact path="/vote" component={ Vote } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/vote/guiral" component={ GuiralVote } />
        </div>
      </Router>
    </>
  );
}

export default App;
