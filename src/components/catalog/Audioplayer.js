import React, { Component } from 'react';

class Audioplayer extends Component {
    render() {
        return (
            <div>   
                <i class="fa fa-play-circle fa-2x text-warning " aria-hidden="true"></i>
                <i class="fa fa-pause-circle fa-2x text-warning ml-2" aria-hidden="true"></i>
                <i class="fa fa-stop-circle fa-2x text-warning ml-2" aria-hidden="true"></i>
            </div>
        );
    }
}

export default Audioplayer;

