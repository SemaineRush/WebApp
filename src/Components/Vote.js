import React, { Component } from 'react'
import '../Assets/vote-list.css'

import VoteList from './VoteList';

export default class LogIn extends Component {
    render() {
        return (
            <div className="container">
              <div className="red"></div>
              <div className="yellow"></div>
              
              <div className="title">
                <h1>À votre vote</h1>
                <p>Seléctionnez votre candidat parmi les différents votes possibles ci-dessous :</p>
              </div>

              <VoteList />
            </div>
        )
    }
}
