import React from 'react';
import './SearchResult.css';

const SearchResult = props => (
  <div className="SearchResult">
    <a
      href={`http://${props.siteUrl}`}
      target="_blank"
      rel="noopener noreferrer"
    >{props.siteUrl}</a>
    <p>{props.description}</p>
  </div>
);

SearchResult.propTypes = {
  siteUrl: React.PropTypes.string.isRequired,
  description: React.PropTypes.string.isRequired,
};

export default SearchResult;
