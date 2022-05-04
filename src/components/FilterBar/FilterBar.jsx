import { Button, Select, TextInput, Group, Box, Checkbox } from '@mantine/core';
import { useForm } from '@mantine/form';

import React from 'react';
import { useStore } from '../../store.js';
import './FilterBar.css';

function FilterBar() {
  const setLocation = useStore((state) => state.setLocation);
  const setRating = useStore((state) => state.setRating);
  const setReviews = useStore((state) => state.setReviews);
  const setCuisine = useStore((state) => state.setCuisine);
  const setMaxPrice = useStore((state) => state.setMaxPrice);
  const setOpenNow = useStore((state) => state.setOpenNow);
  const setRadius = useStore((state) => state.setRadius);
  const form = useForm({
    // initialValues: {
    //   email: '',
    //   termsOfService: false,
    // },
    // validate: {
    //   email: (value) => (/^\S+@\S+$/.test(value) ? null : 'Invalid email'),
    // },
  });

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
      <form onSubmit={form.onSubmit((values) => console.log(values))}>
        <TextInput
          className="label"
          id="location"
          label="Location"
          aria-label="Location"
          variant="filled"
          placeholder="Insert Zip Code"
          required
          onChange={(event) => setLocation(event.target.value)}
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

        <Button className="label eat-button button" type="submit">
          Let's Eat
        </Button>
      </form>
    </div>
  );
}
export default FilterBar;
