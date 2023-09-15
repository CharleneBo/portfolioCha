import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../../image/chatsorcier.png';;

const MainBlock = styled.div`
  display: flex;
  margin-top: 1rem; 
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  width: 100%;
  padding: 20px;
`;

const LeftBlock = styled.div`
  flex: 1;
  margin-right: 20px;
`;

const Avatar = styled.img`
  
  margin-left: 3rem;
  max-width: 100%;
  height: auto;
  width: 20rem;
`;

const RightBlock = styled.div`
  flex: 2;
  background-color: rgba(  105, 63, 131, 0.4);
  
`;

const Sommaire = styled.div`
  padding: 10px;
  border-radius: 5px;
`;

const SommaireTitle = styled.h3`
  font-size: 36px;
  color: #ffffff;
`;

const SommaireList = styled.ul`
  list-style: none;
  padding: 0;
`;

const SommaireItem = styled.li`
  margin-bottom: 5px;
  display: flex;
  align-items: center;
  color: white;
  font-size: 26px;
`;

const Icon = styled.span`
  margin-right: 5px;
`;

const CVBlock = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  color: white;
`;

const CVText = styled.p`
  margin-right: 10px;
  font-weight: bold;
  font-size: 30px;
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
          <Avatar src={AvatarImage} alt="Avatar" />
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