import React from 'react';
import styled from 'styled-components';
import Project from './Project';

const StyledHeader = styled.header`
  display: flex;
  flex-direction: column;
  padding: 1rem;
`;

const StyleTitleHeader = styled.header`
  display: flex;
  background-color: #2a2a2a;
  height: 5rem;
  margin-bottom: 0.7rem;
`;

const StyleTitleHeaderText = styled.h2`
  text-align: center;
  font-size: 2.6rem;
  margin: 0 auto;
  color: #dadada;
  padding-top: 0.7rem;
`;


function HeaderProject() {
  return (
    <StyledHeader>
      <StyleTitleHeader>
        <StyleTitleHeaderText>🌟 Mes projets 🌟</StyleTitleHeaderText>
      </StyleTitleHeader>
      <Project/>
    </StyledHeader>
  );
}

export default HeaderProject;
