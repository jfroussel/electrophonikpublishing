// components/waveform.js
import React from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import ReactTooltip from 'react-tooltip'

const style = {
    icon: {

    }
}

export default class Waveform extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }

        this.playPause = this.playPause.bind(this)
        this.pause = this.pause.bind(this)
        this.stop = this.stop.bind(this)
    }
    componentDidMount() {
        this.$el = ReactDOM.findDOMNode(this)
        this.$waveform = this.$el.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: 'teal',
            progressColor: 'green',
            
        })
        this.wavesurfer.load(this.props.src)
        console.log('wavesurfer details : ', this.wavesurfer)
        console.log(this.wavesurfer.getDuration())
        
    }

    playPause() {
        return (
            this.wavesurfer.playPause()
        )
        
    }
    pause() {
        return (
            this.wavesurfer.pause()
        )
    }
    stop() {
        return (
            this.wavesurfer.stop()
        )
    }
    
    componentWillUnmount() {

    }

    componentWillReceiveProps(nextProps) {
        console.log('wcrp : ',this.wavesurfer.getDuration())
    }
    

    render() {
        
        return (
            <div className='container-fluide waveform'>
                <div className="row">
                    <div className="col-6">
                        <div className="btn-group mr-2 pt-5 btn-group-sm " role="group" aria-label="Basic example">
                            <button
                                type="button"
                                className="btn  btn-dark"
                                onClick={this.playPause}
                                data-tip="Play track"
                            >
                                <i className="material-icons" style={style.icon}>play_arrow</i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-tip="Pause track"
                                onClick={this.pause}
                            >
                                <i className="material-icons" style={style.icon}>pause</i>
                            </button>
                            <button
                                type="button"
                                className="btn btn-dark"
                                data-tip="Stop track"
                                onClick={this.stop}
                            >
                                <i className="material-icons" style={style.icon}>stop</i>
                            </button>
                        </div>

                        <div className="btn-group mr-2 pt-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-dark" data-tip="Volume down">
                                <i className="material-icons" style={style.icon}>volume_down</i>
                            </button>
                            <button type="button" className="btn btn-dark" data-tip="Volume mute">
                                <i className="material-icons" style={style.icon}>volume_mute</i>
                            </button>
                            <button type="button" className="btn btn-dark" data-tip="Volume off">
                                <i className="material-icons" style={style.icon}>volume_off</i>
                            </button>
                            <button type="button" className="btn btn-dark" data-tip="Volume up">
                                <i className="material-icons" style={style.icon}>volume_up</i>
                            </button>
                        </div>
                        <div className="btn-group mr-2 pt-5" role="group" aria-label="Basic example">
                            <button type="button" className="btn btn-dark" data-tip="Add track in playlist">
                                <i className="material-icons" style={style.icon}>playlist_add</i>
                            </button>
                            <button type="button" className="btn btn-dark" data-tip="Repeat track">
                                <i className="material-icons" style={style.icon}>repeat</i>
                            </button>
                            <button type="button" className="btn btn-dark" data-tip="Equalizer">
                                <i className="material-icons" style={style.icon}>tune</i>
                            </button>
                            <button type="button" className="btn btn-dark" data-tip="Download track">
                                <i className="material-icons" style={style.icon}>cloud_download</i>
                            </button>
                        </div>
                    </div>
                    <div className="col-6">

                        <div className='wave'>
                        
                        </div>
                        
                    </div>
                </div>
                <ReactTooltip />
            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}