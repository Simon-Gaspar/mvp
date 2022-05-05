import React from 'react';
import { BiCrown } from 'react-icons/bi';

import './EmptyState.css';

function EmptyState() {
  return (
    <div className="empty-state-tile">
      <BiCrown size="200px" color="#7d9c88" title="Tonight we dine like kings" />
      <h2> Tonight we dine like kings </h2>
    </div>
  );
}

export default EmptyState;
