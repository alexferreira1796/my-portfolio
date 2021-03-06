import { Title } from "../components/Title";
import { Header } from "../components/Header";
import { SectionHello } from '../components/SectionHello';
import { About } from '../components/About';
import { Projects } from '../components/Projects';
import { Services } from '../components/Services';
import { Skills } from '../components/Skills';
import { Footer } from '../components/Footer';
import * as S from "../global/styles/home";

const Home = () => {
  return (
    <>
      <S.Container>
        <Title />
        <Header />
        <SectionHello />
        <About />
        <Projects />
        <Services />
        <Skills />
      </S.Container>
      <Footer />
    </>
  )
}

export default Home
