import React from 'react';
import MenuItems from '@/componets/navbar/menu/MenuItems';
import menuData from '@/data/menu.json';
import '@/styles/navbar/Menu.css';
import Image from 'next/image';

const Menu = () => {
  return (
    <nav className="menu">
      {/* 로고 */}
      <Image src={'/next.svg'} alt="로고" width={100} height={100} />
      {React.Children.toArray(
        menuData.map((menuItem) => (
          <MenuItems key={menuItem.label} menuItem={menuItem} />
        ))
      )}
      {/* 로그인/회원가입 버튼 */}
      <button className="button" type="button">
        회원가입
      </button>
      <button className="secondary-button" type="button">
        로그인
      </button>
    </nav>
  );
};

export default Menu;
