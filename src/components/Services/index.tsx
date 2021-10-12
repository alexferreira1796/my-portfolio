import * as S from './styles'
import { TitleSection } from '../TitleSection'
import { List } from './List';

import { RiCodeView, RiSmartphoneFill } from "react-icons/ri";
import { ImDatabase } from "react-icons/im";

export const Services = () => {
    return (
        <S.Container id="services">
            <TitleSection>Services</TitleSection>

            <S.ContainerList>
                <List title="Website creation">
                    <RiCodeView />
                </List>
                <List title="Responsive sites">
                    <RiSmartphoneFill />
                </List>
                <List title="Back-end">
                    <ImDatabase />
                </List>
            </S.ContainerList>

        </S.Container>
    )
}