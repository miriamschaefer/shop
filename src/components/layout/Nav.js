import React, { useState } from 'react';
import Modal from '../common/Modal';

const Nav = ({ cartItems, updateCart }) => {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav onClick={() => setShow(true)} className="nav">
        <p className="nav__item">
          Cart{' '}
          <span className="nav__item nav__item--light">
            ({cartItems.length} items)
          </span>
        </p>
      </nav>
      <Modal
        onClose={() => setShow(false)}
        show={show}
        cartItems={cartItems}
        updateCart={updateCart}
        modalType={'cart'}
      />
    </>
  );
};

export default Nav;
