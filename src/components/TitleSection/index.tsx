import React from 'react';
import * as S from './styles';
import { TranslateGlobal } from '../../contexts/translateGlobal';
interface ITitle {
    text: string;
}

export const TitleSection = ({text}: ITitle) => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <S.Line>
            <S.Title>
                {getTranslate(text || '')}
            </S.Title>
        </S.Line>
    )
}