import { GET_FRUITS} from '../actions/fruits'

export default function(state = [], action) {
    switch(action.type) {
        case GET_FRUITS :
            return action.payload
        default :
            return state
    }
}