import React, { Component, PropTypes } from 'react';

export default class PlaybackControlsComponent extends Component {
  static propTypes = {
    playbackUrl: PropTypes.string,
    handlePlayClick: PropTypes.func,
    handleAudioEnded: PropTypes.func,
    handlePlaybackPlayClick: PropTypes.func,
    handlePlaybackPauseClick: PropTypes.func,
    playbackFinished: PropTypes.bool
  };

  constructor(props) {
    super(props);

    this.state = {
      autoPlay: false
    };
  }

  componentDidUpdate(prevProps) {
    if (this.props.playbackUrl && this.props.playbackUrl !== prevProps.playbackUrl) {
      if (this.state.autoPlay) {
        this.refs.audioPlayer.play();
      }
    }
  }

  componentWillReceiveProps(nextProps) {
    this.setState({
      autoPlay: nextProps.playbackFinished
    });
  }

  handlePlayClick = () => {
    this.refs.audioPlayer.play();
    this.props.handlePlaybackPlayClick();
    this.setState({
      autoPlay: true
    });
  };

  handlePauseClick = () => {
    this.refs.audioPlayer.pause();
    this.props.handlePlaybackPauseClick();
  };

  handleAudioEnded = () => {
    this.props.handleAudioEnded();
  };

  render() {
    const { playbackUrl } = this.props;
    return (
      <div className="playback-controls-component">
        <audio
          ref="audioPlayer"
          src={playbackUrl}
          onEnded={this.handleAudioEnded}/>
        {playbackUrl &&
        <div>
          <button onClick={this.handlePlayClick}>Play the Audio</button>
          <button onClick={this.handlePauseClick}>Pause the Audio</button>
          <button onClick={this.handleAudioEnded}>Next</button>
        </div>
        }
      </div>
    );
  }
}
