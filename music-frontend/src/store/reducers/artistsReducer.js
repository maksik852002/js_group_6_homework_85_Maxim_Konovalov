import { ARTISTS_FETCH_REQUEST, ARTISTS_FETCH_SUCCESS, ARTISTS_FETCH_FAILURE, ARTIST_ALBUMS_FETCH_REQUEST, ARTIST_ALBUMS_FETCH_SUCCESS, ARTIST_ALBUMS_FETCH_FAILURE, ARTIST_FETCH_FAILURE, ARTIST_FETCH_SUCCESS, ARTIST_FETCH_REQUEST, ARTIST_TRACKS_FETCH_REQUEST, ARTIST_TRACKS_FETCH_SUCCESS, ARTIST_TRACKS_FETCH_FAILURE } from "../actions/actionsTypes";

const initialState = {
  artists: [],
  artist: [],
  albums: [],
  tracks: [],
  loading: false,
  error: null,
  show: false
};

const artistsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ARTISTS_FETCH_REQUEST:
      return { ...state, loading: true };
    case ARTISTS_FETCH_SUCCESS:
      return { ...state, artists: action.data, loading: false };
    case ARTISTS_FETCH_FAILURE:
    return {...state, error: action.error, show: true, loading: false };
    case ARTIST_FETCH_REQUEST:
      return { ...state, loading: true };
    case ARTIST_FETCH_SUCCESS:
      return { ...state, artist: action.data, loading: false };
    case ARTIST_FETCH_FAILURE:
      return {...state, error: action.error, show: true, loading: false };
    case ARTIST_ALBUMS_FETCH_REQUEST:
      return { ...state, loading: true };
    case ARTIST_ALBUMS_FETCH_SUCCESS:
      return { ...state, albums: action.data, loading: false };
    case ARTIST_ALBUMS_FETCH_FAILURE:
      return {...state, error: action.error.toString(), show: true, loading: false };
    case ARTIST_TRACKS_FETCH_REQUEST:
      return { ...state, loading: true };
    case ARTIST_TRACKS_FETCH_SUCCESS:
      return { ...state, tracks: action.data, loading: false };
    case ARTIST_TRACKS_FETCH_FAILURE:
      return {...state, error: action.error.toString(), show: true, loading: false };
    default:
      return state;
  }
};

export default artistsReducer;
