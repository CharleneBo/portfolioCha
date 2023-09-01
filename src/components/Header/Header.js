import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: fixed;
  display: flex;
  top: 0;
  flex-direction: column; 
  width: 100%;
`;

const HeaderBackground = styled.header`
  display: flex;
  height: 5rem;
  background-color: rgba(65.45, 0, 116.88, 0.48); 
  backdrop-filter: blur(30px); 
`;

const HeaderText = styled.div`
  font-size: 2em;
  color: white; 
  margin: auto 0; 
`;

const StyleTitleHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
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
  margin: 10px 0; 
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderBackground>
      <HeaderText>Charlito Pepito</HeaderText>
      </HeaderBackground>
      <StyleTitleHeader>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <SubTitle>Présentation de mes compétences</SubTitle>
      </StyleTitleHeader>
    </StyledHeader>
    
  );
}

export default Header;