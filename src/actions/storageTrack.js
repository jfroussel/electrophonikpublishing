
import firebase from 'firebase'

export const GET_STORAGE_TRACK = 'GET_STORAGE_TRACK'

export const getStorageTrack = (author, filename) => {
    const ref = firebase.storage().ref(author + '/' + filename)
    console.log('reference : ',ref)
    return (dispatch) => {
        ref.getDownloadURL().then((url) => {
            dispatch({ type: GET_STORAGE_TRACK, payload: url })
        })
    };
}