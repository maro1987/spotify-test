import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { SpotifyActionTypes } from '../actions/spotify/spotify-actions';

const initialState = Immutable.fromJS({
  items: []
});

export default createReducer(initialState, {
  [SpotifyActionTypes.SEARCH_RESULTS_LOADED]: (state, data) => (
    state.set('searchResults', data.tracks.items)
  ),
  [SpotifyActionTypes.SPOTIFY_RESPONSE_ERROR]: (state, error) => (
    state.set('error', error.message)
  ),
  [SpotifyActionTypes.USER_INFO_LOADED]: (state, data) => (
    state.set('userInfo', data)
  ),
  [SpotifyActionTypes.SET_SPOTIFY_TOKENS]: (state, { accessToken, refreshToken }) => (
  state.set('accessToken', accessToken).set('refreshToken', refreshToken)
)
});
