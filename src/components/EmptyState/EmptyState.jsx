import React from 'react';

import './EmptyState.css';

function EmptyState({ restaurant }) {
  return (
    <div className="empty-state-tile">
      <h2> ⚠ </h2>
      <br></br>
      <h2> Tonight we dine like kings </h2>
    </div>
  );
}

export default EmptyState;
