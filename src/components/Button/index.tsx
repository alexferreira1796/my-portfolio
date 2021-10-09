import * as S from './styles'

export interface IColors {
    color: string;
    bgColor: string;
}

interface IButton {
    text: string;
    colors: IColors;
    
}

export const Button = ({
    text,
    colors,
}: IButton) => {
    return (
        <S.Button colors={colors}>
            {text}
        </S.Button>
    )
}