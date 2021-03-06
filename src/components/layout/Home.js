import React, {Component} from 'react'
import Navbar from './Navbar'
import Features from './Features'
import Footer from './Footer'
import Contact from './Contact'
import About from './About'
import Projects from './Projects'
import firebase from 'firebase'
import 'firebase/auth'
import Catalog from '../../containers/Catalog'

class Home extends Component {

    constructor(props) {
        super(props);
        this.state = {
            isLogged: false
        }
    }

    componentWillMount() {
        firebase.auth().onAuthStateChanged((user) => {
            user ? this.setState({isLogged: true}) : this.setState({isLogged: false})
            
        });
    }

    render() {

        return (
            <div>
                <Navbar />
                {!this.state.isLogged &&
                <div>
                    <Features />
                    <Catalog />
                    <Projects />
                    <About />
                    <Contact />
                    
                    <Footer />
                </div>
                }
            </div>
        )
    }
}

export default Home;