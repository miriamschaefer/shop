import React from 'react';
import ProductCard from './ProductCard';

const Cart = ({ cartItems, updateCart, isInCart }) => {
  const cartItemsInList = cartItems.map((item) => {
    return (
      <ProductCard
        key={item.id}
        product={item}
        updateCart={updateCart}
        isInCart={isInCart}
      />
    );
  });

  return (
    <>
      {cartItems.length === 0 && <div>No productos</div>}
      {cartItems.length !== 0 && <div>{cartItemsInList}</div>}
    </>
  );
};

export default Cart;
