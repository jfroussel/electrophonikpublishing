import React from 'react';
import StyledFirebaseAuth from 'react-firebaseui/StyledFirebaseAuth';
import firebase from 'firebase';
import './Auth.css'

const style = {
    welcomeContainer: {
        borderRight: 'solid 2px #C7C7C7'
    },
    welcomeCard: {
        border: 'solid 1px C7C7C7'
    },
    connectContainer: {

    },

}

class Auth extends React.Component {

    state = {
        isSignedIn: false
    };

    uiConfig = {

        signInFlow: 'popup',
        signInOptions: [
            firebase.auth.EmailAuthProvider.PROVIDER_ID,
            firebase.auth.GoogleAuthProvider.PROVIDER_ID,
            firebase.auth.FacebookAuthProvider.PROVIDER_ID,
            firebase.auth.GithubAuthProvider.PROVIDER_ID,
            firebase.auth.TwitterAuthProvider.PROVIDER_ID,
            firebase.auth.PhoneAuthProvider.PROVIDER_ID,

        ],
        callbacks: {
            signInSuccess: () => false
        }
    };

    componentDidMount() {
        this.unregisterAuthObserver = firebase.auth().onAuthStateChanged(
            (user) => this.setState({ isSignedIn: !!user })
        );
    }

    componentWillUnmount() {
        this.unregisterAuthObserver();
    }

    render() {
        if (!this.state.isSignedIn) {
            return (
                <div className="row pt-5">
                    <div className="col-6 text-center" style={style.welcomeContainer}>
                        <h2 className="font-weight-light">Welcome</h2>
                        <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
                        <div className="row">
                            <div className="col-6" style={style.welcomeCard}>
                                <i className="fab fa-dribbble fa-5x mb-5"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum</p>
                            </div>
                            <div className="col-6" style={style.welcomeCard}>
                                <i className="fab fa-dribbble fa-5x mb-5"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum</p>
                            </div>                        </div>
                        <div className="row">
                            <div className="col-6" style={style.welcomeCard}>
                                <i className="fab fa-dribbble fa-5x mb-5"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum</p>
                            </div>
                            <div className="col-6" style={style.welcomeCard}>
                                <i className="fab fa-dribbble fa-5x mb-5"></i>
                                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-6 text-center" style={style.connectContainer}>
                        <h2 className="font-weight-light">Sign in or Sign up</h2>
                        <p className="lead constrain-width mt-4">Lorem ipsum dolor sit amet, consectetur adipiscing elit. At aliquam rhoncus donec magna turpis, dictum sit amet tellus at, commodo elementum sapien.</p>
                        <StyledFirebaseAuth uiConfig={this.uiConfig} firebaseAuth={firebase.auth()} />
                    </div>
                </div>
            );
        }
        return (
            <div className="pt-5">
                <p>Welcome {firebase.auth().currentUser.displayName}! You are now signed-in!</p>
                <a onClick={() => firebase.auth().signOut()}>Sign-out</a>
            </div>
        );
    }
}

export default Auth