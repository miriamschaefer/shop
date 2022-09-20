import '../stylesheets/App.scss';
import React from 'react';
import ProductList from './ProductList';
import { Route, Switch } from 'react-router-dom';
import { useFetchProducts } from '../hooks/Hooks.js';
import Header from './common/Header';

function App() {
  const { products } = useFetchProducts();

  console.log(products);

  return (
    <>
      <Header title={'Patata'} logo={'foto'} />
      <ProductList products={products} />
    </>
  );
}

export default App;
