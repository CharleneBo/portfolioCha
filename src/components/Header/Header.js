import React from 'react';
import styled from 'styled-components';
import StarryBackground from '../StarryBackground';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
`;

const StyleTitleHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #2a2a2a;
  position: relative;
  width: 100%;
  margin: 0 auto;
  overflow: hidden;
`;

const PortfolioTitle = styled.h1`
  font-family: 'FrankRuhLibre', serif;
  font-size: 96px;
  color: #dadada;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 200;
  color: #dadada;
  margin: 0;
`;

function Header() {
  return (
    <StyledHeader>
      <StyleTitleHeader>
        <PortfolioTitle>Charlène Boccha</PortfolioTitle>
        <SubTitle>Frontend developer</SubTitle>
        <StarryBackground /> 
      </StyleTitleHeader>
    </StyledHeader>
  );
}

export default Header;
