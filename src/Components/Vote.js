import React, { Component } from 'react'
import '../Assets/vote-list.css'
import Header from "./Header"

import VoteList from './VoteList';

export default class Vote extends Component {
    render() {
        return (
            <Header />
            <div className="container">
              
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="violet"></div>
              <div className="light-violet"></div>
              
              <div className="title">
                <h1>À votre vote</h1>
                <p>Seléctionnez votre candidat parmi les différents votes possibles ci-dessous :</p>
              </div>

              <VoteList />
            </div>
        )
    }
}
