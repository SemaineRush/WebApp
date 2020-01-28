import React, { Component } from 'react'
import swal from 'sweetalert';
import '../Assets/register.css'
import api from './Api'

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
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault();
        if ( !this.state.firstname || !this.state.lastname || !this.state.email || !this.state.password ) {
            
            swal("EMpty input", "Please fill all the informations", "error");
        } else {
            api.Register(this.state.firstname, this.state.lastname, this.state.email, this.state.password).then((json) =>{
            // this.props.changeStatus(true)
            console.log(json)
            })
        }
            
        
    }
        
    render() {
        return (
            <div className="register_container">
                <span className="sign_account">Premiere fois sur notre site ? Créez un compte !</span>
                <form className="form_login" onSubmit={this.handleSubmit.bind(this)}>
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
                        <input placeholder="" className="form_input" type="password" autoComplete="on"  />
                    </div>
                    <button className="form_button" type="submit">Inscription</button>
                </form>
            </div>
        )
    }
}
