import React from 'react';
import Nav from './Nav';
import Logo from '../../media/img/logo.png';

const Header = ({ title, cartItems, updateCart }) => {
  return (
    <header className="header">
      <div className="header__logo">
        <img src={Logo} alt={title} />
      </div>
      <Nav cartItems={cartItems} updateCart={updateCart} />
    </header>
  );
};

export default Header;
