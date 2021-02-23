import React from 'react';

import PropTypes from 'prop-types';

import './search-box.styles.css';

const SearchBox = ({ onSearchChange }) => (
  <input
    className="search-box"
    type="search"
    placeholder="search monsters"
    onChange={onSearchChange}
  />
);

SearchBox.propTypes = {
  onSearchChange: PropTypes.func.isRequired,
};

export default SearchBox;
