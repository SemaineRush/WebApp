import React, { useState } from 'react';
import '../Assets/maeliss.css';
import profil from '../Assets/media/maeliss/profil-pic.png';
import waveOne from '../Assets/media/maeliss/vague-un.svg';
import arrowOne from '../Assets/media/maeliss/fleche-bas.svg';
import whiteLines from '../Assets/media/maeliss/traits-blancs.svg';
import bubleOne from '../Assets/media/maeliss/bulle-dynamique.svg';
import arrowTwo from '../Assets/media/maeliss/fleche-droite.svg';
import bubleTwo from '../Assets/media/maeliss/bull-haut.svg';
import paf from '../Assets/media/maeliss/eclat.svg';
import enveloppe from '../Assets/media/maeliss/enveloppe.svg';
import waveTwo from '../Assets/media/maeliss/vague-deux.svg';
import arrowThree from '../Assets/media/maeliss/fleche-eclat-gauche.svg';
import arrowFour from '../Assets/media/maeliss/fleche-eclat-droite.svg';
import mouth from '../Assets/media/maeliss/icon-bouche.svg';

const createSquares = (number) => {
	let squares = [];
	let i = 0;

	while (i < number) {
		i++;
		squares.push(<span />);
	}

	return squares;
};

const Maeliss = (props) => {
	const [ play, setPlay ] = useState(false);

	return (
		<div className="bigContainer">
			<img src={waveOne} className="wave-one" />

			<section className="part-one">
				<span className="squareSkew" />
				<img src={whiteLines} className="white-lines" />
				<img src={arrowOne} className="arrow-one" />
				<img src={arrowTwo} className="arrow-two" />
				<img src={paf} className="paf" />

				<p className="p-one">leader de confiance</p>
				<p className="p-two">multiculturelle</p>
				<div className="boom">
					<img src={bubleOne} />
					<p>dynamique</p>
				</div>
				<div className="envelope">
					<img src={enveloppe} />
					<p>votez</p>
				</div>
				<div className="buble">
					<img src={bubleTwo} />
					<h1>
						maëliss<br />taraud<br />
						<span>
							<div />maire
						</span>
					</h1>
				</div>

				<div className="card card-three">
					<div className="img">
						<img src={profil} />
					</div>
					<p>
						ensemble vers<br /> l'avenir
					</p>
				</div>
				<div className="card card-two">
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
						<button>
							<h3>fast & curious</h3>
							<p>de Maëliss</p>
						</button>
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
				<img src={waveTwo} className="wave-two" />
				<img src={arrowThree} />
				<div>
					<h3>Faites le choix</h3>
					<h2>maëliss</h2>
				</div>
				<img src={arrowFour} />
			</section>
			<section className="part-five">
				<div className="squares">{createSquares(25).map((square) => square)}</div>
				<div className="squares">{createSquares(25).map((square) => square)}</div>
			</section>
			<section className="part-six">
				<div>
					<img src={mouth} />
					<img src={mouth} />
					<img src={mouth} />
				</div>
				<div>
					<button>votez !</button>
					<span />
				</div>
				<div>
					<img src={mouth} />
					<img src={mouth} />
					<img src={mouth} />
				</div>
			</section>
		</div>
	);
};

export default Maeliss;
