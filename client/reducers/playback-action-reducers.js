import Immutable from 'immutable';
import createReducer from '../utils/redux/create-reducer';
import { PlaylistActionTypes } from '../actions/playlist/playlist-actions';
import { PlaybackActionTypes } from '../actions/playback/playback-actions';

const initialState = Immutable.fromJS({
  playbackUrl: null,
  isInitialized: false,
  isPlaying: false
});

export default createReducer(initialState, {
  [PlaylistActionTypes.PLAYLIST_LOADED]: (state, data) => (
    state.set('playbackUrl', data.length > 0 ? data[0].preview_url : null)
  ),
  [PlaybackActionTypes.PLAYBACK_STARTED]: (state) => (
    state.set('isPlaying', true).set('isInitialized', true)
  ),
  [PlaybackActionTypes.PLAYBACK_PAUSED]: (state) => (
    state.set('isPlaying', false)
  ),
  [PlaybackActionTypes.PLAYBACK_FINISHED]: (state) => (
    state.set('isPlaying', false).set('isInitialized', false)
  )
});
