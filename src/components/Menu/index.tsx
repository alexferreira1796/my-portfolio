import Link from 'next/link'
import * as S from './styles';
import { Menu as Options } from '../../utils/menu'

export const Menu = () => {
    return (
        <S.Menu>
            <S.ListMenu>
                {
                    Options && Options.map(({id, name, tag, active}) => {
                        const activeClass = (active) ? "active" : "";
                        return (
                            <S.List key={id}>
                                <Link 
                                    href={tag}
                                >
                                    <a>{name}</a>
                                </Link>
                            </S.List>
                        )
                    })
                }
            </S.ListMenu>
        </S.Menu>
    )
}