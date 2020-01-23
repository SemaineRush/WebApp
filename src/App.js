import React , { Component }  from 'react';

import Home from './Components/Home'
import Vote from './Components/Vote';
import Sign from './Components/Sign'
import GuiralVote from './Components/GuiralVote'
import GuiralWin from './Components/GuiralWin'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={ Sign } />
          <Route exact path="/vote" component={ Vote } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/home/guiral" component={ GuiralVote } />
          <Route exact path="/home/guiralwin" component={ GuiralWin } />
        </div>
      </Router>
    </>
  );
}

export default App;
