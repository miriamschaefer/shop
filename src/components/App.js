import '../stylesheets/App.scss';
import React, { useState } from 'react';
import ProductList from './ProductList';
import { useFetchProducts } from '../hooks/Hooks.js';
import Header from './layout/Header';
import { ACTIONS_ADD, ACTIONS_REMOVE } from '../common/models';

function App() {
  const { products } = useFetchProducts();
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (product, action) => {
    const elementInCart = cartItems.find((el) => el.id === product.id);

    if (action === ACTIONS_ADD) {
      if (elementInCart) {
        setCartItems(
          cartItems.map((el) =>
            el.id === product.id
              ? { ...elementInCart, quantity: elementInCart.quantity + 1 }
              : el
          )
        );
      } else {
        setCartItems([...cartItems, { ...product, quantity: 1 }]);
      }
    }

    if (action === ACTIONS_REMOVE) {
      if (elementInCart.quantity === 1) {
        setCartItems(cartItems.filter((el) => el.id !== product.id));
      } else {
        setCartItems(
          cartItems.map((el) =>
            el.id === product.id
              ? { ...elementInCart, quantity: elementInCart.quantity - 1 }
              : el
          )
        );
      }
    }
  };

  return (
    <>
      <Header cartItems={cartItems} title={'Patata'} updateCart={updateCart} />
      <main className="main">
        <ProductList
          updateCart={updateCart}
          products={products}
          cartItems={cartItems}
        />
      </main>
    </>
  );
}

export default App;
