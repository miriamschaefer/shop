import { useEffect, useState } from 'react';
import { getProductsFromApi } from '../services/Services';

export const useFetchProducts = () => {
  const [products, setProducts] = useState([]);

  const getProducts = () => {
    getProductsFromApi().then((products) => setProducts(products));
  };

  useEffect(() => {
    getProducts();
  }, []);

  return {
    products,
  };
};
