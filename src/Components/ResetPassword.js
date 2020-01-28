import React, { Component } from 'react';
import api from './Api';

export default class ResetPassword extends Component {
    constructor(props) {
        super(props);
        this.state = {
            email: ""
        };
    }

    handleChange = (e) => {
        this.setState({[e.target.name]:e.target.value})
    }

    handleSubmit(e) {
        e.preventDefault()
        api.ResetPassword(this.state.email).then((json) =>{
            console.log(json)
        })
    }
    render() {
        return (
            <div>
                <form onSubmit={this.handleSubmit.bind(this)}>
                    <div className="form_line login">
                        <h3>ADRESSE EMAIL</h3>
                        <input 
                            placeholder="" 
                            className="form_input" 
                            name="email"
                            type="email"
                            value={ this.state.email }
                            onChange={ this.handleChange }
                            required
                        />
                    </div>
                    <button className="form_button" type="submit" >Envoyer</button>
                </form>
            </div>
        )
    }
}
