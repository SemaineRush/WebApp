import React, { Component } from 'react'
import { Redirect } from 'react-router-dom';
import '../Assets/register.css'
import folder from '../Assets/media/folder.svg'
import Register from "./Register"
import LogIn from "./LogIn"

export default class Sign extends Component {
    constructor(props) {
        super(props);
        this.state = {
            logged: false
        };
    }

    changeStatus(status){
        this.setState({
            logged: status,
        })
    }
    render(){
        if (this.state.logged === true) {
            return  <Redirect to="/home" />
        }else{
        return(
            <div>
                <div className='login_register'>
                    <LogIn changeStatus={this.changeStatus.bind(this)}></LogIn>
                    <div className="separator_file">
                        <hr/>
                        <div className="img_frame">
                            <img src={folder} alt="folder"/>
                        </div>
                        <hr/>
                    </div>
                    <Register changeStatus={this.changeStatus.bind(this)}></Register>
                </div>
                <p className="rights">© Supinternet 2020 - All rights reserved.</p>
            </div>
        )
        }
    }
}