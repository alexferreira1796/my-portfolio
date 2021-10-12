import React from 'react';
import * as S from './styles'
import { TranslateGlobal } from '../../contexts/translateGlobal';
import { TitleSection } from '../TitleSection'
import { List } from './List';

import { RiCodeView, RiSmartphoneFill } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";

export const Services = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <S.Container id="services">
            <TitleSection text="services.title" />

            <S.ContainerList>
                <List title={getTranslate("services.data.web")}>
                    <RiCodeView />
                </List>
                <List title={getTranslate("services.data.responsive")}>
                    <RiSmartphoneFill />
                </List>
                <List title={getTranslate("services.data.back")}>
                    <ImDatabase />
                </List>
            </S.ContainerList>

        </S.Container>
    )
}