import React, { Component } from 'react'
import '../Assets/register.css'

export default class Register extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: [],
          lastname: "",
          firstname: "",
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
        myHeaders.append("Content-Type", "application/x-www-form-urlencoded");

        var raw = JSON.stringify({"firstname": this.state.firstname, "lastname": this.state.lastname, "email" : this.state.email, "password": this.state.password});
        
        fetch("https://testsamheroku.herokuapp.com/api/auth/register", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            console.log(result)
            console.log(this.state.email);
            if (result.token) {
                localStorage.setItem('user_info', result.token);
            }
        })
        .catch(error => console.log('error', error));
    }
        
    render() {
        return (
            <div className="register_container">
                <span className="sign_account">Premiere fois sur notre site ? Créez un compte !</span>
                <form className="form_login">
                    <div className="form_line login">
                        <h3>nom</h3>
                        <input 
                            placeholder="Votre nom" 
                            className="form_input" 
                            name="lastname"
                            value={ this.state.nom }
                            onChange={ this.handleChange } 
                        />
                    </div>
                    <div className="form_line register">
                        <h3>prenom</h3>
                        <input 
                            placeholder="Votre prénom"
                            className="form_input" 
                            name="firstname"
                            value={ this.state.prenom }
                            onChange={ this.handleChange } 
                        />
                    </div>
                    <div className="form_line register">
                        <h3>adresse mail</h3>
                        <input 
                            placeholder="" 
                            className="form_input" 
                            name="email"
                            value={ this.state.email }
                            onChange={ this.handleChange } 
                        />
                    </div>
                    <div className="form_line register">
                        <h3>mot de passe</h3>
                        <input 
                            placeholder="" 
                            className="form_input" 
                            type="password" 
                            autoComplete="on" 
                            name="password"
                            value={ this.state.password }
                            onChange={ this.handleChange } 
                        />
                    </div>
                    <div className="form_line register">
                        <h3>confirmation mot de passe</h3>
                        <input placeholder="" className="form_input" type="password" autoComplete="on"/>
                    </div>
                    <button className="form_button" type="button" onClick={this.handleSubmit}>Inscription</button>
                </form>
            </div>
        )
    }
}
