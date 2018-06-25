import React from 'react'
import { auth } from '../../firebase'

const PublicNavigation = () =>
    <div className="navbar-nav">
        <a className="nav-item nav-link active " href="#home">Home <span className="sr-only">(current)</span></a>
        <a className="nav-item nav-link nav-item-hover " href="#features">Features</a>
        <a className="nav-item nav-link nav-item-hover " href="#developers">Developers</a>
        <a className="nav-item nav-link nav-item-hover " href="#works">Works</a>
        <a className="nav-item nav-link nav-item-hover " href="#about">About</a>
        <a className="nav-item nav-link nav-item-hover" href="#contact">Contact</a>
        <a className="nav-item nav-link nav-item-hover" href="#language">FR</a>
    </div>


const PrivateNavigation = () =>
    <div className="navbar-nav">
        <a className="nav-item nav-link"> <em>you are now connected</em><span className="text-info">  {auth.currentUser().email}</span></a>
    </div>

export {
    PrivateNavigation,
    PublicNavigation
}
