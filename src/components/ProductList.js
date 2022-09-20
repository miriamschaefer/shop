import React from 'react';
import ProductMiniature from './ProductMiniature';

const ProductList = ({ products }) => {
  const productList = products.map((product, i) => {
    return <ProductMiniature key={i} product={product} {...product} />;
  });

  return (
    <main className="main">
      <ul className="list">{productList}</ul>
    </main>
  );
};

export default ProductList;
