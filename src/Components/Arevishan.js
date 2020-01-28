import React, { Component } from 'react';
import '../Assets/arevishan.css';
import { Link } from 'react-router-dom';
import profile from '../Assets/media/arevishan/profile.png';
import img1 from '../Assets/media/arevishan/img1.png';
import img2 from '../Assets/media/arevishan/img2.png';
import img3 from '../Assets/media/arevishan/img3.png';
import fb from '../Assets/media/arevishan/fb.svg';
import InstagramIcon from '@material-ui/icons/Instagram';
import TwitterIcon from '@material-ui/icons/Twitter';

export default class Arevishan extends Component {
	render() {
		return (
			<div className="arevishContainer">
				<div className="header">
					<div className="image">
						<img alt="profile" src={profile} />
					</div>
					<h1>
						Votez
						<span>pour moi</span>
					</h1>
					<div className="social">
						<button>
							<img alt="facebook" src={fb} />
						</button>
						<button>
							<TwitterIcon />
						</button>
						<button>
							<InstagramIcon />
						</button>
					</div>
				</div>
				<div className="background">
					<div className="container">
						<div className="borders" />
					</div>
					<div className="content">
						<h2>
							Arevishan ARUDCHELVAN
							<span>Candidat à l’élection de la mairie</span>
						</h2>
						<p className="italic">
							« Je veux faire de Sup une famille où bonne entente et respect règnent en maitre.»
						</p>
						<div className="text">
							<h3>JE SUIS LE MAIRE QU’IL VOUS FAUT !</h3>
							<p>Laissez-moi vous expliquer pourquoi :</p>
							<div className="imgContainer">
								<img alt="ecole" src={img1} />
							</div>
							<p>
								A l’aise avec les personnes qui m’entourent je sais prêter une oreille attentive aux
								habitants qui en ont besoin. Avec moi vous vous sentez écouté.
							</p>
							<div className="imgContainer">
								<img alt="code" src={img2} />
							</div>
							<p>
								Je suis une personne joyeuse dont la bonne humeur est intarissable. Energique et
								enthousiaste je saurais rythmer la ville de Sup à travers divers évènements et
								animations
							</p>
							<div className="imgContainer">
								<img alt="Sri Lanka" src={img3} />
							</div>
							<p>
								Né de parents Sri Lankais, je possède une double culture qui me permet de porter une
								vision élargie de l’environnement qui l’entoure. J’ai donc grandi dans la tolérance et
								le respect de chacun et ce sont ces valeurs que je compte transmettre à la ville de Sup.
							</p>
						</div>
						<Link to="/vote">Voter</Link>
					</div>
				</div>
				<div className="bg-blue" />
			</div>
		);
	}
}
