import React, { useState } from 'react';
import Modal from './common/Modal';
import Chip from './common/Chip';
import Button from './common/Button';
import { ACTIONS_ADD, ACTIONS_REMOVE, MODAL_PRODUCT } from '../common/models';

const ProductCard = ({ product, updateCart, inProductList, cartItems }) => {
  const [show, setShow] = useState(false);

  const _product = cartItems?.find((el) => el.id === product.id)
    ? { ...product, isInCart: true }
    : product;

  const { id, title, image, category, price, isInCart } = _product;

  return (
    <>
      <li className={`product-card ${id === 1 ? 'featured' : ''}`}>
        <div onClick={() => setShow(true)} className="product-card__info">
          <div
            className={`product-card__info__img ${
              id === 1 ? 'featured__img' : ''
            }`}
          >
            <img src={image} alt={title} />
            {inProductList && <Chip category={category} />}
          </div>
          <h2 className="title title--productList">{title}</h2>
        </div>

        <div className="product-card__actions">
          <span className="product-card__actions__price">{price}€</span>

          {
            <Button
              action={isInCart && inProductList ? ACTIONS_REMOVE : ACTIONS_ADD}
              updateCart={updateCart}
              product={_product}
              title={isInCart && inProductList ? 'Eliminar' : 'Añadir'}
            />
          }

          {isInCart && !inProductList && (
            <Button
              action={ACTIONS_REMOVE}
              updateCart={updateCart}
              product={_product}
              title={'Eliminar'}
            />
          )}
        </div>
      </li>
      <Modal
        onClose={() => setShow(false)}
        product={_product}
        updateCart={updateCart}
        show={show}
        modalType={MODAL_PRODUCT}
      />
    </>
  );
};

export default ProductCard;
