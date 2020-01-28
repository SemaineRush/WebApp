import React, { Component } from 'react'
import '../Assets/vote.css'
import Header from "./Header"
import api from './Api';
import VoteList from './VoteList';

export default class Vote extends Component {
  constructor(props) {
    super(props);
    this.state = {
    currentElectionId: '',
    };
  }

  componentDidMount(){
		api.getLastElection().then((json) => {
			this.setState({
        currentElectionId: json.response.last_election.id
      })
    })
	}
    render() {
        return (
          <>
            <Header />
            <div className="votePage">
              
              <div className="red"></div>
              <div className="yellow"></div>
              <div className="violet"></div>
              <div className="light-violet"></div>
              
              <div className="title">
                <h1>À votre vote</h1>
                <p>Seléctionnez votre candidat parmi les différents votes possibles ci-dessous :</p>
              </div>

              <VoteList electionId={this.state.currentElectionId} />
            </div>
          </>
        )
    }
}
