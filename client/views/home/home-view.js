import React, { Component, PropTypes } from 'react';
import SearchContainer from '../../containers/search/search-container';
import PlaybackContainer from '../../containers/playback/playback-container';
import PlaylistContainer from '../../containers/playlist/playlist-container';
import * as SpotifyActions from '../../actions/spotify/spotify-actions';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';

export default class HomeView extends Component {
  static propTypes = {
    setSpotifyTokens: PropTypes.func,
    getUserInfo: PropTypes.func
  };

  componentWillMount() {
    const { params } = this.props;
    this.props.setSpotifyTokens(params);
    this.props.getUserInfo(params.accessToken);
  }

  render() {
    return (
      <main className="home-view">
        <SearchContainer/>
        <PlaylistContainer/>
        <PlaybackContainer/>
      </main>
    );
  }
}

export default connect(
  (state) => state,
  (dispatch) => (Object.assign(
    {},
    bindActionCreators(SpotifyActions, dispatch)
  ))
)(HomeView);
