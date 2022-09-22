import React from 'react';

const Button = ({ updateCart, action, title, product, cartItems }) => {
  return <button onClick={() => updateCart(product, action)}>{title}</button>;
};

export default Button;
