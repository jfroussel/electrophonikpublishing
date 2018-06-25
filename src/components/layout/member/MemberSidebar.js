import React, { Component } from 'react'
import { Link } from 'react-router-dom';

class MemberSidebar extends Component {

    constructor(props) {
        super(props);

        this.state = {
            className: 'list-group-item text-muted',
            active: false
        }
    }

    render() {
       
        return (
            <div className="list-group">
                <Link to="/home-profile" className={this.state.className}>Home</Link>
                <Link to="/profile" className={this.state.className}>Profile</Link>
                <Link to="/network" className={this.state.className}>Network</Link>
            </div>
        )
    }
}

export default MemberSidebar