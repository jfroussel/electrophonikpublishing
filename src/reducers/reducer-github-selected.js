import {GITHUB_SELECTED} from '../actions'

export default function(state = null, action) {
    switch (action.type) {
        case GITHUB_SELECTED:
            return action.payload
            
        default :
        return state
    }
}