import React from 'react';
import ProductCard from './ProductCard';

const ProductList = (props) => {
  const { products, updateCart } = props;

  const productList = products.map((product, i) => {
    return (
      <ProductCard
        updateCart={updateCart}
        key={i}
        product={product}
        inProductList={true}
      />
    );
  });

  return <ul className="list">{productList}</ul>;
};

export default ProductList;
