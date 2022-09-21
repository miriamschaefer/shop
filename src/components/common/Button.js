import React from 'react';

const Button = ({ updateCart, action, title, product }) => {
  return (
    <button onClick={() => updateCart(product, action)} className="button">
      {title}
    </button>
  );
};

export default Button;
