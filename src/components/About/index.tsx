import React from 'react';
import * as S from './styles';
import { TitleSection } from '../TitleSection'
import { Social } from '../Social'

import { Social as SocialData } from '../../utils/social';

export const About = () => {
    return (
        <S.Container>
            <TitleSection>About me</TitleSection>
            <S.Paragraph>
                Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. 
                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident
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