import React from 'react';

import PropTypes from 'prop-types';

import Card from '../card/card.component';

import './card-list.styles.css';

const CardList = ({ monsters }) => (
  <div className="card-list">
    {monsters.map(monster => (
      <Card key={monster.id} monster={monster} />
    ))}
  </div>
);

CardList.propTypes = {
  monsters: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
    }),
  ).isRequired,
};

export default CardList;
