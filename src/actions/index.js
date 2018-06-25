import axios from 'axios'

/* countries actions */
export const GET_COUNTRIES = 'GET_COUNTRIES'
export const ERROR_GET_COUNTRIES = 'ERROR_GET_COUNTRIES'

export const getCountries = () => {
    const url = 'http://api.population.io:80/1.0/countries'
    return (dispatch) => {
        axios(url).then((response) => {
            dispatch({ type: GET_COUNTRIES, payload: response.data.countries })
        }).catch((error) => {
            dispatch({ type: ERROR_GET_COUNTRIES, errors: error.response.data.detail })
        })
    }
}

/* Github actions */
export const GITHUB_GET_ALL = 'GITHUB_GET_ALL'
export const ERROR_GITHUB_GET_ALL = 'ERROR_GITHUB_GET_ALL'

export const getDevelopers = (country) => {
    country = 'France'
    const url = 'https://api.github.com/search/users?q=language:reactjs+location:' + country
    const userURL = 'https://api.github.com/users/'
    const users = []

    return (dispatch) => {
        axios(url).then((response) => {
            response.data.items.map((item) => {
                return axios(userURL + item.login).then((response) => {
                    users.push(response.data)
                })
            })
            dispatch({ type: GITHUB_GET_ALL, payload: users })
        }).catch((error) => {
            dispatch({ type: ERROR_GITHUB_GET_ALL, errors: 'errors' })
        })
    }
}

export const GITHUB_SELECTED = 'GITHUB_SELECTED'
export const githubSelected = (user) => {
    return {
        type: GITHUB_SELECTED,
        payload: user
    }
}




