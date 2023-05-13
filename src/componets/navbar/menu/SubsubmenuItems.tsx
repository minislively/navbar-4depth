import { MenuItemsProps } from '@/types/Navbar';
import React from 'react';

const SubsubmenuItems = ({ menuItem }: MenuItemsProps) => {
  return (
    <div className="">
      {React.Children.toArray(
        menuItem.submenus?.map((submenu) => (
          <div className="bg-black">{submenu.label}</div>
        ))
      )}
    </div>
  );
};

export default SubsubmenuItems;
