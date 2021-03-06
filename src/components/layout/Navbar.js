import React, { Component } from 'react'
import Cover from './Cover'
import Logo from '../../assets/logo.png'
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';
import firebase from 'firebase/app'
import 'firebase/auth'
import { doSignOut } from '../../firebase/auth'
import AuthPage from './AuthPage'
import MemberHome from './member/MemberHome'
import { PrivateNavigation, PublicNavigation } from './Navigation'

const style = {
    loginIcon: {
        fontSize: 35,
        marginTop: -6
    }
}

class Navbar extends Component {

    constructor(props) {

        super(props);
        this.state = {
            isLogged: false,

        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({ isLogged: true }) : this.setState({ isLogged: false })

        });
    }

    componentWillReceiveProps() {
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({ isLogged: true }) : this.setState({ isLogged: false })

        })
    }



    render() {

        const handleClick = (e) => {
            window.scrollTo(0, 0);
        }

        return (

            <ScrollableAnchor id={'home'}>
                <section className="cover-5">
                    <nav className="navbar navbar-expand-lg navbar-light navbar-custom fixed-top">
                        <div className="container-fluid">
                            <a href="#home" className="navbar-brand pt-2 text-muted">
                                <img src={Logo}  width="200px" alt="" />
                            </a>
                            <button
                                className="navbar-toggler"
                                type="button"
                                data-toggle="collapse"
                                data-target="navbarSupportedContent"
                                aria-controls="navbarSupportedContent"
                                aria-expanded="false"
                                aria-label="Toggle navigation">
                                <span className="navbar-toggler-icon"></span>
                            </button>
                            <div
                                className="collapse navbar-collapse pull-xs-right justify-content-end"
                                id="navbarSupportedContent">
                                <ul className="navbar-nav mt-2">
                                    {!this.state.isLogged ? <PublicNavigation /> : <PrivateNavigation />}

                                    {!this.state.isLogged ?

                                        <li className="nav-item nav-login">
                                            <a
                                                className="nav-link"
                                                href="#home"
                                                data-toggle="collapse"
                                                data-target="#collapse"
                                                aria-expanded="false"
                                                onClick={handleClick}
                                            ><i className="material-icons" style={style.loginIcon}>
                                                    account_circle
                                            </i></a>

                                        </li>

                                        :
                                        null
                                    }
                                    {this.state.isLogged ?
                                        <li className="nav-item dropdown pl-5">
                                            <a className="nav-link dropdown-toggle" href="" id="navbarDropdown" role="button" data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                                <i className="fas fa-user-circle text-info fa-2x avatar"></i>
                                            </a>
                                            <div className="dropdown-menu" aria-labelledby="navbarDropdown">
                                                <a className="dropdown-item" >Documentation</a>
                                                <a className="dropdown-item" >Help center</a>

                                                <div className="dropdown-divider"></div>
                                                <a className="dropdown-item" href="" onClick={doSignOut}>Sign out</a>
                                                <a className="dropdown-item" ><i className="fas fa-shopping-cart"></i></a>

                                            </div>
                                        </li> : null}
                                    <div className="cart-element">
                                        <span className="cart-icon">
                                            <i className="material-icons text-white" style={style.loginIcon}>
                                                shopping_cart
                                            </i>
                                        </span>
                                        <span className="cart-notification">
                                            2
                                        </span>
                                    </div>
                                </ul>
                            </div>
                        </div>
                    </nav>
                    <div className="collapse" id="collapse">
                        <div className="card card-body">
                            {this.state.isLogged ? null : <AuthPage />}
                        </div>
                    </div>
                    <div>
                        {!this.state.isLogged ? <Cover /> : <MemberHome />}
                    </div>
                </section>
            </ScrollableAnchor>
        )
    }
}

export default Navbar
