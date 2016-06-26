import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlaybackControlsComponent from '../../components/playback-controls/playback-controls-component';
import * as PlaylistActions from '../../actions/playlist/playlist-actions';
import * as PlaybackActions from '../../actions/playback/playback-actions';

export class PlaybackContainer extends Component {
  static propTypes = {
    updatePlaylistQueue: PropTypes.func,
    playlistQueueItems: PropTypes.array,
    playbackUrl: PropTypes.string,
    playbackStarted: PropTypes.func,
    playbackPaused: PropTypes.func,
    playbackFinished: PropTypes.func,
    isPlaying: PropTypes.bool,
    isInitialized: PropTypes.bool
  };

  handleAudioEnded = () => {
    const { playlistQueueItems } = this.props;
    const items = playlistQueueItems.slice(1, playlistQueueItems.length);
    if (items.length === 0) {
      this.setState({
        playbackFinished: true
      });
      this.props.playbackFinished();
    }

    this.props.updatePlaylistQueue(items);
  };

  handlePlaybackPlayClick = () => {
    this.props.playbackStarted();
  };

  handlePlaybackPauseClick = () => {
    this.props.playbackPaused();
  };

  render() {
    return (
      <section className="playback-container">
        <PlaybackControlsComponent
          playbackUrl={this.props.playbackUrl}
          handlePlayClick={this.handlePlayClick}
          handleAudioEnded={this.handleAudioEnded}
          handlePlaybackPlayClick={this.handlePlaybackPlayClick}
          handlePlaybackPlayClick={this.handlePlaybackPlayClick}
          handlePlaybackPauseClick={this.handlePlaybackPauseClick}
          playbackFinished={this.props.isPlaying && this.props.isInitialized}
        />
      </section>
    );
  }
}

export default connect(
  state => Object.assign(
    {},
    state.playlist.toJS(),
    state.playback.toJS()
  ),
  dispatch => (Object.assign(
    {},
    bindActionCreators(PlaylistActions, dispatch),
    bindActionCreators(PlaybackActions, dispatch),
  ))
)(PlaybackContainer);
