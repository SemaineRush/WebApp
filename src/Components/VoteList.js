import React, { Component } from 'react'
import '../Assets/vote.css'
import api from './Api'
import swal from 'sweetalert'
import lock from '../Assets/media/lock.png'
import people from '../Assets/media/people.png'

export default class VoteList extends Component {
	constructor(props) {
		super(props)
		this.state = {
			candidates: [],
			chosenCandidat: ''
		}
	}
	componentDidMount() {
		api.getElections(this.props.electionId).then((data) => {
			this.setState({
				candidates: data['hydra:member'][0].candidateElection
			})
		})
	}

	handleOptionChange = (e) => {
		this.setState({
			chosenCandidat: e.target.value
		})
		swal('Vous aller votez pour', e.target.candidat)
		setTimeout(() => {
			console.log(this.state.chosenCandidat)
		}, 100)
	}

	handleSubmit(e) {
		e.preventDefault()
		api.vote(this.props.electionId, this.state.chosenCandidat).then((json) => {
			console.log(json)
		})
	}
	render() {
		return (
			<form className="form_vote_list" onSubmit={this.handleSubmit.bind(this)}>
				<div className="vote-list">
					{this.state.candidates.map((candidate) => {
						return (
							<label
								htmlFor={candidate.id}
								className="candidate"
								style={{ backgroundColor: candidate.informations.color }}
								key={candidate.id}
							>
								<div className="img-candidate">
									<img src={candidate.informations.image_url} alt="avatar" />
								</div>
								<div className="description">
									<p>
										{candidate.informations.firstname}{' '}
										<span>{candidate.informations.lastname}</span>
									</p>
									<input
										type="radio"
										name="candidate"
										id={candidate.id}
										value={candidate.id}
										onChange={this.handleOptionChange}
									/>
									<label className="candidate-button" htmlFor={candidate.id} />
								</div>
							</label>
						)
					})}
					<label htmlFor={0} className="candidate">
						<div className="img-candidate" />
						<div className="description">
							<p>Vote Blanc</p>
							<input type="radio" name="candidate" id={0} value={0} onChange={this.handleOptionChange} />
							<label className="candidate-button" htmlFor={0} />
						</div>
					</label>
				</div>
				<div className="voteBottomContent">
					<p>
						<img src={lock} alt="lock" /> Vote sécurisé, cybersécurité 100% <br />
						<img src={people} alt="user" /> Votre anonymat est préservé
					</p>

					<input type="submit" className="vote-button" value="voter" />
				</div>
			</form>
		)
	}
}
