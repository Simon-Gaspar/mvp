import React from 'react';
import './LeftColumn.css';
import { Button, Select, TextInput } from '@mantine/core';

const Database = '1';
class LeftColumn extends React.Component {
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
      <div className="left-column">
        <h2>Filters: </h2>
        <div className="zip label">
          <TextInput
            label="Location: "
            variant="filled"
            placeholder="Your Zip Code"
            radius="md"
            size="xs"
            onChange={this.handleChange}
          />
        </div>

        <div className="label">
          <Select
            label="Cuisine"
            placeholder="Pick one"
            searchable
            nothingFound="No options"
            maxDropdownHeight={280}
            data={cuisine}
          />
        </div>

        <div className="label">
          <label>Rating: </label>
          <select onChange={this.handleChange} id="rating">
            <option value="4.0">4.0</option>
            <option value="4.1">4.1</option>
            <option value="4.2">4.2</option>
            <option value="4.3">4.3</option>
            <option value="4.4">4.4</option>
            <option value="4.5">4.5</option>
            <option value="4.6">4.6</option>
            <option value="4.7">4.7</option>
            <option value="4.8">4.8</option>
            <option value="4.9">4.9</option>
            <option value="5.0">5.0</option>
          </select>
        </div>

        <div className="label">
          <label>Max Price: </label>
          <select onChange={this.handleChange} id="maxPrice">
            <option value="0">0 - affordable</option>
            <option value="1">1</option>
            <option value="2">2</option>
            <option value="3">3</option>
            <option value="4">4 - expensive</option>
          </select>
        </div>

        <div className="label">
          <label>Open Now: </label>
          <select onChange={this.handleChange} id="openNow">
            <option value="">-</option>
            <option value="Yes">Yes</option>
            <option value="No">No</option>
          </select>
        </div>

        {/* <Button onClick={this.submitForm} loading loaderPosition="right">
          Let's Eat
        </Button> */}

        <Button compact className="button" onClick={this.submitForm}>
          Let's Eat
        </Button>
      </div>
    );
  }
}

export default LeftColumn;
