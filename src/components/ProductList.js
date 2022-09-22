import React from 'react';
import ProductCard from './ProductCard';

const ProductList = ({ products, updateCart, cartItems }) => {
  const productList = products.map((product, i) => {
    return (
      <ProductCard
        updateCart={updateCart}
        key={i}
        product={product}
        inProductList={true}
        cartItems={cartItems}
      />
    );
  });

  return <ul className="list">{productList}</ul>;
};

export default ProductList;
