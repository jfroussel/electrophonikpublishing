import React, { Component } from 'react';
import firebase from 'firebase'

class Profile extends Component {

    constructor(props) {

        super(props)

        this.state = {
            isLogged: false,
            user: [],
            id: '',
            displayName: '',
            photoURL: null,
            defaultPhoto: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTPB41ZQKuFDiWdacaKqDJFj_uZ1KmUJzz_J4thYhgpGAVbMP08',
            email: '',
            city: '',
            country: '',
            item: []
        }

        this.handleChange = this
            .handleChange
            .bind(this)

        this.handleSubmit = this
            .handleSubmit
            .bind(this)
    }

    componentDidMount() {
        const user = firebase.auth().currentUser;
        if (user) {
            this.setState(
                {
                    isLogged: true,
                    user: user,
                    id: user.uid,
                    email: user.email,
                    displayName: user.displayName,
                    city: '',
                    country: '',
                }
            )
        } else {
            this.setState({ isLogged: false })
        }
    }


    handleChange(e) {
        this.setState({
            [e.target.name]: e.target.value
        });
    }

    handleSubmit(e) {
        e.preventDefault();
        const itemsRef = firebase
            .database()
            .ref('members/' + this.state.id)
        const item = {
            displayName: this.state.displayName,
            photoURL: this.state.photoURL,
            email: this.state.email,
            city: this.state.city,
            country: this.state.country,

        }
        itemsRef.set(item);
        this.setState({
            displayName: this.setState.displayName,
            photoURL: this.setState.photoURL,
            email: this.setState.email,
            city: this.setState.city,
            country: this.setState.country,
        });
    }

    render() {
        const user = this.state.user

        return (
            <div className="card">
                <div className="card-body">
                    <h5 className="card-title text-center">Member Profile</h5>
                    <img className="rounded-circle" src={user.photoURL ? user.photoURL : this.state.defaultPhoto} alt="" width="100px" />

                    <form onSubmit={this.handleSubmit}>
                        <div className="form-group row">
                            <label htmlFor="id" className="col-sm-2 col-form-label">User ID</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="id"
                                    className="form-control"
                                    disabled
                                    placeholder="userId"
                                    value={this.state.id} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Display name</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="displayName"
                                    className="form-control"
                                    placeholder="display name"
                                    onChange={this.handleChange}
                                    value={user.displayName ? user.displayName : this.state.displayName} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Photo URL</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="photoURL"
                                    className="form-control"
                                    placeholder="photo URL"
                                    onChange={this.handleChange}
                                    value={user.photoURL ? user.photoURL : this.state.defaultPhoto} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Email</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="email"
                                    className="form-control"
                                    placeholder="Email"
                                    onChange={this.handleChange}
                                    value={user.email ? user.email : this.state.email} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">City</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="city"
                                    className="form-control"
                                    placeholder="City"
                                    onChange={this.handleChange}
                                    value={this.state.city} />
                            </div>
                        </div>
                        <div className="form-group row">
                            <label className="col-sm-2 col-form-label">Country</label>
                            <div className="col-sm-10">
                                <input
                                    type="text"
                                    name="country"
                                    className="form-control"
                                    placeholder="Country"
                                    onChange={this.handleChange}
                                    value={this.state.country} />
                            </div>
                        </div>
                        <button className="btn btn-info">Update profile</button>
                    </form>
                </div>
            </div>
        )
    }
}


export default Profile