import styled from 'styled-components';
import Header from './component/header';
import AboutMe from './component/aboutme';
import Projects from './component/projects';
import Career from './component/career';

const Page = styled.div`
  height: 100%;
  min-height: 100%;
  padding: 0 100px;
  overflow: hidden;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const PageContent = styled.div`
  display: flex;
  flex-direction: row;
  width: 100%;
  max-width: 1280px;
  min-height: 80vh;
  margin: 10vh auto;
  padding: 0;
  border-radius: 20px;
  background-color: #586065;
  -webkit-box-shadow: 0px 7px 23px 3px #333;
  box-shadow: 0px 7px 23px 3px #333;
`;

const ContentArea = styled.div`
  right: 0;
  background-color: #515257;
  height: 100%;
  min-height: inherit;
  max-height: 80vh;
  width: 100%;
  overflow: auto;

  &::-webkit-scrollbar {
    display: none;
  }
  -ms-overflow-style: none;  /* IE and Edge */
  scrollbar-width: none;  /* Firefox */
`;

const App = () => (
  <Page>
    <PageContent>
      <Header />
      <ContentArea>
        <AboutMe />
        <Projects />
        <Career />
      </ContentArea>
    </PageContent>
  </Page>
);

export default App;
