import React from 'react';
import Nav from './Nav';

const Header = (props) => {
  const { title, logo } = props;

  return (
    <header className="header">
      {title}
      <Nav />
    </header>
  );
};

export default Header;
