import { Title } from "../components/Title";
import { Header } from "../components/Header";
import { SectionHello } from '../components/SectionHello'
import * as S from "../global/styles/home";

const Home = () => {
  return (
    <S.Container>
      <Title />
      <Header />
      <SectionHello />
    </S.Container>
  )
}

export default Home
