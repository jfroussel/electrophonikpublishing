export const filterGenres = (genres = []) => ({
    type: 'FILTER_GENRES',
    genres
});


export const filterMoods = (moods = []) => ({
    type: 'FILTER_MOODS',
    moods
});

export const filterArtists = (artists = []) => ({
    type: 'FILTER_ARTISTS',
    artists
});

export const filterInstruments = (instruments = []) => ({
    type: 'FILTER_INSTRUMENTS',
    instruments
});

export const filterBpm = (bpm = []) => ({
    type: 'FILTER_BPM',
    bpm
});

export const filterLength = (length = []) => ({
    type: 'FILTER_LENGTH',
    length
});