import React, { Component } from 'react';
import firebase from 'firebase'

class Home extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isLogged: false,
            user: []
        }
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;

        if (user) {
            this.setState({isLogged: true,user: user})
        } else {
            this.setState({isLogged: false})
        }
    }

    render() {
        const user = this.state.user
        
        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title">Welcome {user.displayName} </h5>
                    <img className="rounded-circle" src={user.photoURL} alt="" width="100px"/>
                    <pre>{JSON.stringify(user,null,3)}</pre>
                    <a href="/" className="btn btn-info">Update</a>    
                </div>
            </div>
        )
    }
}

export default Home