import React from 'react';
import styled from 'styled-components';

const BackgroundWrapper = styled.div`
  background-color: #bdacd1; 
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  z-index: -2; 
`;

function Background() {
  return <BackgroundWrapper />;
}

export default Background;
