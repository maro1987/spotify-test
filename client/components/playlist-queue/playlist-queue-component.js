import React, { Component, PropTypes } from 'react';
import PlaylistQueueItemComponent from '../playlist-queue-item/playlist-queue-item-component';

export default class PlaylistQueueComponent extends Component {
  static propTypes = {
    items: PropTypes.array,
    downVoteClickHandler: PropTypes.func,
    upVoteClickHandler: PropTypes.func,
    isPlaybackInitialized: PropTypes.bool,
    isPlaying: PropTypes.bool
  };

  renderList() {
    const { items, isPlaybackInitialized, isPlaying } = this.props;
    return (
      <ul>
        {
          items.map((item, index) => (
            <PlaylistQueueItemComponent
              label={item.name}
              imgUrl={item.album.images[2].url}
              artistName={item.artists[0].name}
              votes={item.votes}
              isPlaybackInitialized={isPlaybackInitialized}
              isPlaying={isPlaying}
              index={index}
              downVoteClickHandler={()=>this.props.downVoteClickHandler(item.id)}
              upVoteClickHandler={()=>this.props.upVoteClickHandler(item.id)}
              key={index}/>
          ))
        }
      </ul>
    );
  }

  render() {
    return (
      <section className="playlist-queue-component">
        {this.props.items && this.renderList()}
      </section>
    );
  }
}
