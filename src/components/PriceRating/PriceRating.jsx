import React from 'react';
import Price from '../Price/Price.jsx';
import './PriceRating.css';

function PriceRating({ rating }) {
  return (
    <span>
      {[1, 2, 3, 4].map((value) => (
        <Price key={value} position={value} rating={rating} character={'$'} />
      ))}
    </span>
  );
}
export default PriceRating;
