import React, { Component } from 'react'
import { Redirect, Link } from 'react-router-dom';
import '../Assets/register.css'
import api from './Api'
// import {BrowserRouter as Redirect} from 'react-router-dom';


export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: ""
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        api.getToken(this.state.email,this.state.password).then((json) => {
            this.props.changeStatus(true)
        })
    }
        
    
    render() {
        if(localStorage.getItem('token')){
            return  <Redirect to="/home" />
            }else{
        return (
            <div className="login_container">
                <span className="sign_account">Vous avez déjà un compte ? Connectez vous.</span>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form_line login">
                        <h3>ADRESSE EMAIL</h3>
                        <input 
                            placeholder="" 
                            className="form_input" 
                            name="email"
                            value={ this.state.email }
                            onChange={ this.handleChange } 
                        />
                    </div>
                    <div className="form_line login">
                        <h3>MOT DE PASSE</h3>
                        <input 
                            placeholder=""
                            className="form_input"
                            type="password" 
                            name="password"
                            value={ this.state.password }
                            onChange={ this.handleChange } 
                            autoComplete="on"
                        /> <br/>
                        <Link to="/reset" >Mot de passe oublié ?</Link>
                    </div>
                    <button className="form_button" type="submit" >Connexion</button>
                    <div className="link_account">
                        <a href="/" className="already_account">Vous avez déjà un compte ?</a> <br/>
                        <a href="/" >Connectez-vous.</a>
                    </div>
                </form>
            </div>
        )
        }
    }
}
