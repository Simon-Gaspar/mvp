import React from 'react';
import Star from '../Star/Star.jsx';
import './StarRating.css';

function StarRating({ rating }) {
  return (
    <span>
      {[1, 2, 3, 4, 5].map((value) => (
        <Star key={value} position={value} rating={rating} character={'★'} />
      ))}
    </span>
  );
}
export default StarRating;
