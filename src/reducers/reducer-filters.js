const filtersReducerDefaultState = {
    genres: '',
    moods: '',
    artists: '',
    instruments: '',
    bpm: '',
    lenght: '',

};

export default (state = filtersReducerDefaultState, action) => {
    switch (action.type) {
        case 'FILTER_GENRES':
            return [
                {
                    ...state,
                    genres: action.genres
                }, ...state
            ]

        case 'FILTER_MOODS':
            return {
                ...state,
                moods: action.moods
            };
        case 'FILTER_ARTISTS':
            return {
                ...state,
                artists: action.artists
            };
        case 'FILTER_INSTRUMENTS':
            return {
                ...state,
                instruments: action.instruments
            };
        case 'FILTER_BPM':
            return {
                ...state,
                bpm: action.bpm
            };
        case 'FILTER_LENGHT':
            return {
                ...state,
                lenght: action.lenght
            };

        case 'CLEAR':
            return {
                ...state,
                genres: action.defaultFilter.genres,
                moods: action.defaultFilter.moods,
                artists: action.defaultFilter.artists,
                instruments: action.defaultFilter.instruments,
                bpm: action.defaultFilter.bpm,
                lenght: action.defaultFilter.lenght,

            };
        default:
            return state;
    }
}