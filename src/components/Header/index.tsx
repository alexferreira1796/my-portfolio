import React from 'react';
import intl from 'react-intl-universal';
import * as S from './styles';

import { FlagsCountry } from './FlagsCountry';
import { Menu } from '../Menu';

import { TranslateGlobal } from '../../contexts/translateGlobal';

export const Header = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <>
            <FlagsCountry />
            <S.Header>
                <S.Title>{getTranslate('header.title')}</S.Title>
                <Menu />
            </S.Header>
        </>
    )
}