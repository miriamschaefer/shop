import React from 'react';
import ProductCard from './ProductCard';

const Cart = (props) => {
  const { cartItems, updateCart } = props;

  const cartItemsInList = cartItems.map((item) => {
    return <ProductCard key={item.id} product={item} updateCart={updateCart} />;
  });

  return (
    <>
      {cartItems.length === 0 && <div>No productos</div>}
      {cartItems.length !== 0 && <div>{cartItemsInList}</div>}
    </>
  );
};

export default Cart;
