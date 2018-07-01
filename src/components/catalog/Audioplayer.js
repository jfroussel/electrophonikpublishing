import React, { Component } from 'react';
const style = {
    icon: {
        color: '#dcad54',
        backgroundColor: 'transparent',
        
    },
    iconBox: {
        border: 'solid 1px #fff',
        textAlign:'center',
        paddingTop:5,
        borderRadius:50,
        width:40,
        height:40,
    }
}
class Audioplayer extends Component {
    render() {
        return (
            <div>
                <div className="row">
                    <div style={style.iconBox} className="ml-3">
                        <i className="fa fa-play" aria-hidden="true" style={style.icon}></i>
                    </div>
                    <div style={style.iconBox} className="ml-3">
                        <i className="fa fa-pause" aria-hidden="true" style={style.icon}></i>
                    </div>
                    <div style={style.iconBox} className="ml-3">
                        <i className="fa fa-stop" aria-hidden="true" style={style.icon}></i>
                    </div>
                </div>
            </div>
        );
    }
}

export default Audioplayer;

