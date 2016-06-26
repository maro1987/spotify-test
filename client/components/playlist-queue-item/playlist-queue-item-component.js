import React, { Component, PropTypes } from 'react';
import classNames from 'classnames';

export default class PlaylistQueueItemComponent extends Component {
  static propTypes = {
    label: PropTypes.string,
    imgUrl: PropTypes.string,
    artistName: PropTypes.string,
    votes: PropTypes.number,
    index: PropTypes.number,
    downVoteClickHandler: PropTypes.func,
    upVoteClickHandler: PropTypes.func,
    isPlaybackInitialized: PropTypes.bool,
    isPlaying: PropTypes.bool
  };

  getComponentClassNames() {
    const { isPlaybackInitialized, index } = this.props;
    return classNames({
      'playlist-queue-item-component': true,
      'playback-initialized': isPlaybackInitialized && index === 0
    });
  }

  render() {
    const {
      imgUrl,
      index,
      label,
      isPlaybackInitialized,
      isPlaying
    } = this.props;
    return (
      <li className={this.getComponentClassNames()}>
        <img className="playlist-queue-item-img" src={imgUrl}/>
        <div className="playlist-queue-item-info">
          <h3 className="playlist-queue-item-info-title">{label}</h3>
          <p className="playlist-queue-item-info-artist-name">{this.props.artistName}</p>
          { (index !== 0 || !isPlaybackInitialized) &&
          <div className="playlist-queue-item-buttons">
            <button onClick={this.props.upVoteClickHandler}>upvote</button>
            <button onClick={this.props.downVoteClickHandler}>downvote</button>
          </div>
          }
          {(index === 0 && isPlaying) && <p>Playing...</p> }
          {(index === 0 && !isPlaying && isPlaybackInitialized) && <p>Paused</p> }
        </div>
        <p>{`Votes: ${this.props.votes}`}</p>
      </li>
    );
  }
}
