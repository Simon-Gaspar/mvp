import React from 'react';
import './FilterBar.css';
import { Button, Select, TextInput } from '@mantine/core';

const Database = '1';
class FilterBar extends React.Component {
  // searchNearby
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      cuisine: '',
      rating: '4.0',
      maxprice: '4',
      openNow: '',
    };
    this.handleChange = this.handleChange.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }

  handleChange(event) {
    this.setState({
      [event.target.id]: event.target.value,
    });
  }

  submitForm() {
    // this.props.searchNearby(this.state);
  }

  render() {
    const cuisine = [
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
        <div className="label">
          <h3>Filters </h3>
        </div>
        <div className="label">
          <TextInput
            label="Location"
            variant="filled"
            placeholder="Zip Code"
            onChange={this.handleChange}
          />
        </div>

        <div className="label">
          <Select
            label="Cuisine"
            placeholder="Cuisine"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={cuisine}
          />
        </div>

        <div className="label">
          <Select
            label="Rating"
            placeholder="Rating"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={['Any', '4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9']}
          />
        </div>

        <div className="label">
          <Select
            label="Max Price"
            placeholder="Price"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={['Any', '0 - affordable', '1', '2', '3', '4- expensive']}
          />
        </div>

        <div className="label">
          <Select
            label="Open Now"
            placeholder="Any"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={['Any', 'Yes', 'No']}
          />
        </div>

        <div className="label eat-button">
          <Button className="button" onClick={this.submitForm}>
            Let's Eat
          </Button>
        </div>
      </div>
    );
  }
}

export default FilterBar;

// <Button onClick={this.submitForm} loading loaderPosition="right">
// Let's Eat
// </Button>
