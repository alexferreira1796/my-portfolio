import React from 'react';
import * as S from './styles';

interface ITitle {
    children: React.ReactNode;
}

export const TitleSection = ({children}: ITitle) => {
    return (
        <S.Line>
            <S.Title>
                {children}
            </S.Title>
        </S.Line>
    )
}