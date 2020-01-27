import React, { Component } from 'react'
import '../Assets/guiralWin.css'
import guiral from '../Assets/media/guiral/guiral.png'
import maeliss from '../Assets/media/guiral/maeliss.png'
import arevichan from '../Assets/media/guiral/arevichan.png'
import guiral_art from '../Assets/media/guiral/guiral_art.svg'

export default class GuiralWin extends Component {
	render() {
		return (
			<div className="guiralWin">
				<div className="bg-purple">
					<div>
						<h1>Les résultats</h1>
						<img src={guiral} />
						<span>
							<p className="bg-text">Guiral Lapouge</p>
							<p className="bg-text">Guiral Lapouge</p>
							<p className="guiral">Guiral Lapouge</p>
							<p className="bg-text">Guiral Lapouge</p>
						</span>
					</div>
					<div>
						<span>
							<p>Votre nouveau maire :</p>
							<h2>Guiral LAPOUGE</h2>
						</span>
						<p>42%</p>
					</div>
				</div>
				<div className="bg-yellow">
					<h2>Maeliss TARAUD</h2>
					<div>
						<img src={maeliss} />
						<p>38%</p>
					</div>
				</div>
				<div className="bg-blue">
					<h2>Arevichan ARUDCHELVAN</h2>
					<div>
						<img src={arevichan} />
						<p>13%</p>
					</div>
				</div>
				<div className="bg-red">
					<div className="img-wrapper">
						<img src={guiral_art} />
					</div>
					<p>Merci.</p>
				</div>
				<div className="bg-white">
					<p>Les détails</p>
					<div className="placeholder" />
				</div>
			</div>
		)
	}
}
