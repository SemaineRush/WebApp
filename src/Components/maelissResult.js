import React, { useState } from 'react';
import '../Assets/maelissResult.css';
import maeliss from '../Assets/media/maeliss/maeliss2.png';
import palms from '../Assets/media/maeliss/palmier.png';

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
			<img className="palms" src={palms} />
			<img className="maeliss" src={maeliss} />

			<div className="centerBand">
				<img className="arrow" src="" />
				<img className="arrow" src="" />
				<img className="arrow" src="" />
				<img className="crown" src="" />
			</div>

			<div className="win">
				<h1>vainqueur maëliss taraud</h1>
				<h3>40%</h3>
			</div>

			<div className="maire">
				<h3>
					maire<br />
					2020
				</h3>
			</div>
		</div>
	);
};

export default maelissResult;
