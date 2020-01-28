import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import '../Assets/home.css';
import Header from './Header';

export default class Home extends Component {
	constructor(props) {
        super(props);
        this.state = {
        email: "",
        password: ""
        };
	}
	
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
								<img alt="d" src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRBR3ALwgoYztClBjDqkLgX3cSoiC9iYyZFYsOURVXl_Yw3R-fO&s" />
							</div>

							<div className="candidat_info">

            <Link to="/home/arevishan"><h3>Arevishan ARUDCHELVAN</h3></Link>
								<p>
									As promised, here's a relaxing Breath of the Wild songs mix with a calm night
									ambience in the background. Note that I manually edited some of the songs to keep
									only the relaxing bits. I think you guys are gonna love this one!
								</p>
							</div>
						</div>
                        
                        
            <div className="candidat">
                <div className="candidat_img">
                    <img src="https://a-static.besthdwallpaper.com/one-piece-sanji-wano-kuni-arc-wallpaper-14833_L.jpg" />
                </div>
                <div className="candidat_info">
                <Link to="/home/maeliss"><h3>Maeliss TARAUD</h3></Link>
                    <p>
                        As promised, here's a relaxing Breath of the Wild songs mix with a calm night
                        ambience in the background. Note that I manually edited some of the songs to keep
                        only the relaxing bits. I think you guys are gonna love this one!
                    </p>
                </div>
            </div>

                        

						<div className="candidat">
							<div className="candidat_img">
								<img  alt="d" src="https://i.ytimg.com/vi/_i-chBlsXBE/maxresdefault.jpg" />
							</div>

							<div className="candidat_info">
                <Link to="/home/guiral"><h3>Guiral LAPOUGE</h3></Link>
                <p>
									As promised, here's a relaxing Breath of the Wild songs mix with a calm night
									ambience in the background. Note that I manually edited some of the songs to keep
									only the relaxing bits. I think you guys are gonna love this one!
								</p>
							</div>
						</div>
					</div>

					<div className="vote_btn">
						<Link to="/vote"><button>Voter</button></Link>
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
