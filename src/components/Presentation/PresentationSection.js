import React from 'react';
import styled from 'styled-components';
import AvatarImage from '../../image/chatsorcier.png';

const MainBlock = styled.div`
  display: flex;
  margin-top: 1rem;
`;

const Wrapper = styled.div`
  display: flex;
  justify-content: space-around;
  width: 100%;
  padding: 1rem;
`;

const LeftBlock = styled.div`
  flex: 1;
  margin-right: 1rem;
`;

const Avatar = styled.img`
  margin-top: 4rem;
  margin-left: 3rem;
  max-width: 100%;
  height: auto;
  width: 20rem;
`;

const RightBlock = styled.div`
  flex: 2;
  background-color: #2a2a2a;
  backdrop-filter: blur(3px);
`;

const Presentation = styled.div`
  padding: 20px;
  border-radius: 2px;
`;

const PresentationTitle = styled.h3`
  font-size: 36px;
  color: #dadada;
  margin-top: 0;
  font-weight: 400;
`;

const PresentationText = styled.div`
  font-size: 30px;
  color: #dadada;
  word-wrap: break-word; 
  max-width: 100%; 
  font-weight: 200;
`;

function PresentationSection() {
  return (
    <MainBlock>
      <Wrapper>
        <LeftBlock>
          {/* Avatar */}
          <Avatar src={AvatarImage} alt="Avatar" />
        </LeftBlock>
        <RightBlock>
          <Presentation>
            <PresentationTitle>Présentation</PresentationTitle>
            <PresentationText>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </PresentationText>
          </Presentation>
        </RightBlock>
      </Wrapper>
    </MainBlock>
  );
}

export default PresentationSection;
