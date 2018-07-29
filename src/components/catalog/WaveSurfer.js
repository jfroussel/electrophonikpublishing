import React, {Component } from 'react'
import ReactDOM from 'react-dom'
import WaveSurfer from 'wavesurfer.js'
import ReactTooltip from 'react-tooltip'
import style from './WaveSurferStyle'

export default class Waveform extends Component {
    constructor(props) {
        super(props)
        this.state = {
            activePlay: false
        }
        this.playPause = this.playPause.bind(this)
        this.pause = this.pause.bind(this)
    }

    componentDidMount() {
        this.$el = ReactDOM.findDOMNode(this)
        this.$waveform = this.$el.querySelector('.wave')
        this.wavesurfer = WaveSurfer.create({
            container: this.$waveform,
            waveColor: '#b5983ef5',
            progressColor: '#ffc107',
            height: 67,
        })
        this.wavesurfer.load(this.props.src)
    }

    playPause() {
        this.setState({ activePlay: true })
        return (
            this.wavesurfer.playPause()
        )
    }

    pause() {
        this.setState({ activePlay: false })
        return (
            this.wavesurfer.pause()
        )
    }

    render() {

        return (
            <div className='container waveform'>
                <div className="row">
                    {!this.state.activePlay ?
                        <span data-tip="Play track">
                            <i className="material-icons" onClick={this.playPause} style={style.icon}>
                                play_arrow
                        </i>
                        </span>
                        :
                        <span data-tip="Pause track">
                            <i className="material-icons" onClick={this.pause}  style={style.icon}>
                                pause
                        </i>
                        </span>
                    }
                    <div className="col-6">
                        <div className='wave'></div>
                    </div>
                    <div className="col-1" style={style.iconBox}>
                        <span data-tip="Stems">
                            <i className="material-icons" style={style.icon}>
                                list
                            </i>
                        </span>
                    </div>
                    <div className="col-1" style={style.iconBox}>
                        <span data-tip="Add to playlist">
                            <i className="material-icons" style={style.icon}>
                                playlist_add
                            </i>
                        </span>
                    </div>
                    <div className="col-1" style={style.iconBox}>
                        <span data-tip="list of author tracks">
                            <i className="material-icons" style={style.icon}>
                            how_to_reg
                            </i>
                        </span>
                    </div>
                    <div className="col-1" style={style.iconBox}>
                        <span data-tip="Infos">
                            <i className="material-icons" style={style.icon}>
                                info
                            </i>
                        </span>
                    </div>
                    <div className="col-1" style={style.iconBox}>
                        <span data-tip="Add to cart">
                            <i className="material-icons" style={style.icon}>
                            add_shopping_cart
                            </i>
                        </span>
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