import React, { Component } from 'react'
import '../Assets/register.css'
import folder from '../Assets/media/folder.svg'
import Register from "./Register"
import LogIn from "./LogIn"

export default class Sign extends Component {
    render(){
        return(
            <div>
                <div className='login_register'>
                    <LogIn></LogIn>
                    <div className="separator_file">
                        <hr/>
                        <div className="img_frame">
                            <img src={folder} alt="folder"/>
                        </div>
                        <hr/>
                    </div>
                    <Register></Register>
                </div>
                <p className="rights">© Supinternet 2020 - All rights reserved.</p>
            </div>
        )
    }
}