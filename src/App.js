import React from 'react';
import styled from 'styled-components';
import GradientBackground from './components/GradientBackground';
import StarryBackground from './components/StarryBackground';
import Header from './components/Header/Header';
import PresentationSection from './components/Presentation/PresentationSection';

const AppWrapper = styled.div`
  ${'' /* background-color: black;
  height: 100vh; */}
`;

function App() {
  return (
    <AppWrapper>
      
      <GradientBackground />
      <StarryBackground />
      <Header />
      <PresentationSection />
    </AppWrapper>

  );
}

export default App;
