import React, { Component } from 'react'
import '../Assets/register.css'

export default class LogIn extends Component {

    constructor(props) {
        super(props);
        this.state = {
          user: [],
          email: ""
        };
    }

     handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
     }

    componentDidMount(){
      // For initial data
      this.fetchData();
    }


    fetchData = () => {

        var myHeaders = new Headers();
        myHeaders.append("Content-Type", "application/json");

        var raw = JSON.stringify({"username":"sam@sam.fr","password":"motdepas"});
        
        fetch("https://testsamheroku.herokuapp.com/api/auth/login", {
            method: 'POST',
            headers: myHeaders,
            body: raw,
            redirect: 'follow'
        })
        .then(response => response.json())
        .then(result => {
            this.setState({ user: result.user });
            console.log(result)
        })
        .catch(error => console.log('error', error));
    }
        
    
    render() {

        const { user } = this.state;
        return (
            <div className="login_container">
                <span className="sign_account">Vous avez déjà un compte ? Connectez vous.</span>
                <form onSubmit = {this.fetchWeather}>
                    <div className="form_line login">
                        <h3>ADRESSE EMAIL</h3>
                        <input placeholder="" className="form_input" name="email"/>
                    </div>
                    <div className="form_line login">
                        <h3>MOT DE PASSE</h3>
                        <input placeholder="" className="form_input" type="password" /> <br/>
                        <a href="/" className="forgot_password">Mot de passe oublié ?</a>
                    </div>
                    <button className="form_button" type="submit">Connexion</button>
                    <div className="link_account">
                        <a href="/" className="already_account">Vous avez déjà un compte ?</a> <br/>
                        <a href="/" onClick={this.fetchData}>Connectez-vous.</a>
                    </div>
                </form>
            </div>
        )
    }
}
