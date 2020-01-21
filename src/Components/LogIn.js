import React, { Component } from 'react'
import '../Assets/register.css'
import folder from '../Assets/media/folder.svg'

export default class LogIn extends Component {
    render() {
        return (
            <div className="form_container">
                <div className="img_frame">
                    <img src={folder} />
                </div>
                <form>
                    <div className="form_line"><h3>ADRESSE EMAIL</h3><input placeholder="" className="form_input" /></div>
                    <div className="form_line"><h3>MOT DE PASSE</h3><input placeholder="" className="form_input" type="password" /></div>
                    <button className="form_button" type="submit">Connexion</button>
                </form>
            </div>
        )
    }
}
