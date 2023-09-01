import React from 'react';
import styled from 'styled-components';

const HeaderWrapper = styled.header`
  position: fixed;
  top: 0;
  width: 100%;
  height: 108px;
  background-color: rgba(65, 45, 0, 0.48);
  backdrop-filter: blur(10px);
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
`;

const PortfolioTitle = styled.h1`
  font-size: 96px;
  font-weight: 400;
  color: #ffffff;
  -webkit-text-stroke: 6px #ffffff;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
  margin: 10px 0; /* Ajout de marge en haut et en bas */
`;

function Header() {
  return (
    <HeaderWrapper>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <SubTitle>Présentation de mes compétences</SubTitle>
    </HeaderWrapper>
  );
}

export default Header;