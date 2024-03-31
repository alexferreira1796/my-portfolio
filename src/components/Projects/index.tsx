import * as S from "./styles";
import { TitleSection } from "../TitleSection";
import { List } from "./List";

import { Projects as dataProjects } from "../../utils/projects";

export const Projects = () => {
  return (
    <S.Container id="projects">
      <TitleSection text="projects.title" />
      <S.ContainerList>
        {dataProjects &&
          dataProjects.map((item) => {
            return <List key={item.id} data={item} />;
          })}
      </S.ContainerList>
    </S.Container>
  );
};
