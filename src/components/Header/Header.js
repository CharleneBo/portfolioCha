import React from 'react';
import styled from 'styled-components';
import StarryBackground from '../StarryBackground';

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
  background-color: rgba(105, 63, 131, 0.4); /* Couleur de fond violette pour HeaderBackground */
`;

const HeaderText = styled.div`
  font-size: 2em;
  color: #f0f0f0;
  margin: auto 0;
`;

const StyleTitleHeader = styled.header`
  display: flex;
  flex-direction: column;
  text-align: center;
  background: linear-gradient(to right, #7E1967, #5C0D71, #5C0D71, #7E1967);
  position:relative;
  width: 50%; 
  margin: 0 auto; 
  overflow: hidden; 
`;



const PortfolioTitle = styled.h1`
  font-family: 'FrankRuhLibre', serif;
  font-size: 96px;
  color: #f0f0f0;
  margin-top: 3rem;
  margin-bottom: 1rem;
`;

const SubTitle = styled.h2`
  font-size: 36px;
  font-weight: 200;
  color: #f0f0f0;
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
        <StarryBackground /> {/* Ajoutez ici le fond d'étoiles */}
      </StyleTitleHeader>
    </StyledHeader>
  );
}

export default Header;
