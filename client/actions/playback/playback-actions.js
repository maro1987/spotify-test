import createAction from '../../utils/redux/create-action';

export const PlaybackActionTypes = {
  PLAYBACK_STARTED: 'PLAYBACK_STARTED',
  PLAYBACK_PAUSED: 'PLAYBACK_PAUSED',
  PLAYBACK_FINISHED: 'PLAYBACK_FINISHED'
};

export function playbackStarted() {
  return createAction(PlaybackActionTypes.PLAYBACK_STARTED);
}

export function playbackPaused() {
  return createAction(PlaybackActionTypes.PLAYBACK_PAUSED);
}

export function playbackFinished() {
  return createAction(PlaybackActionTypes.PLAYBACK_FINISHED);
}
