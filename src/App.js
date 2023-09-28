import React from 'react';
import styled from 'styled-components';
import Header from './components/Header/Header';
import Background from './components/Background';
import PresentationSection from './components/Presentation/PresentationSection';
import SkillsSection from './components/Skills/SkillsSection';
const AppWrapper = styled.div`
  ${'' /* background-color: black;
  height: 100vh; */}
`;

function App() {
  return (
    <AppWrapper>
      <Header />
      <PresentationSection />
      <SkillsSection />
      <Background />
    </AppWrapper>

  );
}

export default App;
