import React from 'react';

import './Error.css';

function Error({ restaurant }) {
  return (
    <div className="error-tile">
      <h2> ⚠ </h2>
      <br></br>
      <h2> No Results Found</h2>
    </div>
  );
}

export default Error;
