import { combineReducers } from 'redux'
import CountriesReducer from './reducer-countries'
import GithubReducer from './reducer-github'
import SoundsReducer from './reducer-sounds'


export default combineReducers({
  countries: CountriesReducer,
  developers: GithubReducer,
  sounds: SoundsReducer,
})