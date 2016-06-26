import { combineReducers } from 'redux';
import { routerReducer } from 'react-router-redux';
import app from './app-action-reducers';
import spotify from './spotify-action-reducers';
import playlist from './playlist-action-reducers';
import playback from './playback-action-reducers';

const reducers = combineReducers({
  app,
  spotify,
  playlist,
  playback,
  routing: routerReducer
});

export default reducers;
