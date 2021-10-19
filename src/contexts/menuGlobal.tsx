import React from 'react';

interface IMenu {
  open: boolean;
  controlMenu: () => void;
}

export const MenuGlobal = React.createContext<IMenu>({} as IMenu);

export const MenuProvider = ({ children }) => {
  const [open, setOpen] = React.useState(false);

  function controlMenu() {
    setOpen(!open);
  }

  return (
    <MenuGlobal.Provider value={{ open, controlMenu }}>
      {children}
    </MenuGlobal.Provider>
  );
};

export default MenuProvider;
