import React from 'react';
import type { Submenu } from '@/types/Navbar';
import Link from 'next/link';

interface TwoDepthMenuItemsProps {
  submenus: Submenu[];
  isHovered: boolean;
  isThreeDepthClick: boolean;
  setIsThreeDepthClick: (value: boolean) => void;
  isFourDepthClick: boolean;
  setIsFourDepthClick: (value: boolean) => void;
}

const TwoDepthMenuItems = ({
  submenus,
  isHovered,
  isThreeDepthClick,
  setIsThreeDepthClick,
  isFourDepthClick,
  setIsFourDepthClick,
}: TwoDepthMenuItemsProps) => {
  const handleMouseEnter = () => {
    setIsThreeDepthClick(true);
  };

  const handleMouseLeave = () => {
    setIsThreeDepthClick(false);
  };

  return (
    <div className="two-depth-container">
      <ul className={`two-depth ${isHovered ? 'hovered' : ''}`}>
        {submenus.map((submenu) => (
          <li
            className={`two-depth-label ${isHovered ? 'hovered' : ''}`}
            key={submenu.label}
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
          >
            <Link href={submenu.link}>{submenu.label}</Link>
            {/* 3Depth */}
            <div
              className={`three-depth-container ${
                isThreeDepthClick ? 'click' : ''
              }`}
              onMouseEnter={handleMouseEnter}
              onMouseLeave={handleMouseLeave}
            >
              <ul className="three-depth">
                {submenu.submenus?.map((subsubmenu) => (
                  <li className="three-depth-label" key={subsubmenu.label}>
                    <Link href={subsubmenu.link}>{subsubmenu.label}</Link>
                    {/* 4Depth */}
                    <div className="four-depth-container">
                      <ul className="four-depth">
                        {subsubmenu.submenus?.map((subsubsubmenu) => (
                          <li
                            className="four-depth-label"
                            key={subsubsubmenu.label}
                          >
                            <Link href={subsubsubmenu.link}>
                              {subsubsubmenu.label}
                            </Link>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default TwoDepthMenuItems;
