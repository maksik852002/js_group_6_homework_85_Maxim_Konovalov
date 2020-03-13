import { ALBUMS_FETCH_REQUEST, ALBUMS_FETCH_SUCCESS, ALBUMS_FETCH_FAILURE, ALBUM_TRACKS_FETCH_REQUEST, ALBUM_TRACKS_FETCH_SUCCESS, ALBUM_TRACKS_FETCH_FAILURE, ALBUM_FETCH_REQUEST, ALBUM_FETCH_SUCCESS, ALBUM_FETCH_FAILURE } from "./actionsTypes";
import axios from "../../axiosBase";

export const albumsFetchRequest = () => ({ type: ALBUMS_FETCH_REQUEST });
export const albumsFetchSuccess = data => ({ type: ALBUMS_FETCH_SUCCESS, data });
export const albumsFetchFailure = error => ({ type: ALBUMS_FETCH_FAILURE, error });

export const albumFetchRequest = () => ({ type: ALBUM_FETCH_REQUEST });
export const albumFetchSuccess = data => ({ type: ALBUM_FETCH_SUCCESS, data });
export const albumFetchFailure = error => ({ type: ALBUM_FETCH_FAILURE, error });

export const albumTracksFetchRequest = () => ({ type: ALBUM_TRACKS_FETCH_REQUEST });
export const albumTracksFetchSuccess = data => ({ type: ALBUM_TRACKS_FETCH_SUCCESS, data });
export const albumTracksFetchFailure = error => ({ type: ALBUM_TRACKS_FETCH_FAILURE, error });

export const fetchAlbums = () => {
  return async dispatch => {
    try {
      dispatch(albumsFetchRequest());
      const response = await axios.get("/albums");
      dispatch(albumsFetchSuccess(response.data));
    } catch (e) {
      dispatch(albumsFetchFailure(e));
    }
  };
};

export const fetchAlbum = (id) => {
  return async dispatch => {
    try {
      dispatch(albumFetchRequest());
      const response = await axios.get(`/albums/${id}`);
      dispatch(albumFetchSuccess(response.data));
    } catch (e) {
      dispatch(albumFetchFailure(e));
    }
  };
};


export const fetchAlbumTracks = albumId => {
  return async dispatch => {
    try {
      dispatch(albumTracksFetchRequest());
      const response = await axios.get(`/tracks/?album=${albumId}`);
      dispatch(albumTracksFetchSuccess(response.data));
    } catch (e) {
      dispatch(albumTracksFetchFailure(e));
    }
  };
};