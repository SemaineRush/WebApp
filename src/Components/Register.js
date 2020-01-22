import React, { Component } from 'react'
import '../Assets/register.css'

export default class Register extends Component {
    render() {
        return (
            <div className="register_container">
                <span className="sign_account">Premiere fois sur notre site ? Créez un compte !</span>
                <form className="form_login">
                    <div className="form_line login">
                        <h3>nom</h3>
                        <input placeholder="Votre nom" className="form_input" />
                    </div>
                    <div className="form_line register">
                        <h3>prenom</h3>
                        <input placeholder="Votre prénom" className="form_input" />
                    </div>
                    <div className="form_line register">
                        <h3>adresse mail</h3>
                        <input placeholder="" className="form_input" />
                    </div>
                    <div className="form_line register">
                        <h3>mot de passe</h3>
                        <input placeholder="" className="form_input" type="password" />
                    </div>
                    <div className="form_line register">
                        <h3>confirmation mot de passe</h3>
                        <input placeholder="" className="form_input" type="password" />
                    </div>
                    <button className="form_button" type="submit">Inscription</button>
                </form>
            </div>
        )
    }
}
