import React from 'react';
import * as S from './styles';
import { TranslateGlobal } from '../../contexts/translateGlobal';


export const Footer = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);
    
    return (
        <S.Footer>
            <S.Paragraph>
                2021 - {getTranslate('footer.text')} <span>{getTranslate('footer.name')}</span>
            </S.Paragraph>
        </S.Footer>
    )
}