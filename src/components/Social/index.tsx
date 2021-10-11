import React from 'react';
import Link from 'next/link';
import * as S from './styles'


interface ISocial {
    data: {
        name: string;
        path: string;
        text: string;
        icon: React.ReactNode;
    }
}

export const Social = ({ data: { name, path, text, icon }}: ISocial) => {
    return (
        <Link href={path}>
            <a>
                <S.Container>
                    <S.Icon>{icon}</S.Icon>
                    <S.Name>{name}</S.Name>   
                    <S.Text>{text}</S.Text>
                </S.Container>
            </a>
        </Link>
    )
}