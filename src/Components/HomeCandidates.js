import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import api from './Api';
import '../Assets/home.css';

export default class HomeCandidates extends Component {
    constructor(props) {
        super(props);
        this.state = {
        candidates: []
        };
    }
    componentDidMount(){
        api.getElections(this.props.CurrentElectionId).then((data) => {
            console.log(data)
            this.setState({
                candidates: data['hydra:member'][0].candidateElection
            })
        })
    }
    render() {
        return (
            <div className="homecandidates">
            {this.state.candidates.map(candidate => {
            return <div className="candidat">
						<div className="candidat_img" style={{backgroundColor: candidate.informations.color}}>
							<img alt="d" src={candidate.informations.image_url} />
						</div>
						<div className="candidat_info">
                            <Link to={`/home/${candidate.informations.lastname}`}><h3>{candidate.informations.firstname} {candidate.informations.lastname}</h3></Link>
							<p>{candidate.informations.slogan}</p>
						</div>
					</div>
            })}
            </div>
        )
    }
}
