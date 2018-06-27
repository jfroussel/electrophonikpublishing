import React, { Component } from 'react';

class Audioplayer extends Component {
    render() {
        return (
            <div>
                <audio id="t-rex-roar-loop" controls loop>
                    <source
                        type="audio/mpeg"
                        src="http://soundbible.com/mp3/Tyrannosaurus%20Rex%20Roar-SoundBible.com-807702404.mp3" />
                    Your browser does not support the <code>audio</code> element.
                </audio>
            </div>
        );
    }
}

export default Audioplayer;

