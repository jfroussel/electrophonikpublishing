import {UPDATE_SOUNDS} from '../actions'

export default (state=[], action) => {
    switch(action.type) {
        case UPDATE_SOUNDS :
            return action.payload
        default :
            return state
    }  
}