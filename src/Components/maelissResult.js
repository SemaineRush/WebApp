import React from 'react';
import '../Assets/maelissResult.css';
import maeliss from '../Assets/media/maeliss/maeliss2.png';
import palms from '../Assets/media/maeliss/palmier.png';
import arrow from '../Assets/media/maeliss/arrow.svg';
import crown from '../Assets/media/maeliss/crown.svg';

const createSquares = (number) => {
	let squares = [];
	let i = 0;

	while (i < number) {
		i++;
		squares.push(<span />);
	}

	return squares;
};

const maelissResult = () => {
	return (
		<div className="containerMaelissResult">
			<div className="squares">{createSquares(25).map((square) => square)}</div>

			<div className="band">
				<h2>résultats</h2>
				<h2>résultats</h2>
			</div>

			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>
			<div className="squares">{createSquares(25).map((square) => square)}</div>

			<span className="circle" />
			<img className="palms" src={palms} alt="palms"/>
			<img className="maeliss" src={maeliss} alt="maeliss" />

			<div className="centerBand">
				<img className="arrow" src={arrow} alt="arrow" />
				<img className="arrow" src={arrow} alt="arrow" />
				<img className="arrow" src={arrow} alt="arrow" />
				<img className="crown" src={crown} alt="arrow" />
			</div>

			<div className="maire">
				<h3>
					maire
					<span>2020</span>
				</h3>
			</div>

			<div className="win">
				<h1>vainqueur maëliss taraud</h1>
				<h3>42%</h3>
				<span className="progressBar" />
			</div>

			<div className="losersContainer">
				<div className="losers">
					<p className="percent">22%</p>
					<div>
						<h3>arevichan</h3>
						<span className="progressBar one" />
					</div>
				</div>

				<div className="losers">
					<p className="percent">36%</p>
					<div>
						<h3>guidar</h3>
						<span className="progressBar two" />
					</div>
				</div>
			</div>
		</div>
	);
};

export default maelissResult;
