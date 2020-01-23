import React, { Component } from 'react'
import '../Assets/guiralwin.css'
import guiralvainqueur from '../Assets/media/guiralvainqueur.png'


export default class GuiralWin extends Component {
    render() {
        return (
            <div className='guiral_win_home'>
                <div className='guiral-background'>
                    <h1 className='guiral-result-text'>Les Resultats</h1>
                    <img src={guiralvainqueur}></img>
                </div>
            </div>
        )
      
    }

}