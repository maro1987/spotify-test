import createAction from '../../utils/redux/create-action';
import { getSearchResults, getMe } from '../../services/spotify-service';

export const SpotifyActionTypes = {
  SEARCH_RESULTS_LOADED: 'SEARCH_RESULTS_LOADED',
  USER_INFO_LOADED: 'USER_INFO_LOADED',
  SPOTIFY_RESPONSE_ERROR: 'SPOTIFY_RESPONSE_ERROR',
  SET_SPOTIFY_TOKENS: 'SET_SPOTIFY_TOKENS'
};

function searchResultsLoaded(data) {
  return createAction(SpotifyActionTypes.SEARCH_RESULTS_LOADED, data);
}

function spotifyResponseError(error) {
  return createAction(SpotifyActionTypes.SPOTIFY_RESPONSE_ERROR, error);
}

function userInfoLoaded(data) {
  return createAction(SpotifyActionTypes.USER_INFO_LOADED, data);
}

export function loadSearchResults(searchText, service = getSearchResults) {
  return service(searchText).then(searchResultsLoaded).catch(spotifyResponseError);
}

export function getUserInfo(accessToken, service = getMe) {
  return service(accessToken).then(userInfoLoaded).catch(spotifyResponseError);
}

export function setSpotifyTokens({ accessToken, refreshToken }) {
  return createAction(SpotifyActionTypes.SET_SPOTIFY_TOKENS, { accessToken, refreshToken });
}
