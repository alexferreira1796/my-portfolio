import React from 'react';
import * as S from './styles';

import { Logo } from '../Logo';
import { FlagsCountry } from './FlagsCountry';
import { Menu } from '../Menu';



export const Header = () => {

    return (
        <>
            <FlagsCountry />
            <S.Header>
                <Logo />
                <Menu />
            </S.Header>
        </>
    )
}