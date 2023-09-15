import React from 'react';
import styled from 'styled-components';

const StyledHeader = styled.header`
  position: relative;
  display: flex;
  top: 0;
  flex-direction: column; 
  width: 100%;
`;

const HeaderBackground = styled.header`
  display: flex;
  height: 5em;
  flex-direction: row; 
  justify-content: space-around;
  backdrop-filter: blur(3px); 
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
  font-family: 'FrankRuhLibre', serif;
  font-size: 96px;
  color: #ffffff;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 200;
  color: #ffffff;
  margin: 0; 
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderBackground>
      <HeaderText>Présentation</HeaderText>
      <HeaderText>Compétences</HeaderText>
      <HeaderText>Projets</HeaderText>
      <HeaderText>Contact</HeaderText>
      </HeaderBackground>
      <StyleTitleHeader>
      <PortfolioTitle>Charlène Boccha</PortfolioTitle>
      <SubTitle>Frontend developer</SubTitle>
      </StyleTitleHeader>
    </StyledHeader>
    
  );
}

export default Header;