import React, { useState } from 'react';
import Modal from './common/Modal';

const Product = (props) => {
  const { product } = props;
  const { id, title, description, image, price } = props;
  const [show, setShow] = useState(false);

  return (
    <>
      <li
        onClick={() => setShow(true)}
        className={`product-card ${id === 1 ? 'item' : ''}`}
      >
        <div className="product-card__img">
          <img src={image} />
        </div>
        <p className="elements-item-title">{title}</p>
      </li>
      <Modal onClose={() => setShow(false)} product={product} show={show} />
    </>
  );
};

export default Product;
