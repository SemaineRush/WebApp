import React, { useState } from 'react';
import '../Assets/maeliss.css';
import profil from '../Assets/media/maeliss/profil-pic.png';
import waveOne from '../Assets/media/maeliss/vague-un.svg';
import arrowOne from '../Assets/media/maeliss/fleche-bas.svg';
import whiteLines from '../Assets/media/maeliss/traits-blancs.svg';
import bubbleOne from '../Assets/media/maeliss/bulle-dynamique.svg';
import arrowTwo from '../Assets/media/maeliss/fleche-droite.svg';
import bubbleTwo from '../Assets/media/maeliss/bulle-haut.svg';
import paf from '../Assets/media/maeliss/eclat.svg';
import enveloppe from '../Assets/media/maeliss/enveloppe.svg';
import waveTwo from '../Assets/media/maeliss/vague-deux.svg';
import arrowThree from '../Assets/media/maeliss/fleche-eclat-gauche.svg';
import arrowFour from '../Assets/media/maeliss/fleche-eclat-droite.svg';
import mouth from '../Assets/media/maeliss/icon-bouche.svg';
import bubbleThree from '../Assets/media/maeliss/bulle-bas.svg';
import insta from '../Assets/media/maeliss/icon-insta.svg';
import snap from '../Assets/media/maeliss/icon-snap.svg';
import twitter from '../Assets/media/maeliss/icon-twitter.svg';
import youtube from '../Assets/media/maeliss/icon-youtube.svg';
import ReactPlayer from 'react-player';

const createSquares = (number) => {
	let squares = [];
	let i = 0;

	while (i < number) {
		i++;
		squares.push(<span />);
	}

	return squares;
};

const createBubble = () => {};

