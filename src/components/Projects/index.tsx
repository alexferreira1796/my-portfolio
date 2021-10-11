import * as S from './styles';
import { TitleSection } from '../TitleSection';
import { List } from './List';

import { Projects as DataProjects } from '../../utils/projects'

export const Projects = () => {
    return (
        <S.Container>
            <TitleSection>Projects</TitleSection>

            <S.ContainerList>
                {
                    DataProjects && DataProjects.map((item) => {
                        return (
                            <List 
                                key={item.id} 
                                data={item}
                            />
                        )
                    })
                }
            </S.ContainerList>
        </S.Container>
    )
}