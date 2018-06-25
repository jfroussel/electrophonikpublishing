import React, { Component } from 'react';
import ScrollableAnchor, { } from 'react-scrollable-anchor'
import firebase from 'firebase'
import CoverImage from '../../assets/console.jpg'
import AutoSearch from './Autosuggest'

const style = {
    coverImage: {
        width: '100%',
        height: 800,
        margin: 0,
        padding: 0,
        background: 'url(' + CoverImage + ') no-repeat center fixed',
        backgroundSize: 'cover',
    },
    baseline: {
        color: '#FFF',
        fontSize: 60,
        paddingTop: 150
    },
   
}

class Cover extends Component {

    constructor(props) {
        super(props);
        this.state = {
            btnDev: 'Are you a dev ?',
            btnFindDev: 'Find a dev  !',
            userName: '',
            userEmail: '',
            value: ''
        }
    }

    componentWillReceiveProps() {
        let user = firebase.auth().currentUser;

        if (user != null) {
            this.setState({ userEmail: user.email })
        }
    }

    render() {

        return (
            <ScrollableAnchor id={'cover'}>
                <section className="cover-container pb-5 text-center" style={style.coverImage}>
                    <div className="container">
                        <p className="text-left pl-5 font-weight-bold " style={style.baseline}>Explore Our<br />
                            Curated Royalty-Free<br />
                            Music Library
                        </p>
                        <p>
                           <AutoSearch />
                        </p>
                    </div>

                </section>
            </ScrollableAnchor>
        )
    }
}

export default Cover;
