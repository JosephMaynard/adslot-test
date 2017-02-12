import React, { Component } from 'react';
import './SearchBox.css';

class SearchBox extends Component {
  render() {
    return (
      <input
        type="text"
        id="SearchBoxInput"
        placeholder="Search Publishers"
        ref={(input) => { this.searchString = input; }}
        onChange={() => this.props.searchText(this.searchString.value)}
      />
    );
  }
}

export default SearchBox; 