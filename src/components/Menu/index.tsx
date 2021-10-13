import React from 'react';
import * as S from './styles';
import { Logo } from '../Logo';
import MenuOptions from '../MenuOptions';

export const Menu = () => {
    const [open, setOpen] = React.useState<boolean>(false);
    const refMenu = React.useRef<HTMLDivElement>(null);

    function openMenu(event: any) {
        if (event.target === refMenu.current) {
            setOpen(false);
            return;
        }
        setOpen(true);
    }

    return (
        <>
            <S.Nav>
                <MenuOptions setOpen={setOpen} />
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
                    <MenuOptions setOpen={setOpen} />
                </S.ContainerMenu>
            </S.NavMobile>
        </>
    )
}