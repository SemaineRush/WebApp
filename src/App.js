import React , { Component }  from 'react';

import Home from './Components/Home';
import Vote from './Components/Vote';
import Sign from './Components/Sign';
import Maeliss from './Components/Maeliss';
import Arevishan from './Components/Arevishan';
import GuiralVote from './Components/GuiralVote';
import ResetPassword from './Components/ResetPassword'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
            <Route exact path="/" component={ Sign } />
            <Route exact path="/vote" component={ Vote } />
            <Route exact path="/home" component={ Home } />
            <Route exact path="/home/maeliss" component={ Maeliss } />
            <Route exact path="/home/arevishan" component={ Arevishan } />
            <Route exact path="/home/guiral" component={ GuiralVote } />
            <Route exact path="/reset" component={ ResetPassword } />
        </div>
      </Router>
    </>
  );
}

export default App;
