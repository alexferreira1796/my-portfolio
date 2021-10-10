import Image from "next/image";
import * as S from './styles'
import { Button } from '../Button';
import theme from '../../global/styles/theme';

export const SectionHello = () => {
    return (
        <S.Container>
            <S.About>
                <S.Title>
                    Hello,<br />
                    I am Alex Ferreira
                </S.Title>
                <S.Subtitle>
                    Front-end developer
                </S.Subtitle>

                <S.Buttons>
                    <Button text="Download CV" colors={{
                        color: theme.colors.primary,
                        bgColor: theme.colors.tertiary
                    }}
                    />
                    <Button text="Get in touch" colors={{
                        color: theme.colors.white, 
                        bgColor: theme.colors.primary
                    }}
                    />
                </S.Buttons>
            </S.About>

            <S.Image>
                <Image src="/svg/programming.svg" layout="fill" alt="logo"/>
            </S.Image>

        </S.Container>
    )
}