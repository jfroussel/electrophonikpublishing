import { combineReducers } from 'redux'
import CountriesReducer from './reducer-countries'
import GithubReducer from './reducer-github'


export default combineReducers({
  countries: CountriesReducer,
  developers: GithubReducer,
})