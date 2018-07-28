
import firebase from 'firebase'

export const GET_SOUNDS = 'GET_SOUNDS'

export const getSounds = () => {
    
    return (dispatch) => {
        return firebase.database().ref('sounds').once('value').then(snapshot => {
            const sounds = [];

            snapshot.forEach(item => {
                sounds.push({
                    id: item.key,
                    ...item.val()
                });
            });

            dispatch({ type: GET_SOUNDS, payload: sounds })
        });
    };
}