import React from 'react';
import LogIn from './Components/LogIn';
import Register from './Components/Register';
import Header from './Components/Header';
import Vote from './Components/Vote';
import {BrowserRouter as Router, Route} from 'react-router-dom';


function App() {
  return (
    <>
      <Header />
      <Router>
        <div className="App">
          <Route exact path="/login" component={ LogIn } />
          <Route exact path="/register" component={ Register } />
          <Route exact path="/vote" component={ Vote } />
        </div>
      </Router>
    </>
  );
}

export default App;
