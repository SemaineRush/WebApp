
import React, { Component} from 'react'
import Sup2020 from '../Assets/media/SUP2020.svg'
import Profile from '../Assets/media/export.svg'
import arrow1 from '../Assets/media/Group32.svg'
import arrow2 from '../Assets/media/Group33.svg'
import arrow3 from '../Assets/media/Group34.svg'
import arrow4 from '../Assets/media/Group38.svg'
import arrow5 from '../Assets/media/Group40.svg'
import P2020 from '../Assets/media/2020.svg'
import mapboxgl from 'mapbox-gl';
import Vector1 from '../Assets/media/Vector18.svg'
import articleCover from '../Assets/media/article_img.svg'
import ReactPlayer from 'react-player'

import '../Assets/guiralvote.css'


mapboxgl.accessToken= "pk.eyJ1IjoiZ29sZGRtYWQiLCJhIjoiY2s1cXF4cnhqMDR5MzNtbmx1ZmZwa3k1diJ9.DB02Xu0QwgX3mikYn14-vA";

export default class GuiralVote extends Component {
    constructor(props){
        super(props);
        this.state = {
        lng: 2.3713613,
        lat: 48.8663025,
        zoom: 15
        };
    }
    componentDidMount() {
        const map = new mapboxgl.Map({
            container: this.mapContainer,
            style: 'mapbox://styles/golddmad/ck5tfzef20m3u1ippfmjrf59s',
            center: [this.state.lng, this.state.lat],
            zoom: this.state.zoom
        });
    }

    render() {
        return (
            <div className='guiral_home'>
                <div className="programme_pt1">
                    <div className="left_pt">
                        <img alt="profile" src={Profile} />
                        <h1>Des idées<br /> d’aujourd’hui<br /> naissent<br /> les projets<br /> de demain.</h1>
                    </div>
                    <div className="right_pt">
                        <div></div>
                        <div className="programme">
                            <h2>LE PROGRAMME</h2>
                            <p>Vous pensez que c’est l’avenir du marché ? Nous vous mettrons à disposition <b>des intervenants</b> pour discuter de vos projets d’avenir.</p>
                            <p> Comment financer ces projets ? Nous permettrons d’avoir accès à <b>des fonds communs</b> qui vous aiderons tout au long de vos projets.</p>
                            <p> Devenir entrepreneur est quelque chose qui vous parle ? Mais vous avez peur de vous lancer ? Nous mettons en place <b>une équipe d'entrepreneurs pour vous aider</b>.</p>
                            <p> Pour vous amis entrepreneurs, nous vous mettrons en relation avec les meilleurs. Mais qui sont les meilleurs me direz vous ? Nous allons créer <b>un groupe Facebook et Linkedin</b> sur lequel des professionnels proposeront directement des missions.</p>
                            <p> Marre de vous demandez « on mange où ce midi » ? <b>une restauration dans votre ville</b>.</p>
                            <p> Nous agrandirons votre <b>terrasse</b> avec un plus <b>grand jardin</b> pour pouvoir profiter au mieux de vos temps libre.</p>
                            <p> Nous aménagerons une <b>salle</b> qui sera dédiée au <b>sport</b>.</p>
                            <p> Vous voulez <b>des bonbons</b> ? Il y aura bien plus que ça !</p>
                            <p> … et plus encore.</p>
                            <img alt="SUP" src={ Sup2020 } />
                        </div>
                        
                    </div>
                </div>
                <div className="programme_pt2">
                    <div className="pt2_left">
                        <h3>Un candidat, un homme<br /> qui s’est construit.</h3>
                        <p><b>Guiral</b>, un jeune homme issu de quartiers défavorisés a dû apprendre très tôt à se débrouiller seul et avancer par lui-même. Très peu de personnes ont cru en lui et le destinait à rester en bas de l’échelle. Personne ne voyait en lui un avenir. <b>Seul</b> lui se faisait confiance c’est pourquoi il a persisté et beaucoup travaillé.<br/> Grâce à sa <b>motivation</b>, sa <b>persévérance</b> et son caractère de conquérant, il a toujours effectué ses propres choix et a suivi ses <b>intuitions</b> pour mener à bien tous ses <b>projets</b>, ce qui lui vaut aujourd’hui son parcours et sa candidature à l’élection municipale de SUP 2020. Ses idées de campagne, il les tient de ses études supérieures desquelles il a été diplômé. Grâce à elles, il a pu <b>créer sa propre structure</b> qui permet de mettre en relation des entrepreneurs avec des entreprises.</p>
                    </div>
                    <div className="pt2_right">
                        <h1>Sa motivation,<br />sa persévérance<br /> et son caractère<br /> de conquérant.</h1>
                    </div>
                </div>
                <div className="chronology">
                    <div className="p2020_1">
                        <img alt="Vector" src={Vector1} />
                        <img alt="P2020" src={P2020} />
                    </div>
                    <div className="p2020_2">
                        <img alt="Vector" src={Vector1} />
                        <img alt="P2020" src={P2020} />
                    </div>
                    <h4>Création de salle de coworking</h4>
                    <img className="arrow_month" alt="arrow_month" src={arrow1} />
                    <h4>Création service restauration</h4>
                    <img className="arrow_month" alt="arrow_month" src={arrow2} />
                    <h4>Amenagement de salle de sport</h4>
                    <img className="arrow_month" alt="arrow_month" src={arrow3} />
                    <h4>organisation de compétitions sportives</h4>
                    <img className="arrow_month" alt="arrow_month" src={arrow5} /><img className="arrow" alt="arrow_month" src={arrow4}/>
                </div>
                <div className="actuality">
                    <div className="map" >
                        <div ref={el => this.mapContainer = el} className="mapContainer" />
                        
                    </div>
                    <div className="feed">
                        <h3>Toute l'actualité</h3>
                        <div className="article">
                            <img src={ articleCover } alt="articleCover" />
                            <div className="article_content">
                                <h4>Campagne éléctorale 2020</h4>
                                <p>Lancement de la campagne éléctorale pour les municipales de SUP’Internet 2020. Demandez votre documentation pour comprendre notre programme.</p>
                            </div>
                        </div>
                        <div className="article">
                            <img src={ articleCover } alt="articleCover"/>
                            <div className="article_content">
                                <h4>Campagne éléctorale 2020</h4>
                                <p>Lancement de la campagne éléctorale pour les municipales de SUP’Internet 2020. Demandez votre documentation pour comprendre notre programme.</p>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="media">
                    <div>
                    </div>
                    
                    <ReactPlayer 
                    className="player"
                    height="85%"
                    width="100%"
                    url='https://www.youtube.com/watch?v=m7SlTS8R2I0'
                    controls
                    >
                    </ReactPlayer>
                </div>
            </div>
        )
    }
}

