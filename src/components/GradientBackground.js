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
    #7E1967,
    #7E1967,
    #39007B,
    #5C0D71,
    #5C0D71,
    #A22192,
    #A22192,
    #5C0D71,
    #5C0D71,
    #39007B,
    #7E1967,
    #7E1967
  );
  background-size: 800% 100%; /* Ajustez la taille pour couvrir l'écran complet */
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  animation: ${GradientAnimation} 20s linear infinite;
  z-index: -1;
`;

function GradientBackground() {
  return <GradientWrapper />;
}

export default GradientBackground;
