import React from 'react';
import styled from 'styled-components';

const OtherSkillBlock = styled.div`
  flex: 0.3;
  align-self: center; 
  text-align: center; 
  max-width: 100%; 
  background-color: rgba(105, 63, 131, 0.4);
  margin-top: 1rem;
  padding-bottom: 2rem;
  width: 30%;
`;

const SkillTitle = styled.h3`
  font-size: 36px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const SkillText = styled.div`
  font-size: 30px;
  color: #ffffff;
`;

function OtherSkillSection() {
  return (
    <OtherSkillBlock>
      <SkillTitle>Autres</SkillTitle>
      <SkillText>- Bash</SkillText>
      <SkillText>- VScode</SkillText>
      <SkillText>- Github</SkillText>
      <SkillText>- pgAdming/mangooseDB</SkillText>
      <SkillText>- Essai maquette</SkillText>
      <SkillText>- Agilité</SkillText>
    </OtherSkillBlock>
  );
}

export default OtherSkillSection;
