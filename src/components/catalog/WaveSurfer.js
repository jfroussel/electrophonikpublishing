// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'

const style = {
    icon: {
        fontSize: 50,
    }
}
export default class Waveform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.playPause = this.playPause.bind(this)
    }
    componentDidMount() {
        this.$el = ReactDOM.findDOMNode(this)
        this.$waveform = this.$el.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: 'teal',
            progressColor: 'green'
        })
        this.wavesurfer.load(this.props.src)
    }

    playPause() {
        return (
            this.wavesurfer.playPause()
        )
    }
    componentWillUnmount() {

    }
    render() {
        return (
            <div className='container-fluide waveform'>
                <div className="row">
                    <div className="col-12">
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button 
                            type="button" 
                            class="btn btn-secondary"
                            onClick={this.playPause}
                            >
                                <i className="material-icons" style={style.icon}>play_arrow</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>pause</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>stop</i>
                            </button>
                        </div>
                        <div className='wave'></div>
                        <div class="btn-group" role="group" aria-label="Basic example">
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>volume_down</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>volume_mute</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>volume_off</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>volume_up</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>playlist_add</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>repeat</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>equalizer</i>
                            </button>
                            <button type="button" class="btn btn-secondary">
                                <i className="material-icons" style={style.icon}>tune</i>
                            </button>

                        </div>
                    </div>
                    <div className="col-12">
                        <div className='wave'></div>
                    </div>
                </div>


            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}