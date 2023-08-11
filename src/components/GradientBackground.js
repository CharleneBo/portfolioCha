import React from 'react';
import styled, { keyframes } from 'styled-components';

const GradientAnimation = keyframes`
  0%, 10% {
    background-position: 0% 50%;
  }
  80%, 100% {
    background-position: 100% 50%;
  }
`;

const GradientWrapper = styled.div`
  background: linear-gradient(
    to right,
    #000033,
    #000033,
    #000066,
    #4B0082,
    #4B0082,
    #000066,
    #000066,
    #4B0082,
    #4B0082,
    #000066,
    #000033,
    #000033
  );
  background-size: 800% 100%; /* Ajustez la taille pour couvrir l'écran complet */
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${GradientAnimation} 20s linear infinite;
`;

function GradientBackground() {
  return <GradientWrapper />;
}

export default GradientBackground;
