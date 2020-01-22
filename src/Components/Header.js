import React, { Component } from 'react';
import '../Assets/header.css';
import Logo from '../Assets/media/supvote_logo.png';

export default class Header extends Component {
	render() {
		return (
			<header>
				<img src={Logo} alt="logo" />
			</header>
		);
	}
}
