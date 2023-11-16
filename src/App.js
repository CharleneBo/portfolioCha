import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Background from './components/Background';
import PresentationSection from './components/Presentation/PresentationSection';
import SkillsSection from './components/Skills/SkillsSection';
import HeaderProject from './components/Projects/Header_Project';

const AppWrapper = styled.div`
  ${'' /* background-color: black;
  height: 100vh; */}
`;

const Navbar = styled.div`
  position: sticky;
  top: 0;
  width: 100%;
  z-index: 1000;
  background-color: #262626;
  border-bottom: 2px solid #fff;
  display: flex;
  height: 4em;
  flex-direction: row;
  justify-content: space-around;
  backdrop-filter: blur(3px);
`;

const HeaderText = styled.div`
  font-size: 1.65em;
  color: #dadada;
  margin: auto 0;
`;

function App() {
  return (
    <AppWrapper>
      <Navbar>
        <HeaderText>Présentation</HeaderText>
        <HeaderText>Compétences</HeaderText>
        <HeaderText>Projets</HeaderText>
        <HeaderText>Contact</HeaderText>
      </Navbar>
      <Header />
      <PresentationSection />
      <SkillsSection />
      <HeaderProject />
      <Background />
    </AppWrapper>

  );
}

export default App;
