import React from 'react';
import './FilterBar.css';
import { Button, NativeSelect, TextInput } from '@mantine/core';
class FilterBar extends React.Component {
  // searchNearby
  constructor(props) {
    super(props);
    this.state = {
      location: '',
      rating: '',
      reviews: '',
      cuisine: '',
      maxPrice: '',
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

  submitForm(event) {
    event.preventDefault();
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
            id="location"
            label="Location"
            variant="filled"
            placeholder="Zip Code"
            onChange={this.handleChange}
          />
        </div>

        <div className="label">
          <NativeSelect
            id="rating"
            onChange={this.handleChange}
            label="Rating"
            placeholder="4.0"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={['4.0', '4.1', '4.2', '4.3', '4.4', '4.5', '4.6', '4.7', '4.8', '4.9']}
          />
        </div>

        <div className="label">
          <NativeSelect
            id="reviews"
            onChange={this.handleChange}
            label="Reviews"
            placeholder="500"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={['100', '250', '500', '750', '1000', '1250', '1500', '2000', '3000', '4000', '5000']}
          />
        </div>

        <div className="label">
          <NativeSelect
            id="cuisine"
            onChange={this.handleChange}
            label="Cuisine"
            placeholder="Cuisine"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={cuisine}
          />
        </div>

        <div className="label">
          <NativeSelect
            id="maxPrice"
            onChange={this.handleChange}
            label="Max Price"
            placeholder="Price"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={['0 ', '1', '2', '3', '4']}
          />
        </div>

        <div className="label">
          <NativeSelect
            id="openNow"
            onChange={this.handleChange}
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
