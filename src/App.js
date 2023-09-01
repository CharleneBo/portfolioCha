import React from 'react';
import styled from 'styled-components';
// import Background from './components/Background';
// import GradientBackground from './components/GradientBackground';
// import StarryBackground from './components/StarryBackground';
import Header from './components/Header/Header';
import PhotoSommaire from './components/PhotoSommaire/Sommaire';

const AppWrapper = styled.div`
  display: flex;
  flex-direction: column;
  background-color: black;
  height: 100vh;
`;

function App() {
  return (
    <AppWrapper>
      {/* <Background />
      <GradientBackground />
      <StarryBackground /> */}
      <Header />
      <PhotoSommaire />
    </AppWrapper>
  );
}

export default App;
