import styled from 'styled-components';
import imgA from '../images/2.jpg';
import imgB from '../images/git.png';
import imgC from '../images/email.png';

const HeaderContainer = styled.header`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 380px;
  height: 100%;
  max-height: 80vh;
  min-height: inherit;
  text-align: center;
  padding: 20px 30px;
  overflow: auto;
  align-items: center;
  background-color: #373942;
`;

const HeaderTitle = styled.p`
  text-align: center;
  font-size: 35px;
  letter-spacing: 2px;
  font-weight: bolder;
  color: #ffeb3b;
  margin-top: 10px;
  font-family: 'Poppins', Helvetica, sans-serif;
  margin-bottom: 10px;
`;

const HeaderSubtitle = styled.h4`
  padding-top: 10px;
  margin-top: 0;
  color: #ffeb3b;
`;

const HeaderPhoto = styled.div`
  display: flex;
  width: 180px;
  height: 180px;
  margin: 30px auto;
  z-index: 1;
`;

const Photo = styled.img`
  display: block;
  width: 100%;
  height: 100%;
  background-color: #fff;
  border: 3px solid #fff;
  border-radius: 50%;
  object-fit: cover;
  overflow: hidden;
`;

const SocialLinks = styled.div`
  display: flex;
  width: 100%;
  height: inherit;
  flex-direction: column;
  justify-content: center;
  flex-wrap: wrap;
`;

const SocialList = styled.ul`
  display: flex;
  list-style: none;
  flex-direction: column;
  margin: 0;
  padding: 0;
`;

const SocialItem = styled.li`
  display: flex;
  align-content: center;
  flex-direction: column;
`;

const ImageLink = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const SocialImage = styled.img`
  width: 25px;
  height: 25px;
  margin: 20px;
`;

const SkillsContainer = styled.div`
  width: 100%;
`;

const SkillsArea = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const SkillCard = styled.div`
  margin: 10px 0;
  text-align: center;
  color: #fff;
`;

const SkillTitle = styled.div`
  font-size: 20px;
  font-weight: 700;
  margin-bottom: 5px;
`;

const Header = () => (
  <HeaderContainer>
    <HeaderTitle>Sunuk Jung</HeaderTitle>
    <HeaderSubtitle>Backend Developer</HeaderSubtitle>
    <HeaderPhoto>
      <Photo src={imgA} alt="face" />
    </HeaderPhoto>
    <SocialLinks>
      <SocialList>
        <ImageLink>
          <a href="https://github.com/ProGameLife">
            <SocialImage src={imgB} alt="GitHub" />
          </a>
          <a href="mailto:chssha1538@gmail.com">
            <SocialImage src={imgC} alt="Email" />
          </a>
        </ImageLink>
      </SocialList>
    </SocialLinks>
    <SkillsContainer>
      <SkillsArea>
        <SkillCard>
          <SkillTitle>Frontend</SkillTitle>
          <p>ReactJS, ViteJS, HTML, NextJS, CSS, SCSS, Styled, Javascript, TypeScript</p>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Backend</SkillTitle>
          <p>NodeJS, NestJS, TypeOrm, Prisma, Python, Java</p>
        </SkillCard>
        <SkillCard>
          <SkillTitle>Database</SkillTitle>
          <p>Mysql, Maria, Mssql, Oracle, Postgresql</p>
        </SkillCard>
        <SkillCard>
          <SkillTitle>AWS</SkillTitle>
          <p>Lambda, DynamoDB, EC2, S3, RDS</p>
        </SkillCard>
      </SkillsArea>
    </SkillsContainer>
  </HeaderContainer>
);

export default Header;
