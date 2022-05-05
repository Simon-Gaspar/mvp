import React from 'react';
import StarRating from '../StarRating/StarRating.jsx';
import PriceRating from '../PriceRating/PriceRating.jsx';

import './RestaurantTile.css';

function RestaurantTile({ restaurant }) {
  const { name, price_level, rating, user_ratings_total, opening_hours } = restaurant;
  const open = opening_hours.open_now ? 'Yes' : 'No';

  return (
    <div className="restaurant-tile">
      <h2> {name} </h2>

      <div className="tile star-rating">
        Rating: &nbsp;
        <StarRating rating={rating} />
      </div>

      <div className="tile reviews">Reviews: &nbsp;{user_ratings_total}</div>

      <div className="tile price-level star-rating">
        Price: &nbsp;
        <PriceRating rating={price_level} />
      </div>

      <div className="tile open-now">Open Now: &nbsp; {open}</div>
    </div>
  );
}

export default RestaurantTile;
