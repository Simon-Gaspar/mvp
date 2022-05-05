import React from 'react';
import './RestaurantList.css';

import { useStore } from '../../store.js';
import RestaurantTile from '../RestaurantTile/RestaurantTile.jsx';
import Error from '../Error/Error.jsx';

function RestaurantList() {
  const restaurants = useStore((state) => state.filteredResults);
  const error = useStore((state) => state.isError);
  if (error) {
    return <Error />;
  }
  return (
    <div className="restaurant-list">
      {restaurants.map((restaurant, index) => (
        <RestaurantTile restaurant={restaurant} key={index + 1000} />
      ))}
    </div>
  );
}

export default RestaurantList;

// {/* <div>{data && data}</div> */}
// {/* <div>{isLoading && 'Loading...'}</div>
// <div>{error && error}</div> */}
