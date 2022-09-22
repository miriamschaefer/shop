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
        cartModal={true}
      />
    );
  });

  return (
    <ul className="cart">
      {cartItems.length === 0 && <div>No tienes productos en el carrito</div>}
      {cartItems.length !== 0 && <>{cartItemsInList}</>}
    </ul>
  );
};

export default Cart;
