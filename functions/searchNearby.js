require('dotenv').config();
const axios = require('axios').default;
const key = process.env.KEY;
const meter = 1609.34;

exports.handler = async function (event, context) {
  try {
    console.log('queryStringParameters: ', event.queryStringParameters);
    const {
      cuisine = '',
      location = 78735,
      maxPrice = 4,
      openNow,
      radius,
      rating = 4.0,
      reviews = 100,
    } = event.queryStringParameters;
    const { data: locationResponse } = await axios.get(
      `https://maps.googleapis.com/maps/api/geocode/json?key=${key}&address=${location}`
    );
    const { lat, lng } = locationResponse.results[0].geometry.location;
    const latlng = `${lat},${lng}`;
    const encodedLocation = encodeURIComponent(latlng);
    const { data } = await axios.get(
      `https://maps.googleapis.com/maps/api/place/nearbysearch/json?key=${key}&location=${encodedLocation}&maxprice=${maxPrice}&radius=${
        radius ? meter * radius : meter * 5
      }&keyword=restaurant
      ${cuisine && ` ${cuisine}`}
      ${openNow && `&opennow=true`}`
    );

    const filteredResults = data.results
      .map((place) => {
        return {
          name: place.name,
          opening_hours: {
            open_now: place.opening_hours.open_now,
          },
          price_level: place.price_level,
          rating: place.rating,
          user_ratings_total: place.user_ratings_total,
        };
      })
      .filter((place) => {
        if (place.rating >= rating && place.user_ratings_total >= reviews) {
          return true;
        }
        return false;
      });
    return {
      statusCode: 200,
      body: JSON.stringify(filteredResults),
    };
  } catch {
    return {
      statusCode: 500,
      body: JSON.stringify([]),
    };
  }
};
