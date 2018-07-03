import React, { Component } from 'react'
import Cover from './Cover'
import Logo from '../../assets/logo.png'
import ScrollableAnchor from 'react-scrollable-anchor/lib/ScrollableAnchor';
import firebase from 'firebase'
import { doSignOut } from '../../firebase/auth'
import AuthPage from './AuthPage'
import MemberHome from './member/MemberHome'
import { PrivateNavigation, PublicNavigation } from './Navigation'

const style = {
    cartNumber: {
        color: '#189db2',
        marginTop: '0.2em',
        fontSize: '14px'
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
                            <a className="navbar-brand pt-2">
                                <img src={Logo} width="100" alt="logo" />
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
                                <ul className="navbar-nav mt-2 mt-md-0">
                                    {!this.state.isLogged ? <PublicNavigation /> : <PrivateNavigation />}

                                    {!this.state.isLogged ?

                                        <li className="nav-item">
                                            <a
                                                className="nav-link text-info"
                                                href="#home"
                                                data-toggle="collapse"
                                                data-target="#collapse"
                                                aria-expanded="false"
                                                onClick={handleClick}
                                            ><i className="far fa-user fa-1x mr-2 "></i>Login</a>

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
                                                <a className="dropdown-item" ><i class="fas fa-shopping-cart"></i></a>

                                            </div>
                                        </li> : null}
                                    <span class="fa-stack fa-1x pl-5">
                                        <i class="fas fa-shopping-cart fa-2x fa-stack-1x text-white"></i>
                                        <strong class="fa-stack-1x" style={style.cartNumber}>2</strong>
                                    </span>
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
