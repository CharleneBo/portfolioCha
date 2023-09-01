import React from 'react';
import styled from 'styled-components';

const MainBlock = styled.div`
  display: flex;
  margin-top: 5rem; 
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
  background-color: rgba(0, 0, 0, 0.1);
`;

const LeftBlock = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const Avatar = styled.img`
  max-width: 100%;
  height: auto;
`;

const RightBlock = styled.div`
  flex: 2;
  background-color: rgba(0, 0, 0, 0.2);
  padding: 20px;
`;

const Sommaire = styled.div`
  background-color: rgba(255, 255, 255, 0.1);
  padding: 10px;
  border-radius: 5px;
`;

const SommaireTitle = styled.h3`
  font-size: 24px;
  color: #ffffff;
  margin-bottom: 10px;
`;

const SommaireList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SommaireItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const CVBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
`;

const CVText = styled.p`
  margin-right: 10px;
  font-weight: bold;
`;

const CVArrow = styled.span`
  font-size: 24px;
  cursor: pointer;
`;

function PhotoSommaire() {
  return (
    <MainBlock>
      <Wrapper>
        <LeftBlock>
          {/* Avatar */}
          <Avatar src="/image/chatsorcier.png" alt="Avatar" />
        </LeftBlock>
        <RightBlock>
          <Sommaire>
            <SommaireTitle>Sommaire :</SommaireTitle>
            <SommaireList>
              <SommaireItem>
                <Icon>🌟</Icon> Présentation
              </SommaireItem>
              <SommaireItem>
                <Icon>🌟</Icon> Compétences
              </SommaireItem>
              <SommaireItem>
                <Icon>🌟</Icon> Projets
              </SommaireItem>
              <SommaireItem>
                <Icon>🌟</Icon> Contact
              </SommaireItem>
            </SommaireList>
            <CVBlock>
              <CVArrow>➡️</CVArrow>
              <CVText>🌟 CV 🌟</CVText>
            </CVBlock>
          </Sommaire>
        </RightBlock>
      </Wrapper>
    </MainBlock>
  );
}

export default PhotoSommaire;