import React, { Component } from 'react';
import '../Assets/maeliss.css';
import profil from '../Assets/media/maeliss/profil-pic.png';
import waveOne from '../Assets/media/maeliss/vague-un.svg';
import arrowOne from '../Assets/media/maeliss/fleche-bas.svg';
import whiteLines from '../Assets/media/maeliss/traits-blancs.svg';
import bubleOne from '../Assets/media/maeliss/bulle-dynamique.svg';
import arrowTwo from '../Assets/media/maeliss/fleche-droite.svg';
import bubleTwo from '../Assets/media/maeliss/bull-haut.svg';
import paf from '../Assets/media/maeliss/eclat.svg';

export default class Maeliss extends Component {
	render() {
		return (
			<div className="bigContainer">
				<img src={waveOne} className="wave-one" />

				<section className="part-one">
					<span className="squareSkew" />
					<img src={whiteLines} className="white-lines" />
					<img src={arrowOne} className="arrow-one" />
					<img src={arrowTwo} className="arrow-two" />
					<img src={paf} className="paf" />

					<p className="p-one">
						leader<span />de<span />confiance
					</p>
					<p className="p-two">multiculturelle</p>
					<div className="boom">
						<img src={bubleOne} />
						<p>dynamique</p>
					</div>
					<div className="buble">
						<img src={bubleTwo} />
						<p>
							maëliss<br />taraud<br />
							<span>
								<div />maire
							</span>
						</p>
					</div>

					<div className="card three">
						<div className="img">
							<img src={profil} />
						</div>
						<p>
							ensemble vers<br /> l'avenir
						</p>
					</div>
					<div className="card two">
						<div className="img">
							<img src={profil} />
						</div>
						<p>
							ensemble vers<br /> l'avenir
						</p>
					</div>
					<div className="card">
						<div className="img">
							<img src={profil} />
						</div>
						<p>
							ensemble vers<br /> l'avenir
						</p>
					</div>
				</section>

				<section className="part-two" />
			</div>
		);
	}
}
