import React from 'react';
import './RestaurantList.css';
// import axios from 'axios';
// import { useQuery } from 'react-query';
import { useStore } from '../../store.js';
import RestaurantTile from '../RestaurantTile/RestaurantTile.jsx';

function RestaurantList() {
  const location = useStore((state) => state.location);
  // const { isLoading, error, data } = useQuery('getPlace', () =>
  //   axios.get('/api/getPlace').then((res) => res.data)
  // );

  //   export function MyComponent(props) {
  //     const [myState, setMystate] = useState('initialState')

  //     useEffect(() => {
  //         console.log(myState, '- Has changed')
  //     },[myState]) // <-- here put the parameter to listen
  // }

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
      <div className="restaurant-list">
        {data.map((restaurant, index) => (
          <RestaurantTile restaurant={restaurant} key={index + 1000} />
        ))}
      </div>
    </>
  );
}

export default RestaurantList;

// {/* <div>{data && data}</div> */}
// {/* <div>{isLoading && 'Loading...'}</div>
// <div>{error && error}</div> */}
