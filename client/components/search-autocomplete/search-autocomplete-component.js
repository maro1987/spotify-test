import React, { Component, PropTypes } from 'react';
import debounce from 'lodash.debounce';

export default class SearchAutocompleteComponent extends Component {
  static propTypes = {
    searchInputHandler: PropTypes.func,
    autocompleteClickHandler: PropTypes.func
  };

  constructor(props) {
    super(props);

    this.state = {
      showAutocompleteList: true
    };
  }

  componentWillMount() {
    this.debouncedSearchSuggestions = debounce(this.props.searchInputHandler, 500, { leading: true });
  }

  handleSearchInputChange = (event) => {
    const searchTerm = event.target.value;
    if (searchTerm.length > 0) {
      this.setState({
        showAutocompleteList: true
      });
      this.debouncedSearchSuggestions(searchTerm);
    } else {
      this.setState({
        showAutocompleteList: false
      });
    }
  };

  renderAutocompleteList(items) {
    const { autocompleteClickHandler } = this.props;
    return (
      <ul className="search-autocomplete-list">
        {
          items.map((item, index) => (
            <li className="search-autocomplete-list-item"
                key={index}
                onClick={() => autocompleteClickHandler(item)}>
              {item.name}
            </li>
          ))
        }
      </ul>
    );
  }

  render() {
    const { searchResults } = this.props;
    return (
      <div className="search-autocomplete-component">
        <input className="search-autocomplete-input-field"
               placeholder="Search"
               onChange={this.handleSearchInputChange}
        />
        { searchResults && this.state.showAutocompleteList && this.renderAutocompleteList(searchResults)}
      </div>
    );
  }
}
