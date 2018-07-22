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
                    <div className="col-1">
                        <i className="material-icons" style={style.icon}>play_circle_outline</i>
                    </div>
                    <div className="col-8">
                        <div className='wave'></div>
                    </div>
                    <div className="col-2"></div>
                </div>


            </div>
        )
    }
}

Waveform.defaultProps = {
    src: ""
}