import React from 'react';
import styled from 'styled-components';
import Background from './components/Background';
import GradientBackground from './components/GradientBackground';
import StarryBackground from './components/StarryBackground';
import Header from './components/Header/Header';

const AppWrapper = styled.div`
  position: relative;
`;

function App() {
  return (
    <div>

    
    <AppWrapper>
      <Background />
      <GradientBackground />
      <StarryBackground />
      <Header />
    </AppWrapper>
    </div>
  );
}

export default App;
