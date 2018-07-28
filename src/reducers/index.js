import { combineReducers } from 'redux'
import SoundsReducer from './reducer-sounds'
import FruitsReducer from './reducer-fruits'
import StorageTrack from './reducer-storage-track'


export default combineReducers({
  sounds: SoundsReducer,
  fruits: FruitsReducer,
  storageTrack : StorageTrack,
})