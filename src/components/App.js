import '../stylesheets/App.scss';
import React, { useState } from 'react';
import ProductList from './ProductList';
import { useFetchProducts } from '../hooks/Hooks.js';
import Header from './layout/Header';

function App() {
  const { products } = useFetchProducts();
  const [cartItems, setCartItems] = useState([]);

  const updateCart = (product, action) => {
    console.log(product);
    const elementInCart = cartItems.find((el) => el.id === product.id);

    if (action === 'add') {
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

    if (action === 'remove') {
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
