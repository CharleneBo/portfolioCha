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
  flex-direction: row; 
  justify-content: space-between;
  height: 5rem;
  background: linear-gradient(to right, rgba(36, 36, 36, 0.2) 0%, rgba(179, 179, 179, 0.788) 50%, rgba(255, 255, 255, 0.788) 100%);
  backdrop-filter: blur(3px); 
`;

const HeaderText = styled.div`
  font-size: 2em;
  color: white; 
  margin: auto 0; 
`;

const HeaderSkills = styled.div`
font-size: 2em;
color: white; 
margin: auto 0; 
`;

const HeaderPresentation = styled.div`
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
  color: #ffffff;
  margin: 0;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 400;
  color: #ffffff;
  margin: 10px; 
`;

function Header() {
  return (
    <StyledHeader>
      <HeaderBackground>
      <HeaderText>Charlito Croutelliènne</HeaderText>
      <HeaderPresentation>Présentation</HeaderPresentation>
      <HeaderSkills>Compétences</HeaderSkills>
      </HeaderBackground>
      <StyleTitleHeader>
      <PortfolioTitle>Portfolio</PortfolioTitle>
      <SubTitle>Présentation de mes compétences</SubTitle>
      </StyleTitleHeader>
    </StyledHeader>
    
  );
}

export default Header;