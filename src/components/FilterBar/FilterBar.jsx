import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';

import { Button, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';

import './FilterBar.css';

import { useStore } from '../../store.js';

const getNearbyPlaces = ({ cuisine, location, maxPrice, openNow, radius, rating, reviews }) => {
  return axios
    .get('/api/searchNearby', {
      params: { cuisine, location, maxPrice, openNow, radius, rating, reviews },
    })
    .then((res) => res.data);
};

function FilterBar() {
  const setLocation = useStore((state) => state.setLocation);
  const location = useStore((state) => state.location);

  const setRating = useStore((state) => state.setRating);
  const rating = useStore((state) => state.rating);

  const setReviews = useStore((state) => state.setReviews);
  const reviews = useStore((state) => state.reviews);

  const setCuisine = useStore((state) => state.setCuisine);
  const cuisine = useStore((state) => state.cuisine);

  const setMaxPrice = useStore((state) => state.setMaxPrice);
  const maxPrice = useStore((state) => state.maxPrice);

  const setOpenNow = useStore((state) => state.setOpenNow);
  const openNow = useStore((state) => state.openNow);

  const setRadius = useStore((state) => state.setRadius);
  const radius = useStore((state) => state.radius);

  const setError = useStore((state) => state.setError);

  const setFilteredResults = useStore((state) => state.setFilteredResults);

  const form = useForm({
    initialValues: {
      location: '',
    },
    validate: {
      location: (value) => (/^\d{5}$/.test(value) ? null : 'Invalid zip code'),
    },
  });

  const {
    data,
    error,
    isLoading,
    refetch: searchNearbyRefetch,
    isError,
    isFetched,
  } = useQuery(
    'searchNearby',
    () => getNearbyPlaces({ cuisine, location, maxPrice, openNow, radius, rating, reviews }),
    {
      enabled: false,
    }
  );
  console.log('isError: ', isError);
  console.log('isFetched: ', isFetched);

  console.log('data: ', data);

  useEffect(() => {
    if (data?.length) {
      setFilteredResults(data);
    }
  }, [data, setFilteredResults]);

  useEffect(() => {
    if (isError) {
      setError(true);
    }
  }, [isError, setError]);

  const cuisineList = [
    'African',
    'American',
    'Barbecue',
    'Chinese',
    'Crawfish',
    'French',
    'Hamburger',
    'Italian',
    'Japanese',
    'Mediterranean',
    'Mexican',
    'Middle Eastern',
    'Pizza',
    'Seafood',
    'Spanish',
    'Steak',
    'Sushi',
    'Thai',
  ];

  return (
    <div className="filter-bar">
      <form
        onSubmit={form.onSubmit((values) => {
          console.log(values);
          searchNearbyRefetch();
        })}
      >
        <TextInput
          className="label"
          id="location"
          label="Location"
          aria-label="Location"
          variant="filled"
          placeholder="Insert Zip Code"
          required
          onChange={(event) => setLocation(event.target.value)}
          {...form.getInputProps('location')}
        />

        <Select
          className="label"
          id="rating"
          onChange={setRating}
          label="Rating"
          aria-label="Rating"
          placeholder="Choose Minimum Rating"
          data={['4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9']}
        />

        {/* <TextInput
          className="label"
          id="radius"
          onChange={setRadius}
          label="Radius (Meters)"
          aria-label="Radius"
          placeholder="Choose Max Radius"
          onChange={(event) => setRadius(event.target.value)}
        /> */}

        <Select
          className="label"
          id="radius"
          onChange={setRadius}
          label="Radius (Miles)"
          aria-label="Radius"
          placeholder="Choose Max Radius"
          data={['1', '2', '3', '4', '5']}
        />

        <Select
          className="label"
          id="reviews"
          onChange={setReviews}
          label="Reviews"
          aria-label="Reviews"
          placeholder="Choose Minimum Reviews"
          data={['100', '250', '500', '750', '1000', '1250', '1500', '2000', '3000', '4000', '5000']}
        />

        <Select
          className="label"
          id="cuisine"
          onChange={setCuisine}
          label="Cuisine"
          aria-label="Cuisine"
          placeholder="Choose Cuisine"
          data={cuisineList}
        />

        <Select
          className="label"
          id="maxPrice"
          onChange={setMaxPrice}
          label="Max Price"
          aria-label="Max Price"
          placeholder="Choose Max Price"
          data={['0 ', '1', '2', '3', '4']}
        />

        <Select
          className="label"
          id="openNow"
          onChange={setOpenNow}
          label="Open Now"
          aria-label="Open Now"
          placeholder="Choose if Open Now"
          data={['Any', 'Yes', 'No']}
        />

        <Button
          className="label eat-button button"
          type="submit"
          loading={isLoading}
          loaderPosition="right"
        >
          Let's Eat
        </Button>
      </form>
    </div>
  );
}
export default FilterBar;