const Maeliss = (props) => {
	const [ play, setPlay ] = useState(false);

	return (
		<div className="containerMaeliss">
			<img src={waveOne} className="wave-one" alt="waveOne" />

			<section className="part-one">
				<span className="squareSkew" />
				<img src={whiteLines} className="white-lines" alt="whiteLines" />
				<img src={arrowOne} className="arrow-one" alt="arrow" />
				<img src={arrowTwo} className="arrow-two" alt="arrow" />
				<img src={paf} className="paf" alt="paf" />

				<p className="p-one">leader de confiance</p>
				<p className="p-two">multiculturelle</p>

				<div className="boom">
					<img src={bubbleOne} alt="bubbleOne" />
					<p>dynamique</p>
				</div>
				<div className="envelope">
					<img src={enveloppe} alt="enveloppe" />
					<p>votez</p>
				</div>

				<div className="bubble">
					<img src={bubbleTwo} alt="bubbleTwo" />
					<h1>
						maëliss<br />taraud<br />
						<span>
							<div />maire
						</span>
					</h1>
				</div>

				<div className="card card-three">
					<div className="img">
						<img src={profil} alt="profil" />
					</div>
					<p>
						ensemble vers<br /> l'avenir
					</p>
				</div>
				<div className="card card-two">
					<div className="img">
						<img src={profil} alt="profil" />
					</div>
					<p>
						ensemble vers<br /> l'avenir
					</p>
				</div>
				<div className="card">
					<div className="img">
						<img src={profil} alt="profil" />
					</div>
					<p>
						ensemble vers<br /> l'avenir
					</p>
				</div>
			</section>

			<section className="part-two">
				<div className="squares">{createSquares(25).map((square) => square)}</div>
				<div className="squares">{createSquares(25).map((square) => square)}</div>

				<div className="container">
					<div className="content content-one">
						<div>
							<p>
								Maêliss, c’est la joie de vivre alliée à l’audace ; du sérieux couplé à des rires
								(beaucoup de rires) ; un esprit de leader qui n’abandonnera personne en cours de route.<br />{' '}
								Maëliss commença avec une formation de pompière volontaire; elle est aujourd’hui cheffe
								scout; pourquoi pas maire de notre ville demain ? Altruiste, dynamique, drôle… Tant
								d’adjectifs pourraient servir sa cause.
							</p>
						</div>
						<div>
							<p>Ne réfléchissez plus :</p>
							<h3>Votez maëliss pour que sup’ s’agrandisse</h3>
						</div>
					</div>
					<div className="content content-two">
						<span />
						<a href="https://www.youtube.com/watch?v=W2G9eqCNG8Y&t=" target="_blank">
							<h3>sup & curious</h3>
							<p>de Maëliss</p>
						</a>
					</div>
				</div>
			</section>

			<section className="part-three">
				<h2>son programme·sa vocation</h2>
				<h3>responsabilité · équité · fraternité</h3>
				<div className="container">
					<div className="content content-one">
						<div>
							<p>Apporter un accompagnement à chacun en fonction de son besoin.</p>
						</div>
						<div>
							<p>
								Promouvoir des lieux publics pour que chacun puisse profiter de la ville à sa manière
								(espace pour le sport, espace détente, lieux en pleine nature)
							</p>
						</div>
						<div>
							<p>Sensibiliser à l'environnement par des gestes du quotidien.</p>
						</div>
					</div>
					<div className="content content-two">
						<div>
							<p>
								Égalité culturelle, accessibilité tarifaire, ouvert au public, cela permet d'améliorer
								l'éducation et le savoir à long terme des jeunes.
							</p>
						</div>
						<div>
							<p>
								Panneaux solaires locaux permettant d'avoir une consommation plus écologiques et de
								réduire à terme les coûts des habitants
							</p>
						</div>
					</div>
					<div className="content content-three">
						<div>
							<p>Organiser différents évènements culturels, sportifs, humanitaires.</p>
						</div>
						<div>
							<p>
								Valoriser l'échange entre voisins pour apprendre à connaître davantage chaque personne.
							</p>
						</div>
					</div>
				</div>
			</section>

			<section className="part-four">
				<img src={waveTwo} className="wave-two" alt="waveTwo" />
				<img className="arrow" src={arrowThree} alt="arrow" />
				<div>
					<h3>Faites le choix</h3>
					<h2>maëliss</h2>
				</div>
				<img className="arrow" src={arrowFour} alt="arrow" />
			</section>

			<section className="part-five">
				<div className="squares">{createSquares(25).map((square) => square)}</div>
				<div className="squares">{createSquares(25).map((square) => square)}</div>

				<div className="middle">
					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>
					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>

					<div className="videoContainer">
						<ReactPlayer
							className="video"
							height="24.75vw"
							width="44vw"
							url="https://www.youtube.com/watch?v=3kbcHrXPUZs"
							controls
						/>
						<div className="bubble">
							<img src={bubbleThree} alt="bubbleThree" />
							<p>
								Retrouvez Maëliss<span>en vidéo</span>
							</p>
						</div>
					</div>

					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>
					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>

					<div className="socialContainer">
						<div className="bubble">
							<img src={bubbleThree} alt="bubbleThree" />
							<p>
								Retrouvez Maëliss<span>sur les réseaux</span>
							</p>
						</div>
						<a href="/" className="social">
							<img src={insta} alt="instagram" />
							<p className="insta">IG_maelT</p>
						</a>
						<a href="/" className="social">
							<img src={snap} alt="snapchat" />
							<p className="snap">mealmaire</p>
						</a>
						<a href="/" className="social">
							<img src={twitter} alt="twitter" />
							<p className="twitter">mayocurly</p>
						</a>
						<a href="/" className="social">
							<img src={youtube} alt="youtube" />
							<p className="youtube">mael_maire</p>
						</a>
					</div>

					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>
					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>
					<div className="squaresColumn">{createSquares(8).map((square) => square)}</div>
				</div>

				<div className="squares">{createSquares(25).map((square) => square)}</div>
				<div className="squares">{createSquares(25).map((square) => square)}</div>
			</section>

			<section className="part-six">
				<div>
					<img src={mouth} alt="bouche" />
					<img src={mouth} alt="bouche" />
					<img src={mouth} alt="bouche" />
				</div>

				<div>
					<button>votez !</button>
					<span />
				</div>

				<div>
					<img src={mouth} alt="bouche" />
					<img src={mouth} alt="bouche" />
					<img src={mouth} alt="bouche" />
				</div>
			</section>
		</div>
	);
};

export default Maeliss;
