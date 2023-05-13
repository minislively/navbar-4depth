import React from 'react';
import Menu from '@/componets/navbar/menu/Menu';
import Image from 'next/image';
import '@/styles/navbar/Navbar.scss';
import '@/styles/button.scss';

const Navbar = () => {
  return (
    <nav className="navbar">
      {/* 메뉴바 */}
      <Menu />
    </nav>
  );
};

export default Navbar;
