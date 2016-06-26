import React, { Component, PropTypes } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux';
import SearchAutocompleteComponent from '../../components/search-autocomplete/search-autocomplete-component';
import * as PlaylistActions from '../../actions/playlist/playlist-actions';
import * as SpotifyActions from '../../actions/spotify/spotify-actions';

export class SearchContainer extends Component {
  static propTypes = {
    loadSearchResults: PropTypes.func,
    searchResults: PropTypes.array,
    updatePlaylistQueue: PropTypes.func,
    playlistQueueItems: PropTypes.array
  };

  constructor(props) {
    super(props);
  }

  handleAutocompleteClick = (item) => {
    const items = [...this.props.playlistQueueItems, item];
    this.props.updatePlaylistQueue(items);
  };

  render() {
    const { searchResults, loadSearchResults } = this.props;
    return (
      <section className="search-container">
        <SearchAutocompleteComponent
          searchInputHandler={loadSearchResults}
          searchResults={searchResults}
          autocompleteClickHandler={this.handleAutocompleteClick}
        />
      </section>
    );
  }
}

export default connect(
  state => Object.assign(
    {},
    state.spotify.toJS(),
    state.playlist.toJS()
  ),
  dispatch => (Object.assign(
    {},
    bindActionCreators(PlaylistActions, dispatch),
    bindActionCreators(SpotifyActions, dispatch),
  ))
)(SearchContainer);
