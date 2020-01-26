import React, { useState } from 'react';
import '../Assets/maelissResult.css';

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
		</div>
	);
};

export default maelissResult;
