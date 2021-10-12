import React from 'react';
import * as S from './styles';
import { TranslateGlobal } from '../../contexts/translateGlobal';
import { TitleSection } from '../TitleSection'
import { Social } from '../Social'
import { Social as SocialData } from '../../utils/social';

export const About = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <S.Container id="about">
            <TitleSection text="about.title" />
            <S.Paragraph>
                {getTranslate("about.description")}
            </S.Paragraph>

            <S.ContainerSocial>
                {
                    SocialData && SocialData.map((item) => {
                        return (
                            <Social 
                                key={item.name} 
                                data={item}
                            />
                        )
                    })
                }
            </S.ContainerSocial>
        </S.Container>
    )
}