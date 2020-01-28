import React from 'react';

import Home from './Components/Home';
import Vote from './Components/Vote';
import Sign from './Components/Sign';
import maelissResult from './Components/maelissResult';
import Maeliss from './Components/Maeliss';
import Arevishan from './Components/Arevishan';
import are from './Components/ArevishanWin';
import GuiralVote from './Components/GuiralVote';
import ResetPassword from './Components/ResetPassword'
import ArevishanWin from './Components/ArevishanWin'
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={ Sign } />
          <Route exact path="/vote" component={ Vote } />
          <Route exact path="/home" component={ Home } />
          <Route exact path="/results/maeliss" component={ maelissResult } />
          <Route exact path="/results/arevishan" component={ ArevishanWin } />
          <Route exact path="/home/Taraud" component={ Maeliss } />
          <Route exact path="/home/Arudchelvan" component={ Arevishan } />
          <Route exact path="/home/Lapouge" component={ GuiralVote } />
          <Route exact path="/win/arevichan" component={ are } />
          <Route exact path="/reset" component={ ResetPassword } />
        </div>
      </Router>
    </>
  );
}

export default App;
