import { ARTISTS_FETCH_REQUEST, ARTISTS_FETCH_SUCCESS, ARTISTS_FETCH_FAILURE, ARTIST_FETCH_REQUEST, ARTIST_FETCH_SUCCESS, ARTIST_FETCH_FAILURE, ARTIST_ALBUMS_FETCH_REQUEST, ARTIST_ALBUMS_FETCH_SUCCESS, ARTIST_ALBUMS_FETCH_FAILURE, ARTIST_TRACKS_FETCH_REQUEST, ARTIST_TRACKS_FETCH_SUCCESS, ARTIST_TRACKS_FETCH_FAILURE, } from "./actionsTypes";
import axios from "../../axiosBase";

export const artistsFetchRequest = () => ({ type: ARTISTS_FETCH_REQUEST });
export const artistsFetchSuccess = data => ({ type: ARTISTS_FETCH_SUCCESS, data });
export const artistsFetchFailure = error => ({ type: ARTISTS_FETCH_FAILURE, error });

export const artistFetchRequest = () => ({ type: ARTIST_FETCH_REQUEST });
export const artistFetchSuccess = data => ({ type: ARTIST_FETCH_SUCCESS, data });
export const artistFetchFailure = error => ({ type: ARTIST_FETCH_FAILURE, error });

export const artistAlbumsFetchRequest = () => ({ type: ARTIST_ALBUMS_FETCH_REQUEST });
export const artistAlbumsFetchSuccess = data => ({ type: ARTIST_ALBUMS_FETCH_SUCCESS, data });
export const artistAlbumsFetchFailure = error => ({ type: ARTIST_ALBUMS_FETCH_FAILURE, error });

export const artistTracksFetchRequest = () => ({ type: ARTIST_TRACKS_FETCH_REQUEST });
export const artistTracksFetchSuccess = data => ({ type: ARTIST_TRACKS_FETCH_SUCCESS, data });
export const artistTracksFetchFailure = error => ({ type: ARTIST_TRACKS_FETCH_FAILURE, error });

export const fetchArtists = () => {
  return async dispatch => {
    try {
      dispatch(artistsFetchRequest());
      const response = await axios.get("/artists");
      dispatch(artistsFetchSuccess(response.data));
    } catch (e) {
      dispatch(artistsFetchFailure(e));
    }
  };
};

export const fetchArtist = (id) => {
  return async dispatch => {
    try {
      dispatch(artistFetchRequest());
      const response = await axios.get(`/artists/${id}`);
      dispatch(artistFetchSuccess(response.data));
    } catch (e) {
      dispatch(artistFetchFailure(e));
    }
  };
};

export const fetchArtistAlbums = artistId => {
  return async dispatch => {
    try {
      dispatch(artistAlbumsFetchRequest());
      const response = await axios.get(`/albums/?artist=${artistId}`);
      dispatch(artistAlbumsFetchSuccess(response.data));
    } catch (e) {
      dispatch(artistAlbumsFetchFailure(e));
    }
  };
};

export const fetchArtistTracks = artistId => {
  return async dispatch => {
    try {
      dispatch(artistTracksFetchRequest());
      const response = await axios.get(`/tracks/?artist=${artistId}`);
      dispatch(artistTracksFetchSuccess(response.data));
    } catch (e) {
      dispatch(artistTracksFetchFailure(e));
    }
  };
};

// export const createNews = data => {
//   return async dispatch => {
//     try {
//       dispatch(newsFetchRequest());
//       await axios.post("/news", data);
//     } catch (e) {
//       dispatch(newsFetchFailure(e));
//     }
//   };
// };

// export const deleteNews = id => {
//   return async dispatch => {
//     try {
//       await axios.delete(`/news/${id}`);
//       dispatch(fetchNews());
//     } catch (e) {
//       dispatch(newsDeleteFailure(e));
//     }
//   };
// };
