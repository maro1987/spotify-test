import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import PlaylistQueueComponent from '../../components/playlist-queue/playlist-queue-component';
import * as PlaylistActions from '../../actions/playlist/playlist-actions';

export class HomeContainer extends Component {
  static propTypes = {
    loadSearchResults: PropTypes.func,
    searchResults: PropTypes.array,
    loadPlaylistQueue: PropTypes.func,
    updatePlaylistQueue: PropTypes.func,
    playlistQueueItems: PropTypes.array,
    isInitialized: PropTypes.bool,
    userInfo: PropTypes.object
  };

  constructor(props) {
    super(props);
  }

  componentWillMount() {
    this.props.loadPlaylistQueue(this);
  }

  handleDownVoteClick = (id) => {
    const items = this.props.playlistQueueItems;
    items.map((item) => {
      if (item.id === id) {
        if (item.hasOwnProperty('downvotes')) {
          item.downvotes.push(this.props.userInfo.id);
        } else {
          item.downvotes = [this.props.userInfo.id];
        }
      }
    });
    this.props.updatePlaylistQueue(items, this.props.isInitialized);
  };

  handleUpVoteClick = (id) => {
    const items = this.props.playlistQueueItems;
    items.map((item) => {
      if (item.id === id) {
        if (item.hasOwnProperty('upvotes')) {
          item.upvotes.push(this.props.userInfo.id);
        } else {
          item.upvotes = [this.props.userInfo.id];
        }
      }
    });
    this.props.updatePlaylistQueue(items, this.props.isInitialized);
  };

  render() {
    return (
      <section className="playlist-container">
        <PlaylistQueueComponent
          items={this.props.playlistQueueItems}
          downVoteClickHandler={this.handleDownVoteClick}
          upVoteClickHandler={this.handleUpVoteClick}
          isPlaybackInitialized={this.props.isInitialized}
          isPlaying={this.props.isPlaying}
        />
      </section>
    );
  }
}

export default connect(
  state => Object.assign(
    {},
    state.spotify.toJS(),
    state.playlist.toJS(),
    state.playback.toJS()
  ),
  dispatch => (Object.assign(
    {},
    bindActionCreators(PlaylistActions, dispatch)
  ))
)(HomeContainer);
