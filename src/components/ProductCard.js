import React, { useState } from 'react';
import Modal from './common/Modal';
import Chip from './common/Chip';
import Button from './common/Button';
import { ACTIONS_ADD, ACTIONS_REMOVE, MODAL_PRODUCT } from '../common/models';
import Title from './common/Title';
import Price from './common/Price';

const ProductCard = ({
  product,
  updateCart,
  inProductList,
  cartItems,
  cartModal,
}) => {
  const [show, setShow] = useState(false);

  const _product = cartItems?.find((el) => el.id === product.id)
    ? { ...product, isInCart: true }
    : product;

  const { id, title, image, category, price, isInCart, description } = _product;

  return (
    <>
      <li
        className={`product-card ${id === 1 ? 'featured' : ''}
        ${inProductList ? 'zoom-in' : ''} ${
          !inProductList && !cartModal ? 'product-card--modal' : ''
        } ${isInCart ? 'product-card--card' : ''}`}
      >
        <div
          onClick={() => setShow(true)}
          className={`product-card__info ${
            !inProductList && !cartModal ? 'product-card__info--modal' : ''
          }`}
        >
          <div
            className={`product-card__info__img ${
              id === 1 && inProductList ? 'featured__img' : ''
            } `}
          >
            <img src={image} alt={title} />
            {inProductList && <Chip category={category} />}
          </div>
          <div
            className={`${
              !inProductList && !cartModal ? 'product-card__description' : ''
            }`}
          >
            <Title
              title={title}
              classType={inProductList ? 'productList' : 'product'}
            />

            {!inProductList && !cartModal && (
              <p class="description">{description}</p>
            )}
          </div>
        </div>

        <div
          className={`product-card__actions ${
            !inProductList && !cartModal ? 'product-card__actions--modal' : ''
          }`}
        >
          <Price price={price} currency={'€'} />

          <div className="product-card__actions__buttons">
            {!cartModal && (
              <Button
                action={
                  isInCart && inProductList ? ACTIONS_REMOVE : ACTIONS_ADD
                }
                updateCart={updateCart}
                product={_product}
                title={isInCart && inProductList ? 'Eliminar' : 'Añadir'}
              />
            )}

            {(cartModal || (isInCart && !inProductList)) && (
              <Button
                action={ACTIONS_REMOVE}
                updateCart={updateCart}
                product={_product}
                title={'Eliminar'}
              />
            )}
          </div>
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
