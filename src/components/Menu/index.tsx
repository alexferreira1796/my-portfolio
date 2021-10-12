import React from 'react';
import Link from 'next/link'
import * as S from './styles';
import { Menu as Options } from '../../utils/menu'

import { TranslateGlobal } from '../../contexts/translateGlobal';

export const Menu = () => {
    const { getTranslate } = React.useContext(TranslateGlobal);

    return (
        <S.Menu>
            <S.ListMenu>
                {
                    Options && Options.map(({id, name, tag}) => {
                        return (
                            <S.List key={id}>
                                <Link 
                                    href={tag}
                                >
                                    <a>
                                        {getTranslate(`header.menu.${[name]}`)}
                                    </a>
                                </Link>
                            </S.List>
                        )
                    })
                }
            </S.ListMenu>
        </S.Menu>
    )
}