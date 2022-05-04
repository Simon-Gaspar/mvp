import React from 'react';
import './RightColumn.css';
// import axios from 'axios';
// import { useQuery } from 'react-query';

import RestaurantTile from './RestaurantTile.jsx';

function RightColumn() {
  // const { isLoading, error, data } = useQuery('getPlace', () =>
  //   axios.get('/api/getPlace').then((res) => res.data)
  // );

  const ex = {
    name: 'China Dynasty',
    opening_hours: {
      open_now: false,
    },
    price_level: 1,
    rating: 4.2,
    user_ratings_total: 355,
  };

  const data = [ex, ex, ex];

  return (
    <>
      <div className="right-column">
        {/* <div>{data && data}</div> */}
        {/* <div>{isLoading && 'Loading...'}</div>
        <div>{error && error}</div> */}

        {data.map((restaurant, index) => (
          <RestaurantTile restaurant={restaurant} key={index + 1000} />
        ))}
      </div>
    </>
  );
}

export default RightColumn;
