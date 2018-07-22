import React, { Component } from 'react';
import ReactAudioPlayer from 'react-audio-player';
import Audio from './data/Accross.mp3'
import './audioPlayer.css'

class AudioPlayer extends Component {
    render() {
        return (
            <div>
                <ReactAudioPlayer
                    src={Audio}
                    autoPlay={false}
                    ref={(element) => { console.log(this.rap = element) }}
                   
                />
            </div>
        );
    }
}

export default AudioPlayer;
