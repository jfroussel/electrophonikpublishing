import { GITHUB_GET_ALL, ERROR_GITHUB_GET_ALL } from '../actions'

export default (state=[], action) => {
    switch(action.type) {
        case GITHUB_GET_ALL :
            return action.payload
        case ERROR_GITHUB_GET_ALL :
            return action.errors
        default :
            return state
    }  
}


