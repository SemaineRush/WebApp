
import React, { Component } from 'react'
import Loader from '../Assets/media/loader.gif';
import { Link } from 'react-router-dom'
import api from './Api';
import '../Assets/home.css';

export default class HomeCandidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
        candidates: [],
        isLoaded: false
        };
    }
    componentDidMount(){
        api.getElections(this.props.CurrentElectionId).then((data) => {
            this.setState({
                candidates: data['hydra:member'][0].candidateElection,
                isLoaded: true
            })
        })
    }
    render() {
        if (this.state.isLoaded === false) {
            return (
                <div>
                    <img src={Loader} />
                </div>
            )
        } else {
            return (
            <div className="homecandidates">
				{this.state.candidates.map((candidate) => {
					return (
						<Link className="candidat" to={`/home/${candidate.informations.lastname}`}>
							<div className="candidat_img" style={{ backgroundColor: candidate.informations.color }}>
								<img alt="d" src={candidate.informations.image_url} />
							</div>
							<div className={`candidat_info ${candidate.informations.lastname}`}>
								<div>
									<h3>
										{candidate.informations.firstname} {candidate.informations.lastname}
									</h3>
									<p>{candidate.informations.slogan}</p>
								</div>
							</div>
						</Link>
					);
				})}
			</div>
        )
        }
        
    }
}
