import React from 'react';
import * as S from './styles';

import { RiCodeView } from "react-icons/ri";

import { TranslateGlobal } from '../../contexts/translateGlobal';

export const Logo = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <S.Title>
            {getTranslate('header.title')} 
            <RiCodeView />
        </S.Title>
    )
}