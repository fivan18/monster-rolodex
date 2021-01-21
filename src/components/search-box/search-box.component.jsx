import React from 'react';

import './search-box.styles.css';

export const SearchBox = props => {
    return (
        <input
            className="search-box"
            type="search"
            placeholder="search monsters"
            onChange={props.onSearchChange}
         />
    );
}