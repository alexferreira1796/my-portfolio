import React from 'react';
import { TranslateGlobal } from '../../contexts/translateGlobal';
import * as S from './styles';

import { FlagsCountry } from './FlagsCountry';
import { Menu } from '../Menu';

import { RiCodeView } from "react-icons/ri";


export const Header = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <>
            <FlagsCountry />
            <S.Header>
                <S.Title>
                    {getTranslate('header.title')} 
                    <RiCodeView />
                </S.Title>
                <Menu />
            </S.Header>
        </>
    )
}