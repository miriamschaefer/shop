import React from 'react';

const Price = ({ currency, price }) => {
  return (
    <span className="price">
      {price}
      {currency}
    </span>
  );
};

export default Price;
