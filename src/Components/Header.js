import React, { Component } from 'react';
import '../Assets/header.css';
import logo from '../Assets/media/supvote_logo.png';
import { Link } from 'react-router-dom';

export default class Header extends Component {
	render() {
		return (
			<header>
				<Link to="home">
					<img src={logo} alt="logo " />
				</Link>
			</header>
		);
	}
}
