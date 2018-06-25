import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getDevelopers } from '../actions'
import { bindActionCreators } from 'redux'
import SearchDevelopers from './SearchDevelopers'

class DevelopersList extends Component {

    componentWillMount() {
        this.props.getDevelopers()
        console.log('component will mount : ',this.props)
    }
    
    developersList() {
        const { devs } = this.props
        const defaultBio = 'no bio in github profile...'
        const style = {width: '18rem'}
        if (devs) {
            return (
                <div className="row">
                    {
                        devs.map((dev) => {
                            return (
                                <div className="card pr-2" style={style} key={dev.login}>
                                    <div className="card-body">
                                        <span key={dev.login} className="pr-2 pb-2"><img src={dev.avatar_url} alt={dev.login} width="80px" className="rounded-circle" /></span>
                                        <h5 className="card-title">{dev.name}</h5>
                                        <p className="card-text">{dev.bio ? dev.bio : defaultBio}</p>
                                        <a href={dev.html_url} className="btn btn-primary">Github link</a>
                                    </div>
                                </div>
                            )
                        }) 
                    }
                </div>
            )
        } else {
            return <div>no github developers found...</div>
        }
    }

    render() {
        return (
            <div>
                <div className="container pb-5">
                    <SearchDevelopers />
                </div>
                <div className="container">
                   { this.developersList()}
                </div>
            </div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        devs: state.developers,
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ getDevelopers }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(DevelopersList)