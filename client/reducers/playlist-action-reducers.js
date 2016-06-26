import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { PlaylistActionTypes } from '../actions/playlist/playlist-actions';

const initialState = Immutable.fromJS({
  items: [],
  playlistFinished: true
});

export default createReducer(initialState, {
  [PlaylistActionTypes.PLAYLIST_LOADED]: (state, data) => (
    state.set('playlistQueueItems', data)
  ),
  [PlaylistActionTypes.PLAYLIST_FAILED_TO_LOAD]: (state, error) => (
    state.set('error', error.message)
  )
});
