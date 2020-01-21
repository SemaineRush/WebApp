import React, { Component } from 'react'
import '../Assets/vote-list.css'
import avatar from '../Assets/media/avatar.png';

export default class LogIn extends Component {
    render() {
        return (
            <div className="vote-list">
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>Lapouge</span></p>
                  <input type="radio" name="candidate" />
                </div>
              </div>
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>Lapouge</span></p>
                  <input type="radio" name="candidate" />
                </div>
              </div>
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>Lapouge</span></p>
                  <input type="radio" name="candidate" />
                </div>
              </div>
              <div className="candidate">
                <div className="img-candidate">
                  <img src={avatar} alt="avatar" />
                </div>
                <div className="description">
                  <p>Guiral <span>nneononln</span></p>
                  <input type="radio" name="candidate" />
                </div>
              </div>
            </div>
        )
    }
}
