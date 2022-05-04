import React from 'react';
import './Star.css';

const round = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const checkDecimalRating = (decimalRating) => {
  if (decimalRating > 0 && decimalRating <= 0.25) {
    return 'quarter-star';
  }
  if (decimalRating > 0.25 && decimalRating <= 0.5) {
    return 'half-star';
  }
  if (decimalRating > 0.5 && decimalRating <= 0.75) {
    return 'three-quarter-star';
  }
  if (decimalRating > 0.75 && decimalRating <= 1) {
    return 'full-star';
  }
  return 'checkDecimalRating error';
};

const determineStarType = (position, rating) => {
  const positionRating = round(rating - position, 1);

  if (positionRating < -1) {
    return 'zero-star';
  }
  if (positionRating > 0) {
    return 'full-star';
  }
  if (positionRating >= -1 && positionRating < 0) {
    const starType = checkDecimalRating(1 + positionRating);
    return starType;
  }

  return 'unexpected determineStarType Error';
};

function Star({ position, rating, character }) {
  const className = determineStarType(position, rating);

  return <div className={`star ${className}`}>{character}</div>;
}

export default Star;
