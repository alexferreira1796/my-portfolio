import * as S from './styles'
import { Button } from '../Button';
import theme from '../../global/styles/theme';

export const SectionHello = () => {
    return (
        <S.Container>
            <S.Title>
                Hello, {"i'm Alex Ferreira"}
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
                <Button text="Entrar em contato" colors={{
                    color: theme.colors.white, 
                    bgColor: theme.colors.primary
                }}
                />
            </S.Buttons>

        </S.Container>
    )
}