export interface MenuItemsProps {
  menuItem: {
    label: string;
    link: string;
    submenus?: {
      label: string;
      link: string;
      submenus?: {
        label: string;
        link: string;
        submenus?: {
          label: string;
          link: string;
        }[];
      }[];
    }[];
  };
}

export interface Submenu {
  label: string;
  link: string;
  submenus?: Submenu[];
}
