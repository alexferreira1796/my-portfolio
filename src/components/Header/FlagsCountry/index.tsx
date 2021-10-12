import React from 'react';
import * as S from './styles'
import Flags from 'country-flag-icons/react/3x2'

import { TranslateGlobal } from '../../../contexts/translateGlobal';

export const FlagsCountry = () => {
    const { currentLocale, changeLocale } = React.useContext(TranslateGlobal);

    function setLocale(locale: string) {
        changeLocale(locale);
    }

    return (
        <S.Container>
            <S.Button onClick={() => setLocale("pt-BR")}>
                <Flags.BR title="Brasil" className={currentLocale === "pt-BR" ? 'active' : ''} />
            </S.Button>
            <S.Button onClick={() => setLocale("en-US")} >
                <Flags.US title="United States" className={currentLocale === "en-US" ? 'active' : ''} />
            </S.Button>
        </S.Container>
    )
}