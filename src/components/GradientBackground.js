import React from 'react';
import styled, { keyframes } from 'styled-components';


const GradientWrapper = styled.div`
  background: linear-gradient(
    to right,
    #7E1967,
    #5C0D71,
    #5C0D71,
    #7E1967
  );
  background-size: 800% 100%;
  width: 100vw;
  height: 100vh;
  position: absolute;
  top: 0;
  left: 0;
  z-index: -1; 
`;


function GradientBackground() {
  return <GradientWrapper />;
}

export default GradientBackground;
