import React, { useState } from 'react';
import { MODAL_CART } from '../../common/models';
import Modal from '../common/Modal';
import Title from '../common/Title';

const Nav = ({ cartItems, updateCart }) => {
  const [show, setShow] = useState(false);
  let totalProducts = 0;

  cartItems.forEach((item) => {
    totalProducts += item.quantity;
  });

  return (
    <>
      <nav onClick={() => setShow(true)} className="nav">
        <p className="nav__item">
          <Title title={'Cart'} classType={'nav'} />
          <span className="nav__item nav__item--light">
            ({totalProducts} {totalProducts === 1 ? 'item' : 'items'})
          </span>
        </p>
      </nav>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        cartItems={cartItems}
        updateCart={updateCart}
        modalType={MODAL_CART}
        title={'Carrito'}
      />
    </>
  );
};

export default Nav;
