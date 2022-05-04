import React from 'react';
import StarRating from './StarRating/StarRating.jsx';
import PriceRating from './PriceRating/PriceRating.jsx';

import './RestaurantTile.css';

function RestaurantTile(restaurant) {
  const {
    name = 'Judice Inn (Default)',
    price_level = 1,
    rating = 5,
    user_ratings_total = 1000,
    opening_hours = { open_now: true },
    vicinity = 'Lafayette, LA',
  } = restaurant;
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

      <div className="tile location">Location: &nbsp; {vicinity}</div>
    </div>
  );
}

export default RestaurantTile;
