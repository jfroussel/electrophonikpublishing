import React, { Component } from 'react'
import { connect } from 'react-redux'
import { getCountries } from '../actions'
import { bindActionCreators } from 'redux'

class SearchDevelopers extends Component {

    componentWillMount() {
        this.props.getCountries()
    }

    getCountry(e) {
        console.log(e.target.value)
    }

    countriesList() {
        const { countries } = this.props
    
        if(countries) {
            return (
                <select className="form-control form-control-lg pb-5"  onChange={this.getCountry}>
                <option>select a country ...</option>
                    {
                        countries.map((country) => {
                           return <option key={ country } value={ country}>{ country}</option>
                        })
                    }
                </select>
            )
        } else {
            return (
                console.log('errors')
            )
        }
    }
    
    render() {
        return (
            <div>{ this.countriesList()}</div>
        )
    }
}

const mapStateToProps = (state) => {
    return {
        countries: state.countries,
        
    }
}

const mapDispatchToProps = (dispatch) => ({
    ...bindActionCreators({ getCountries }, dispatch),
})

export default connect(mapStateToProps, mapDispatchToProps)(SearchDevelopers)