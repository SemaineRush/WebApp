import React, { Component } from 'react'
import '../Assets/arevishanWin.css'
import picture from '../Assets/media/arevishan/transparent.png'

export default class Arevishan extends Component {
	render() {
		return (
			<div className="arevishWin">
				<div className="bg-blue" />
				<div className="background">
					<div className="container">
						<div className="borders" />
					</div>
					<div className="content">
						<h1>
							Merci<br />à tous !
						</h1>
						<img src={picture} />
					</div>
				</div>
			</div>
		)
	}
}
