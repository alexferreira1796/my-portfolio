import React from 'react';
import * as S from './styles';

interface IList {
    data: {
        name: string;
        description: string;
        image: string;
        path: string
    }
}

export const List = ({ data: { name, description, image, path } }: IList) => {
    return (
        <S.Container>
            
            <S.Photo image={image} />

            <S.ContainerDesc>
                <S.Title>{name}</S.Title>
                <S.Description>{description}</S.Description>
            </S.ContainerDesc>
        </S.Container>
    )
}