import React, { Component } from 'react'
import '../Assets/register.css'

export default class LogIn extends Component {
    render() {
        return (
            <div className="login_container">
                <span className="sign_account">Vous avez déjà un compte ? Connectez vous.</span>
                <form>
                    <div className="form_line login">
                        <h3>ADRESSE EMAIL</h3>
                        <input placeholder="" className="form_input" />
                    </div>
                    <div className="form_line login">
                        <h3>MOT DE PASSE</h3>
                        <input placeholder="" className="form_input" type="password" />
                    </div>
                    <span><a href="/" className="forgot_password">Mot de passe oublié ?</a></span>
                    <button className="form_button" type="submit">Connexion</button>
                    <div className="link_account">
                        <a href="/" className="already_account">Vous avez déjà un compte ?</a> <br/>
                        <a href="/">Connectez-vous.</a>
                    </div>
                </form>
            </div>
        )
    }
}
