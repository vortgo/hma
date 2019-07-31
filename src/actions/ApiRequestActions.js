import {API_SEARCH_COMPLETE, API_SEARCH_START, API_SEARCH_ERROR} from "./ActionTypes";
import {API_UPCOMING_ALBUMS_START, API_UPCOMING_ALBUMS_ERROR, API_UPCOMING_ALBUMS_COMPLETE} from "../actions/ActionTypes";
import {API_LATEST_BANDS_UPDATE_START, API_LATEST_BANDS_UPDATE_ERROR, API_LATEST_BANDS_UPDATE_COMPLETE} from "../actions/ActionTypes";
import {API_ALBUM_START, API_ALBUM_ERROR, API_ALBUM_COMPLETE} from "../actions/ActionTypes";
import {API_ALBUM_SONGS_START, API_ALBUM_SONGS_ERROR, API_ALBUM_SONGS_COMPLETE} from "../actions/ActionTypes";
import {API_BAND_START, API_BAND_ERROR, API_BAND_COMPLETE} from "../actions/ActionTypes";
import {API_BAND_ALBUMS_START, API_BAND_ALBUMS_ERROR, API_BAND_ALBUMS_COMPLETE} from "../actions/ActionTypes";


import Api from "../network/v1/Api"

const apiSearchStart = () => ({
    type: API_SEARCH_START
});

const apiSearchError = (error) => ({
    type: API_SEARCH_ERROR,
    error: error
});

const apiSearchComplete = (data) => ({
    type: API_SEARCH_COMPLETE,
    data: data
});

export const callApiSearchRequest = () => {
    return dispatch => {
        dispatch(apiSearchStart());
        Api.search('')
            .then(response => {
                dispatch(apiSearchComplete(response.data))
            })
            .catch(error => {
                dispatch(apiSearchError(error))
            });
    }
};

const apiUpcomingAlbumsStart = () => ({
    type: API_UPCOMING_ALBUMS_START
});

const apiUpcomingAlbumsError = (error) => ({
    type: API_UPCOMING_ALBUMS_ERROR,
    error: error
});

const apiUpcomingAlbumsComplete = (data) => ({
    type: API_UPCOMING_ALBUMS_COMPLETE,
    data: data
});

export const callApiUpcomingAlbumsRequest = () => {
    return dispatch => {
        dispatch(apiUpcomingAlbumsStart());
        Api.upcomingAlbums()
            .then(response => {
                dispatch(apiUpcomingAlbumsComplete(response.data))
            })
            .catch(error => {
                dispatch(apiUpcomingAlbumsError(error))
            });
    }
};

const apiLatestBandsUpdateStart = () => ({
    type: API_LATEST_BANDS_UPDATE_START
});

const apiLatestBandsUpdateError = (error) => ({
    type: API_LATEST_BANDS_UPDATE_ERROR,
    error: error
});

const apiLatestBandsUpdateComplete = (data) => ({
    type: API_LATEST_BANDS_UPDATE_COMPLETE,
    data: data
});

export const callApiLatestBandsUpdateRequest = () => {
    return dispatch => {
        dispatch(apiLatestBandsUpdateStart());
        Api.latestBandsUpdate()
            .then(response => {
                dispatch(apiLatestBandsUpdateComplete(response.data))
            })
            .catch(error => {
                dispatch(apiLatestBandsUpdateError(error))
            });
    }
};

const apiAlbumStart = () => ({
    type: API_ALBUM_START
});

const apiAlbumError = (error) => ({
    type: API_ALBUM_ERROR,
    error: error
});

const apiAlbumComplete = (data) => ({
    type: API_ALBUM_COMPLETE,
    data: data
});

export const callApiAlbumRequest = (albumId) => {
    return dispatch => {
        dispatch(apiAlbumStart());
        Api.album(albumId)
            .then(response => {
                dispatch(apiAlbumComplete(response.data))
            })
            .catch(error => {
                dispatch(apiAlbumError(error))
            });
    }
};

const apiAlbumSongsStart = () => ({
    type: API_ALBUM_SONGS_START
});

const apiAlbumSongsError = (error) => ({
    type: API_ALBUM_SONGS_ERROR,
    error: error
});

const apiAlbumSongsComplete = (data) => ({
    type: API_ALBUM_SONGS_COMPLETE,
    data: data
});

export const callApiAlbumSongsRequest = (albumId) => {
    return dispatch => {
        dispatch(apiAlbumSongsStart());
        Api.albumSongs(albumId)
            .then(response => {
                dispatch(apiAlbumSongsComplete(response.data))
            })
            .catch(error => {
                dispatch(apiAlbumSongsError(error))
            });
    }
};

const apiBandStart = () => ({
    type: API_BAND_START
});

const apiBandError = (error) => ({
    type: API_BAND_ERROR,
    error: error
});

const apiBandComplete = (data) => ({
    type: API_BAND_COMPLETE,
    data: data
});

export const callApiBandRequest = (bandId) => {
    return dispatch => {
        dispatch(apiBandStart());
        Api.band(bandId)
            .then(response => {
                console.log(response.data);
                dispatch(apiBandComplete(response.data))
            })
            .catch(error => {
                dispatch(apiBandError(error))
            });
    }
};

const apiBandAlbumsStart = () => ({
    type: API_BAND_ALBUMS_START
});

const apiBandAlbumsError = (error) => ({
    type: API_BAND_ALBUMS_ERROR,
    error: error
});

const apiBandAlbumsComplete = (data) => ({
    type: API_BAND_ALBUMS_COMPLETE,
    data: data
});

export const callApiBandAlbumsRequest = (bandId) => {
    return dispatch => {
        dispatch(apiBandAlbumsStart());
        Api.bandAlbums(bandId)
            .then(response => {
                dispatch(apiBandAlbumsComplete(response.data))
            })
            .catch(error => {
                dispatch(apiBandAlbumsError(error))
            });
    }
};