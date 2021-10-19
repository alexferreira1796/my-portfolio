import React from 'react';
import * as S from './styles';
import { Logo } from '../Logo';
import MenuOptions from '../MenuOptions';

import { MenuGlobal } from '../../contexts/menuGlobal';

export const Menu = () => {
  const { open, controlMenu } = React.useContext(MenuGlobal);
  const refMenu = React.useRef<HTMLDivElement>(null);

  function openMenu(event: any) {
    if (event.target === refMenu.current) {
      controlMenu();
      return;
    }
    controlMenu();
  }

  return (
    <>
      <S.Nav>
        <MenuOptions setOpen={controlMenu} />
      </S.Nav>
      <S.Mobile>
        <S.Button ref={refMenu} onClick={openMenu}>
          <S.IconBar></S.IconBar>
          <S.IconBar></S.IconBar>
          <S.IconBar></S.IconBar>
        </S.Button>
      </S.Mobile>
      <S.NavMobile ref={refMenu} onClick={openMenu} open={open}>
        <S.ContainerMenu>
          <Logo />
          <MenuOptions setOpen={controlMenu} />
        </S.ContainerMenu>
      </S.NavMobile>
    </>
  );
};
