import { combineReducers } from 'redux'
import SoundsReducer from './reducer-sounds'
import StorageTrack from './reducer-storage-track'
import Filters from './reducer-filters'


export default combineReducers({
  sounds: SoundsReducer,
  storageTrack : StorageTrack,
  filters: Filters,
})