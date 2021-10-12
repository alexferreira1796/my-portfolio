import * as S from './styles'
import { TitleSection } from '../TitleSection';

import { Skills as SkillsData } from '../../utils/skills';
import { List } from './List';

export const Skills = () => {
    return (
        <S.Container id="my-skills">
            <TitleSection>My Skills</TitleSection>

            <S.ContainerSkills>
                {
                    SkillsData && SkillsData.map(({name, icon}) => {
                        return (
                            <List key={name}>
                                {icon}
                            </List>
                        )
                    })
                }
            </S.ContainerSkills>
        </S.Container>
    )
}