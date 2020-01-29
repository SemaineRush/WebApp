import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeCandidates from './HomeCandidates';
import api from './Api';
import '../Assets/home.css';
import Header from './Header';
import Arevichan from './ArevishanWin'
import Guiral from './GuiralWin'
import Maeliss from './maelissResult'


export default class Home extends Component {
	constructor(props) {
		super(props);
		this.state = {
			email: '',
			password: '',
			currentElectionId: '',
			electionIsOver: false,
			electionWinner: ''
		};
	}

	componentDidMount() {
		api.getLastElection().then((json) => {
			this.setState({
				currentElectionId: json.response.last_election.id,
				electionIsOver: json.response.last_election.finished,
				electionWinner:  json.response.last_election.winner
				
			});
		});
		
	}
	render() {
		if (this.state.electionIsOver === false) {
			return (
				<div>
					<Header />
					<div className="home">
						<div className="top_left_yellow" />
						<div className="bottom_left_pink" />
						<div className="bottom_right_purple" />
						<div className="bottom_right_blue" />
						<HomeCandidates CurrentElectionId={this.state.currentElectionId} />
						<div className="yellow_top">
							<h2>Election SUP'Internet</h2>
							<h4>BDE 2020</h4>
						</div>
						<Link className="btn" to="/vote">
							Voter
						</Link>
					</div>
				</div>
			);
			
		} else {
			if (this.state.electionWinner === 3) {
				return (
					<Maeliss />
					
				)
			}
			if (this.state.electionWinner === 103) {
				return (
					<Arevichan />
				)
			}
			if (this.state.electionWinner === 92) {
				return (
					<Guiral />
				)
			}
		}
		
	}
}
