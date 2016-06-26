import createAction from '../../utils/redux/create-action';
import { getPlaylistQueue, postPlaylistQueue } from '../../services/playlist-service';
import adaptPlaylistData from '../../adapters/playlist-adapters';

export const PlaylistActionTypes = {
  PLAYLIST_LOADED: 'PLAYLIST_LOADED',
  PLAYLIST_FAILED_TO_LOAD: 'PLAYLIST_FAILED_TO_LOAD'
};

function playlistLoaded(data) {
  return createAction(PlaylistActionTypes.PLAYLIST_LOADED, data);
}

function playlistFailedToLoaded(error) {
  return playlistLoaded(PlaylistActionTypes.PLAYLIST_FAILED_TO_LOAD, error);
}

export function loadPlaylistQueue(context, service = getPlaylistQueue) {
  return service(context).then(playlistLoaded).catch(playlistFailedToLoaded);
}

export function updatePlaylistQueue(data, isPlaybackInitialized = false, service = postPlaylistQueue) {
  return service(adaptPlaylistData(data, isPlaybackInitialized)).then(playlistLoaded).catch(playlistFailedToLoaded);
}
