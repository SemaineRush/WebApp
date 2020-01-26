import React, { Component } from 'react'
import '../Assets/vote.css'
import avatar from '../Assets/media/avatar.png';
import lock from '../Assets/media/lock.png';
import people from '../Assets/media/people.png'

export default class VoteList extends Component {
    render() {
        return (
          <>
            <div className="vote-list">
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>Lapouge</span></p>
                  <input type="radio" name="candidate" id="candidate-1" />
                  <label className="candidate-button" htmlFor="candidate-1"></label>
                </div>
              </div>
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>Lapouge</span></p>
                  <input type="radio" name="candidate" id="candidate-2" />
                  <label className="candidate-button" htmlFor="candidate-2"></label>
                </div>
              </div>
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>Lapouge</span></p>
                  <input type="radio" name="candidate" id="candidate-3" />
                  <label className="candidate-button" htmlFor="candidate-3"></label>
                </div>
              </div>

              <div className="candidate">
                <div className="img-candidate">
                </div>
                <div className="description">
                  <p>Vote Blanc</p>
                  <input type="radio" name="candidate" id="candidate-4" />
                  <label className="candidate-button" htmlFor="candidate-4"></label>
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
          </>
        )
    }
}
