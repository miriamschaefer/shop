import React, { useState } from 'react';
import Modal from './common/Modal';
import Chip from './common/Chip';
import Button from './common/Button';

const ProductCard = ({ product, updateCart, inProductList }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <li className={`product-card ${product.id === 1 ? 'item' : ''}`}>
        <div onClick={() => setShow(true)} className="product-card__info">
          <div className="product-card__info__img">
            <img src={product.image} alt={product.title} />
            {inProductList && <Chip category={product.category} />}
          </div>

          <h2 className="title title--productList">{product.title}</h2>
        </div>

        <div className="product-card__actions">
          <Button
            action={'add'}
            updateCart={updateCart}
            product={product}
            title={'Añadir'}
          />
          {!inProductList && (
            <Button
              action={'remove'}
              updateCart={updateCart}
              product={product}
              title={'Eliminar'}
            />
          )}
        </div>
      </li>
      <Modal
        onClose={() => setShow(false)}
        product={product}
        show={show}
        modalType={'product'}
      />
    </>
  );
};

export default ProductCard;
