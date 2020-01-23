import React , { Component }  from 'react';

import Home from './Components/Home'
import Vote from './Components/Vote';
import Sign from './Components/Sign'
import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';


export default class App extends Component {

  render() {
    // if (localStorage.getItem('user_info') != null) {
    //   return <Router><Redirect to="/home"/></Router>
    // }
    return (
      <>
        <Router>
          <div className="App">
            <Route exact path="/" component={ Sign } />
            <Route exact path="/vote" component={ Vote } />
            {/* {console.log(localStorage.getItem("user_info"))} */}
            <Route exact path="/home" component={ Home } />
          </div>
        </Router>
      </>
    );
  }
}

