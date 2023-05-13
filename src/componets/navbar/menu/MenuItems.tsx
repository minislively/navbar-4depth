'use client';
import React, { useState } from 'react';
import type { MenuItemsProps } from '@/types/Navbar';
import Link from 'next/link';
import '@/styles/button.scss';

const MenuItems = ({ menuItem }: MenuItemsProps) => {
  // 하위 메뉴가 존재하는지
  const hasSubmenus = menuItem.submenus && menuItem.submenus.length > 0;

  const [isHovered, setIsHovered] = useState<boolean>(false);

  const handleMouseEnter = () => {
    setIsHovered(true);
  };

  const handleMouseLeave = () => {
    setIsHovered(false);
  };

  return (
    <div>
      {/* 1Depth */}
      <div
        className={`one-depth-container ${isHovered ? 'hovered' : ''}`}
        onMouseEnter={handleMouseEnter}
        onMouseLeave={handleMouseLeave}
      >
        <ul className="one-depth">
          <li className="one-depth-label">
            <Link href={menuItem.link}>{menuItem.label}</Link>
          </li>
        </ul>

        {/* 2Depth */}
        {hasSubmenus && (
          <div className={`two-depth-container ${isHovered ? 'visible' : ''}`}>
            <ul className={`two-depth`}>
              {React.Children.toArray(
                menuItem.submenus?.map((submenu) => (
                  <li className="two-depth-lable" key={submenu.label}>
                    <Link href={submenu.link}>{submenu.label}</Link>
                    {/* 3Depth */}
                    <div className={`three-depth-container`}>
                      <ul className="three-depth">
                        {React.Children.toArray(
                          submenu.submenus?.map((subsubmenu) => (
                            <li
                              className="three-depth-label"
                              key={subsubmenu.label}
                            >
                              <Link href={subsubmenu.link}>
                                {subsubmenu.label}
                              </Link>
                              {/* 4Depth */}
                              <div className="four-depth-container">
                                <ul className="four-depth">
                                  {React.Children.toArray(
                                    subsubmenu.submenus?.map(
                                      (subsubsubmenu) => (
                                        <li className="four-depth-label">
                                          <Link href={subsubsubmenu.link}>
                                            {subsubsubmenu.label}
                                          </Link>
                                        </li>
                                      )
                                    )
                                  )}
                                </ul>
                              </div>
                            </li>
                          ))
                        )}
                      </ul>
                    </div>
                  </li>
                ))
              )}
            </ul>
          </div>
        )}
      </div>
    </div>
  );
};

export default MenuItems;
