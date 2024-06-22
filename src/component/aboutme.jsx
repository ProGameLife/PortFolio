import styled from 'styled-components';

const AboutContainer = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  height: 80vh;
`;

const TitleArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  padding-bottom: 50px;
`;

const MainMenuTitle = styled.p`
  font-size: 40px;
  font-weight: 800;
  letter-spacing: 0.15rem;
  margin: 0;
  text-align: center;
`;

const MainMenuSubtitle = styled.p`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 0.15rem;
  margin: 0;
`;

const MoreViewButton = styled.a`
  text-decoration: none;
  align-self: center;
`;

const AboutMe = () => (
  <AboutContainer id="aboutme">
    <TitleArea>
      <MainMenuTitle>다재다능한 사람이 되기위해 노력하는 개발자</MainMenuTitle>
      <br />
      <MainMenuSubtitle>Backend 개발자 포트폴리오</MainMenuSubtitle>
    </TitleArea>
  </AboutContainer>
);

export default AboutMe;
