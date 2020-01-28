import React, { Component } from 'react';
import Loader from '../Assets/media/loader.gif';
import '../Assets/vote.css';
import api from './Api';
import swal from 'sweetalert';
import lock from '../Assets/media/lock.png';
import people from '../Assets/media/people.png'

export default class VoteList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      candidates: [],
      chosenCandidat: '',
      isLoaded: false
    };
  }
  componentDidMount(){
    api.getElections(this.props.electionId).then((data) => {
        this.setState({
          candidates: data['hydra:member'][0].candidateElection,
          isLoaded: true
        })
    })
  }

  handleOptionChange = e => {
		this.setState({
			chosenCandidat: e.target.value
    });
    swal("Vous aller votez pour", e.target.candidat);
    setTimeout(() => {
      console.log(this.state.chosenCandidat)
    }, 100);
    
  };
  
  handleSubmit(e) {
    e.preventDefault()
    api.vote(this.props.electionId,this.state.chosenCandidat).then((json) => {
        console.log(json)
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
          <form className="form_vote_list" onSubmit={this.handleSubmit.bind(this)}>
            <div className="vote-list">
                {this.state.candidates.map(candidate => {
                  return <div className="candidate" style={{backgroundColor: candidate.informations.color}} key={candidate.id} >
                            <div className="img-candidate" >
                              <img src={candidate.informations.image_url} alt="avatar" />
                            </div>
                            <div className="description">
                              <p>{candidate.informations.firstname} <span>{candidate.informations.lastname}</span></p>
                              <input type="radio" name='candidate' id={candidate.id} value={candidate.id} onChange={this.handleOptionChange}   />
                              <label className="candidate-button" htmlFor={candidate.id}></label>
                            </div>
                          </div>
                })}
                <div className="candidate">
                  <div className="img-candidate">
                  </div>
                  <div className="description">
                    <p>Vote Blanc</p>
                    <input type="radio" name="candidate" id={0} value={0} onChange={this.handleOptionChange}  />
                    <label className="candidate-button" htmlFor={0}></label>
                  </div>
              </div>
            </div>
            <div className="voteBottomContent">
              <p>
                <img src={lock} alt="lock"/> Vote sécurisé,  cybersécurité 100% <br/>
                <img src={people} alt="user"/> Votre anonymat est préservé
              </p>

              <input type="submit" className="vote-button" value="voter" />
              
            </div>
            </form>
        )
      }
    }
}
