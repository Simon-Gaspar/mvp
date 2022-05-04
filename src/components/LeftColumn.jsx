import React from 'react';
import './LeftColumn.css';

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
    return (
      <div className="left-column">
        <h2>Filters: </h2>
        <div className="label">
          <label>Location: </label>
          <input type="text" id="location" onChange={this.handleChange}></input>
        </div>

        <div className="label">
          <label>Cuisine: </label>
          <select onChange={this.handleChange} id="cuisine">
            <option value="African">African</option>
            <option value="American">American</option>
            <option value="Barbecue">Barbecue</option>
            <option value="Chinese">Chinese</option>
            <option value="Crawfish">Crawfish</option>
            <option value="French">French</option>
            <option value="Hamburger">Hamburger</option>
            <option value="Italian">Italian</option>
            <option value="Japanese">Japanese</option>
            <option value="Mediterranean">Mediterranean</option>
            <option value="Mexican">Mexican</option>
            <option value="Middle Eastern">Middle Eastern</option>
            <option value="Pizza">Pizza</option>
            <option value="Seafood">Seafood</option>
            <option value="Spanish">Spanish</option>
            <option value="Steak">Steak</option>
            <option value="Sushi">Sushi</option>
            <option value="Thai">Thai</option>
          </select>
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

        <button onClick={this.submitForm}>Let's Eat</button>
      </div>
    );
  }
}

export default LeftColumn;
