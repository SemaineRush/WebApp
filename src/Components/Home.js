import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import HomeCandidates from './HomeCandidates'
import api from './Api';
import '../Assets/home.css';
import Header from './Header';

export default class Home extends Component {
	constructor(props) {
        super(props);
        this.state = {
        email: "",
		password: "",
		currentElectionId: ''
        };
	}

	componentDidMount(){
		api.getLastElection().then((json) => {
			this.setState({
        currentElectionId: json.response.last_election.id
		})
		})
		setTimeout(() => {
			console.log(this.state.currentElectionId)
		}, 300);
		
	}
	render() {
		return (
			<div>
				<Header />
				<div className="home">
					<HomeCandidates CurrentElectionId={this.state.currentElectionId}/>
					<div className="yellow_top">
						<h2>Election SUP'Internet</h2>
						<h4>BDE 2020</h4>
					</div>
					<div className="vote_btn">
						<Link to="/vote"><button>Voter</button></Link>
					</div>

					<div className="top_left_yellow" />
					<div className="bottom_left_pink" />
					<div className="bottom_right_purple" />
					<div className="bottom_right_blue" />
				</div> 
			</div>
		);
	}
}
