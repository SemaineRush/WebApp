import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import '../Assets/register.css'
// import {BrowserRouter as Redirect} from 'react-router-dom';


export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: ""
        };

        this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit() {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username": this.state.email,"password": this.state.password});
        
        fetch("https://testsamheroku.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            if (result.token) {
                localStorage.setItem('token', result.token);
            }
        })
        .catch(error => console.log('error', error));
    }
        
    
    render() {
        if(localStorage.getItem('token')){
            return  <Redirect to="/home" />
            }else{
        return (
            <div className="login_container">
                <span className="sign_account">Vous avez déjà un compte ? Connectez vous.</span>
                <form >
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
                        <a href="/" className="forgot_password" >Mot de passe oublié ?</a>
                    </div>
                    <button className="form_button" type="button" onClick={this.handleSubmit} >Connexion</button>
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
