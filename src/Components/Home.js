import React, { Component } from 'react';
import '../Assets/home.css';
import Header from './Header';

export default class Home extends Component {
	render() {
		return (
			<div>
				<Header />
				<div className="home">
					<div className="yellow_top">
						<h2>Election SUP'Internet</h2>
						<h4>BDE 2020</h4>
					</div>
					<div className="candidates">
						<div className="candidat">
							<div className="candidat_img">
								<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR3ALwgoYztClBjDqkLgX3cSoiC9iYyZFYsOURVXl_Yw3R-fO&s" />
							</div>

							<div className="candidat_info">
								<h3>Arevichan ARUDCHELVAN</h3>
								<span>
									As promised, here's a relaxing Breath of the Wild songs mix with a calm night
									ambience in the background. Note that I manually edited some of the songs to keep
									only the relaxing bits. I think you guys are gonna love this one!
								</span>
							</div>
						</div>

						<div className="candidat">
							<div className="candidat_img">
								<img src="https://a-static.besthdwallpaper.com/one-piece-sanji-wano-kuni-arc-wallpaper-14833_L.jpg" />
							</div>

							<div className="candidat_info">
								<h3>Arevichan ARUDCHELVAN</h3>
								<span>
									As promised, here's a relaxing Breath of the Wild songs mix with a calm night
									ambience in the background. Note that I manually edited some of the songs to keep
									only the relaxing bits. I think you guys are gonna love this one!
								</span>
							</div>
						</div>

						<div className="candidat">
							<div className="candidat_img">
								<img src="https://i.ytimg.com/vi/_i-chBlsXBE/maxresdefault.jpg" />
							</div>

							<div className="candidat_info">
								<h3>Arevichan ARUDCHELVAN</h3>
								<span>
									As promised, here's a relaxing Breath of the Wild songs mix with a calm night
									ambience in the background. Note that I manually edited some of the songs to keep
									only the relaxing bits. I think you guys are gonna love this one!
								</span>
							</div>
						</div>
					</div>

					<div className="vote_btn">
						<button>Voter</button>
					</div>

					<div className="top_left_yellow" />
					<div className="bottom_left_pink" />
					<div className="bottom_right_purple" />
					<div className="bottom_right_blue" />
				</div>
			</div>
		);
	}
}
