import React from 'react';
import styled from 'styled-components';

const StyledProjects = styled.header`
    display: flex;
    flex-direction: column;
    background-color: #2a2a2a;
`;

const StyleTitleProjects = styled.header`
    display: flex;
    ${'' /* height: 5rem; */}
`;

const StyleTitleProjectsText = styled.h2`
    color: #dadada;
    font-size: 1rem;
    margin: 0 auto;
`;

const ContentProjects = styled.div`
    display: flex;
    flex-direction: row;
`;

const ImageProject = styled.div`
    color: #dadada;
    font-size: 1rem; 
`;

const DescriptionProjects = styled.div`
    color: #dadada;
    font-size: 1rem; 
`;

const LinksProjects = styled.div`
    color: #dadada;
    font-size: 1rem; 
`;


function Project() {
  return (
    <StyledProjects>
        <StyleTitleProjects>
            <StyleTitleProjectsText> Don't be a crevette </StyleTitleProjectsText>
        </StyleTitleProjects>
        <ContentProjects>
            <ImageProject>
                
            </ImageProject>
            <DescriptionProjects>
                Don't be a crevette est une extension google chrome faites avec manifest v3, qui est pour le bien être de la personne, envoyant des notifications pour dire à celle-ci de se redresser ou boire de l'eau.
            </DescriptionProjects>
            <LinksProjects> *link ici vers github* </LinksProjects>
        </ContentProjects>
    </StyledProjects>
  );
}

export default Project;
