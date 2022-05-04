import React from 'react';
import './Price.css';

const round = (value, precision) => {
  const multiplier = 10 ** (precision || 0);
  return Math.round(value * multiplier) / multiplier;
};

const checkDecimalRating = (decimalRating) => {
  if (decimalRating > 0 && decimalRating <= 0.25) {
    return 'quarter-price';
  }
  if (decimalRating > 0.25 && decimalRating <= 0.5) {
    return 'half-price';
  }
  if (decimalRating > 0.5 && decimalRating <= 0.75) {
    return 'three-quarter-price';
  }
  if (decimalRating > 0.75 && decimalRating <= 1) {
    return 'full-price';
  }
  return 'checkDecimalRating error';
};

const determinePriceType = (position, rating) => {
  const positionRating = round(rating - position, 1);

  if (positionRating < -1) {
    return 'zero-price';
  }
  if (positionRating > 0) {
    return 'full-price';
  }
  if (positionRating >= -1 && positionRating < 0) {
    const priceType = checkDecimalRating(1 + positionRating);
    return priceType;
  }

  return 'unexpected determinePriceType Error';
};

function Price({ position, rating, character }) {
  const className = determinePriceType(position, rating);

  return <div className={`price ${className}`}>{character}</div>;
}

export default Price;
