import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  width: 100%;
  padding: 20px;
`;

const SkillBlock = styled.div`
  background-color: #2a2a2a;
`;

const Skills = styled.div`
  padding: 1rem;
  border-radius: 2px;
`;

const MainSkillTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #dadada;
  padding-bottom:1rem ;
  text-align: center;
  border-bottom: 2px solid #fff;
`;

const SkillDoubleBlock = styled.div`
  display: flex;
  justify-content: space-around;
`;

const SkillFrontBlock = styled.div`

`;


const SkillBackBlock = styled.div`
`;

const OtherSkillBlock = styled.div`
 
`;

const SkillTitle = styled.h3`
  font-size: 36px;
  color: #dadada;
  margin-bottom: 10px;
`;

const SkillText = styled.div`
  font-size: 30px;
  color: #dadada;
`;

const VerticalLine = styled.div`
  position: absolute;
  content: '';
  top: 80px; 
  bottom: 10px; 
  border-left: 6px solid #dadada;
`;



function SkillsSection() {
  return (
    <MainBlock>
      <Wrapper>
        <SkillBlock>
          <Skills>
            <MainSkillTitle>Compétences</MainSkillTitle>
            <SkillDoubleBlock>
              <SkillFrontBlock>
                <SkillTitle>Front-end</SkillTitle>
                <SkillText>- CSS</SkillText>
                <SkillText>- HTML</SkillText>
                <SkillText>- JS</SkillText>
                <SkillText>- React.js</SkillText>
                <SkillText>- React Native</SkillText>
              </SkillFrontBlock>
              <SkillBackBlock>
                <SkillTitle>Back-end</SkillTitle>
                <SkillText>- Node.js</SkillText>
                <SkillText>- Express</SkillText>
                <SkillText>- Python</SkillText>
                <SkillText>- JS</SkillText>
              </SkillBackBlock>
              <OtherSkillBlock>
                <SkillTitle>Autres</SkillTitle>
                <SkillText>- Bash</SkillText>
                <SkillText>- VScode</SkillText>
                <SkillText>- Github</SkillText>
                <SkillText>- pgAdming/mangooseDB</SkillText>
                <SkillText>- Essai maquette</SkillText>
                <SkillText>- Agilité</SkillText>
              </OtherSkillBlock>
            </SkillDoubleBlock>
          </Skills>
        </SkillBlock>
      </Wrapper>
    </MainBlock>
  );
}

export default SkillsSection;
