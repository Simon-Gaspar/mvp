import axios from 'axios';
import React, { useEffect } from 'react';
import { useQuery } from 'react-query';
import { Button, Select, TextInput } from '@mantine/core';
import { useForm } from '@mantine/form';
import './FilterBar.css';
import { useStore } from '../../store.js';

const getNearbyPlaces = async ({ cuisine, location, maxPrice, openNow, radius, rating, reviews }) => {
  const { data } = await axios.get('/api/searchNearby', {
    params: { cuisine, location, maxPrice, openNow, radius, rating, reviews },
  });
  return data;
};

function FilterBar() {
  const setError = useStore((state) => state.setError);

  const setFilteredResults = useStore((state) => state.setFilteredResults);

  const form = useForm({
    initialValues: {
      cuisine: '',
      location: '',
      maxPrice: '',
      openNow: '',
      radius: '',
      rating: '',
      reviews: '',
    },
    validate: {
      location: (value) => (/^\d{5}$/.test(value) ? null : 'Invalid zip code'),
    },
  });

  const {
    data,
    isFetching,
    refetch: searchNearbyRefetch,
    isError,
  } = useQuery(
    'searchNearby',
    () => {
      console.log(form.values);
      return getNearbyPlaces(form.values);
    },
    {
      enabled: false,
    }
  );
  console.log('data: ', data);
  console.log('isFetching', isFetching);

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
        onSubmit={form.onSubmit(() => {
          searchNearbyRefetch();
        })}
      >
        <TextInput
          name="location"
          className="label"
          label="Location"
          aria-label="Location"
          variant="filled"
          placeholder="Insert Zip Code"
          required
          {...form.getInputProps('location')}
        />

        <Select
          className="label"
          label="Rating"
          aria-label="Rating"
          placeholder="Choose Minimum Rating"
          data={['4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9']}
          {...form.getInputProps('rating')}
        />

        <Select
          className="label"
          label="Radius (Miles)"
          aria-label="Radius"
          placeholder="Choose Max Radius"
          data={['1', '2', '3', '4', '5']}
          {...form.getInputProps('radius')}
        />

        <Select
          className="label"
          label="Reviews"
          aria-label="Reviews"
          placeholder="Choose Minimum Reviews"
          data={['100', '250', '500', '750', '1000', '1250', '1500', '2000', '3000', '4000', '5000']}
          {...form.getInputProps('reviews')}
        />

        <Select
          className="label"
          label="Cuisine"
          aria-label="Cuisine"
          placeholder="Choose Cuisine"
          data={cuisineList}
          {...form.getInputProps('cuisine')}
        />

        <Select
          className="label"
          label="Max Price"
          aria-label="Max Price"
          placeholder="Choose Max Price"
          data={['0 ', '1', '2', '3', '4']}
          {...form.getInputProps('maxPrice')}
        />

        <Select
          className="label"
          label="Open Now"
          aria-label="Open Now"
          placeholder="Choose if Open Now"
          data={['Any', 'Yes', 'No']}
          {...form.getInputProps('openNow')}
        />

        <Button
          className="label eat-button button"
          type="submit"
          loading={isFetching}
          loaderPosition="right"
        >
          Let's Eat
        </Button>
      </form>
    </div>
  );
}
export default FilterBar;
