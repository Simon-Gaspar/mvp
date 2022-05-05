import React from 'react';
import './RestaurantList.css';

import { useStore } from '../../store.js';
import RestaurantTile from '../RestaurantTile/RestaurantTile.jsx';
import Error from '../Error/Error.jsx';
import EmptyState from '../EmptyState/EmptyState.jsx';

function RestaurantList() {
  const restaurants = useStore((state) => state.filteredResults);
  const error = useStore((state) => state.isError);
  if (error) {
    return <Error />;
  }
  if (restaurants?.length === 0) {
    return <EmptyState />;
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
