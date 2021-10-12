import * as S from './styles'

interface IList {
    title: string;
    children: React.ReactNode;
}

export const List = ({title, children}: IList) => {
    return (
        <S.Container>
            <S.Icon>{children}</S.Icon>
            <S.Title>{title}</S.Title>
        </S.Container>
    )
}