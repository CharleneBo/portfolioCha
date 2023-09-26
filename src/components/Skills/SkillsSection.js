import React from 'react';
import styled from 'styled-components';
import OtherSkillSection from './OtherSkillSection'

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
  flex: 2;
  background-color: rgba(105, 63, 131, 0.4);
  backdrop-filter: blur(3px);
`;

const Skills = styled.div`
  padding: 20px;
  border-radius: 2px;
`;

const MainSkillTitle = styled.div`
  font-size: 36px;
  font-weight: bold;
  color: #ffffff;
  margin-top: 0;
  text-align: center;
`;

const SkillDoubleBlock = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1rem;
`;

const SkillFrontBlock = styled.div`

`;


const SkillBackBlock = styled.div`
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

const VerticalLine = styled.div`
  position: absolute;
  content: '';
  top: 80px; 
  bottom: 10px; 
  border-left: 6px solid #ffffff;
`;

const OtherSkillBlock = styled.div`

`;


function SkillsSection() {
  return (
    <MainBlock>
      <Wrapper>
        <SkillBlock>
          <Skills>
            <MainSkillTitle>Compétences</MainSkillTitle>
            <SkillDoubleBlock>
            <VerticalLine />
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
            </SkillDoubleBlock>
          </Skills>
        </SkillBlock>
        <OtherSkillSection />
      </Wrapper>
    </MainBlock>
  );
}

export default SkillsSection;
