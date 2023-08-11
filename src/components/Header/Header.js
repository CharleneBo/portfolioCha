// components/Header.js
import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  padding: 20px;
  background-color: rgba(128, 128, 128, 0.5); /* Gris semi-transparent */
  backdrop-filter: blur(10px); /* Effet de flou */
  text-align: center;
  font-size: 2em;
  color: white;
`;

function Header() {
  return <StyledHeader>Bienvenue dans mon portfolio !</StyledHeader>;
}

export default Header;
