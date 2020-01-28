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
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';

const PrivateRoute = ({ component: Component, ...rest }) => (
  <Route {...rest} render={(props) => (
      localStorage.getItem('token')
      ? <Component {...props} />
      : <Redirect to='/' />
  )} />
)

function App() {
  return (
    <>
      <Router>
        <div className="App">
          <Route exact path="/" component={ Sign } />
          <PrivateRoute exact path="/vote" component={ Vote } />
          <PrivateRoute exact path="/home" component={ Home } />
          <PrivateRoute exact path="/results/maeliss" component={ maelissResult } />
          <PrivateRoute exact path="/results/arevishan" component={ ArevishanWin } />
          <PrivateRoute exact path="/home/Taraud" component={ Maeliss } />
          <PrivateRoute exact path="/home/Arudchelvan" component={ Arevishan } />
          <PrivateRoute exact path="/home/Lapouge" component={ GuiralVote } />
          <PrivateRoute exact path="/win/arevichan" component={ are } />
          <Route exact path="/reset" component={ ResetPassword } />
        </div>
      </Router>
    </>
  );
}

export default App;
