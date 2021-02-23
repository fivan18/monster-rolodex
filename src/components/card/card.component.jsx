import React from 'react';

import PropTypes from 'prop-types';

import './card.styles.css';

const Card = ({ monster }) => (
  <div className="card-container">
    <img
      alt="monster"
      src={`https://robohash.org/${monster.id}?set=set2&size=180x180`}
    />
    <h2>
      {' '}
      {monster.name}
      {' '}
    </h2>
    <p>
      {' '}
      {monster.email}
      {' '}
    </p>
  </div>
);

Card.propTypes = {
  monster: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    email: PropTypes.string,
  }).isRequired,
};

export default Card;
