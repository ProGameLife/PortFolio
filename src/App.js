import imgA from './images/2.jpg'
import imgB from './images/git.png'
import imgC from './images/email.png'
import img_kiri_1 from './images/kiribot-1.png'
import img_kiri_2 from './images/kiribot-2.png'
import img_kiri_3 from './images/kiribot-3.png'
import img_alrim_1 from './images/alrimbot-1.png'
import img_croll_1 from './images/crollbot-1.png'
import img_trbot_1 from './images/trbot-1.png'
import img_trbot_2 from './images/trbot-2.png'
import img_trbot_3 from './images/trbot-3.png'
import img_frontend from './images/frontend.png'
import img_backend from './images/backend.png'

import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import { HiOutlineChevronDoubleDown } from "react-icons/hi";

import styled from 'styled-components'
import { flexDirection, space } from 'styled-system'

import './App.css';

const ProjectContentBox = styled.div`
  ${flexDirection}
`;

const ProjectTextArea = styled.div`
  ${space}
`;

const SkillsArea = styled.div`
  ${flexDirection}
`;

function App() {
  return (
    <div className='page'>
      <div className='page-content'>
        <header className='header'>
          <div>
            <p className='header-title'>Sunuk Jung</p>
            <h4>Backtend Developer</h4>
          </div>
          <div className='header-photo'>
            <img src={imgA} />
          </div>
          <div className='header-social'>
            <ul>
              <li>
                <p className='value'>980823</p>
              </li>
              <li>
                <p className='value'>+82 10 4022 1359</p>
              </li>
              <li>
                <p className='value'>ISFP</p>
              </li>
            </ul>
            <ProjectContentBox className='header-img-link'
            flexDirection={['column', 'column', 'column', 'row']}>
              <a href='https://github.com/ProGameLife'>
                <img className='social-img' src={imgB} />
              </a>
              <a href='mailto:chssha1538@gmail.com'>
                <img className='social-img' src={imgC} />
              </a>
            </ProjectContentBox>
          </div>
          <ul className='main-menu'>
            <li><a href='#aboutme'>About me</a></li>
            <li><a href='#skills'>Skills</a></li>
            <li><a href='#projects'>Projects</a></li>
            <li><a href='#career'>Career</a></li>
          </ul>
        </header>
        <div className='content-area'>
          <div id='aboutme' className='about-area'>
            <div className='main-title-area'>
              <p className='main-menu-title'>세상을 편하게 살기위해 노력하는 개발자</p>
              <br />
              <p className='main-menu-sub-title'>Backend 개발자 포트폴리오</p>
            </div>
            {/* <div className='aboutme-center'>
              저는 평소에 백엔드 개발을 진행하였으며 Node.js와 TypeScript를
              주로 다루었습니다.<br />
              해당 포트폴리오 페이지는 저의 소개글이자, 개인 프로젝트 등 개발일지를<br />
              기록하기 위해 만들어진 저의 웹페이지 입니다.<br />
              저에게 궁금하신 사항은 언제든지 연락 부탁드립니다.<br />
              감사합니다 !<br />
            </div> */}
            <a href='#skills' className='more-view-button'>
              <HiOutlineChevronDoubleDown size={46} color={'#fff'}/>
            </a>
          </div>
          <div id='skills' className='skill-area'>
            <div className='title-area'>
              <span className='menu-title'>SKILLS</span>
            </div>
            <SkillsArea 
              className='skills-area' 
              flexDirection={['column', 'column', 'column', 'row']}
            >
              <div className='frontend-area'>
                <div className='skill-title'>Frontend</div>
                <img alt='frontend' src={img_frontend}/>
              </div>
              <div className='backend-area'>
                <div className='skill-title'>Backtend</div>
                <img alt='backend' src={img_backend}/>
              </div>
            </SkillsArea>
          </div>
          <div id='projects' className='project-area'>
            <div className='title-area'>
              <span className='menu-title'>PROJECTS</span>
            </div>
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>키리봇</h1>
              </div>
              <ProjectContentBox 
                className='project-content-box' 
                flexDirection={['column', 'column', 'column', 'row']}>
                <div className='img-box'>
                  <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    autoPlay={true} 
                    showStatus={false} 
                    swipeable={false} 
                    infiniteLoop={true} >
                    <div>
                        <img src={img_kiri_1} />
                    </div>
                    <div>
                        <img src={img_kiri_2} />
                    </div>
                    <div>
                        <img src={img_kiri_3} />
                    </div>              
                  </Carousel>
                </div>
                <ProjectTextArea 
                  className='project-text-area'
                  mt={[32, 32, 32, 0]}
                  mb={[10, 10, 10, 0]}>
                  <div className='project-text-box'>
                    <b>보고싶은 유튜브의 새 영상을 평소에 자주 사용하는 메신저인 Discord를 통해서
                    알림을 받을 수 있고 바로 영상재생이 가능하게 해주는 봇입니다.</b> 데이터베이스를
                    활용하여 자신이 보고싶은 유튜브 채널을 추가 / 삭제가 가능하게 만들었으며
                    지인들과 함께 쓰기위해 개발을 하게 되었습니다.
                    <p></p>
                    TypeScript를 사용하여 개발을 진행하였으며, 기존에 node.js만 사용했던
                    프로젝트 보다 오류가 확연히 줄어드는 것을 느낄 수 있었으며, Prisma와
                    PostgreSql을 사용하며 데이터베이스에 대한 지식 또한 더욱 탄탄해지는
                    경험을 쌓을 수 있었습니다.
                  </div>
                  <div className='project-function-area'>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ 주요 기능
                      </div>
                      <div className='project-function-value'>
                        명령어를 통해 원하는 채널 등록 ∙ 삭제 ∙ 수정 가능
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Backend
                      </div>
                      <div className='project-function-value'>
                        Node.js, prisma
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Frontend
                      </div>
                      <div className='project-function-value'>
                        TypeScript, discord.js
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Database
                      </div>
                      <div className='project-function-value'>
                        PostgreSql
                      </div>
                    </div>
                    <div className='project-description-deployment'>
                      <div className='project-function-title'>
                      ✔ Deployment
                      </div>
                      <div className='project-function-value'>
                        Heroku
                      </div>
                    </div>
                  </div>
                </ProjectTextArea>
              </ProjectContentBox>
            </div>
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>크롤봇</h1>
              </div>
              <ProjectContentBox 
                className='project-content-box'
                flexDirection={['column', 'column', 'column', 'row']}>
                <div className='img-box'>
                  <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    autoPlay={true} 
                    showStatus={false} 
                    swipeable={false} 
                    infiniteLoop={true} >
                    <div>
                        <img src={img_croll_1} />
                    </div>
                  </Carousel>
                </div>
                <ProjectTextArea 
                  className='project-text-area'
                  mt={[32, 32, 32, 0]}>
                  <div className='project-text-box'>
                    <b>네이버 카페의 새로운 글을 크롤링 하여 자주 사용하는 메신저인 Discord를 통해서
                    알림을 받을 수 있고 해당 글 바로가기 및 영상이 있는경우 영상까지 바로 재생 할 수
                    있도록 해주는 봇입니다.</b> 매번 카페에 들어가서 확인하는것이 번거로웠기 때문에
                    개발하게 되었습니다.
                    <p></p>
                    Pupeteer와 Node.js를 사용하여 크롤링을 구현하였습니다. 상세한 페이지 컨트롤과
                    빠른 속도로 크롤링을 할 수 있어서 좋은 경험이 되었습니다.
                  </div>
                  <div className='project-function-area'>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ 주요 기능
                      </div>
                      <div className='project-function-value'>
                        네이버 카페에 새글이 올라오면 자동 크롤링 하여 출력
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Backend
                      </div>
                      <div className='project-function-value'>
                        Node.js
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Frontend
                      </div>
                      <div className='project-function-value'>
                        Pupeteer, discord.js
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Deployment
                      </div>
                      <div className='project-function-value'>
                        Heroku
                      </div>
                    </div>
                  </div>
                </ProjectTextArea>
              </ProjectContentBox>
            </div>
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>티알봇</h1>
                </div>
              <ProjectContentBox 
                className='project-content-box'
                flexDirection={['column', 'column', 'column', 'row']}>
                <div className='img-box'>
                  <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    autoPlay={true} 
                    showStatus={false} 
                    swipeable={false} 
                    infiniteLoop={true}
                    autoFocus={true} >
                    <div>
                        <img className='project-img' src={img_trbot_1} />
                    </div>
                    <div>
                        <img className='project-img' src={img_trbot_2} />
                    </div>
                    <div>
                        <img className='project-img' src={img_trbot_3} />
                    </div>         
                  </Carousel>
                </div>
                <ProjectTextArea 
                  className='project-text-area'
                  mt={[32, 32, 32, 0]}>
                  <div className='project-text-box'>
                    <b>TRPG(TableRollPlayingGame)을 Discord메신저에서 할 수 있도록
                    각종 명령어와 탐사자 시트 및 주사위 기능을 구현하여 통화를 진행하면서
                    게임을 할 수도 있고 채팅으로도 게임 진행이 가능하게 개발하였습니다</b>
                    <p></p>
                    TypeScript와 Prisma, Postgresql을 사용하여 개발을 진행하였으며,
                    명령어를 구현해야 하다보니 소스 최적화에 대한 좋은 경험이 된 것 같습니다.
                  </div>
                  <div className='project-function-area'>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ 주요 기능
                      </div>
                      <div className='project-function-value'>
                        탐사자 시트 제작 가능 ∙ 다양한 명령어, 다이스 기능 제공 ∙ DB를 사용한 템플릿 저장, 불러오기 
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Backend
                      </div>
                      <div className='project-function-value'>
                        Node.js, Prisma
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Frontend
                      </div>
                      <div className='project-function-value'>
                        TypeScript, discord.js
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Database
                      </div>
                      <div className='project-function-value'>
                        PostgreSql
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Deployment
                      </div>
                      <div className='project-function-value'>
                        Heroku
                      </div>
                    </div>
                  </div>
                </ProjectTextArea>
              </ProjectContentBox>
            </div>
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>알리봇</h1>
                </div>
              <ProjectContentBox 
                className='project-content-box'
                flexDirection={['column', 'column', 'column', 'row']}>
                <div className='img-box'>
                  <Carousel 
                    showArrows={true} 
                    showThumbs={false} 
                    autoPlay={true} 
                    showStatus={false} 
                    swipeable={false} 
                    infiniteLoop={true}
                    autoFocus={true}>
                    <div>
                        <img className='project-img' src={img_alrim_1} />
                    </div>
                  </Carousel>
                </div>
                <ProjectTextArea 
                  className='project-text-area'
                  mt={[32, 32, 32, 0]}>
                  <div className='project-text-box'>
                    <b>트위치라는 방송 플렛폼의 방송알림을 Discord 메신저로 받을 수 있도록 하는 봇입니다.</b>
                    기존에 방송알림을 해주는 Discord 봇이 있었으나 유로화로 바뀌면서 직접 개발하게 되었습니다.
                    <p></p>
                    자신이 원하는 방송인이 자신이 원하는 게임을 할 때만 알림을 받거나, 방송이 켜졌을 때만 알림을
                    받는 등 여러가지 사용자가 원하는 정책으로 알림을 정할 수 있습니다.
                    <p></p>
                    Python과 트위치API를 사용하여 개발을 진행하였습니다. 
                  </div>
                  <div className='project-function-area'>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ 주요 기능
                      </div>
                      <div className='project-function-value'>
                        특정 방송인의 방송알림 ∙ 특정 카테고리의 방송 진행 시 알림 ∙ 알림 정책의 세분화 가능
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Backend
                      </div>
                      <div className='project-function-value'>
                        Python
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Frontend
                      </div>
                      <div className='project-function-value'>
                        discord.js
                      </div>
                    </div>
                    <div className='project-description'>
                      <div className='project-function-title'>
                      ✔ Deployment
                      </div>
                      <div className='project-function-value'>
                        Heroku
                      </div>
                    </div>
                  </div>
                </ProjectTextArea>
              </ProjectContentBox>
            </div>  
          </div>
          <div id='career' className='career-area'>
            <div className='title-area-career'>
              <span className='menu-title'>CAREER</span>
            </div>
            <div className='career-colum'>
              <div className='company-area'>
                <div className='value-area'>
                  <h2>(주) 알앤비랩</h2>
                  <p>2016.11~2018.2</p>
                  <p className='company-explanation'>
                    기업에 제공하는 기업형 솔루션을 개발, 유지보수, 구축 하는 기업입니다.
                    <br />
                    <br />
                    추후 <b>"피디정보통신" </b>으로 인수합병 되었습니다.
                  </p>
                </div>
              </div>
              <div className='company-area'>
                <div className='value-area'>
                  <h2>(주) 피디정보통신</h2>
                  <p>2018.2~2020.6</p>
                  <p className='company-explanation'>
                    보안관제 및 기업에 제공하는 기업형 솔루션 개발, 유지보수, 구축 하는 기업입니다.
                    <br />
                    기술 엔지니어로 채용 되어 동일하게 솔루션 유지보수, 구축을 담당하였으며
                    <br />
                    추가로 고객사 미팅, 솔루션 담당자 교육, 신입 및 개발 엔지니어의 사수 역할 등의
                    <br />
                    기타 업무까지 함께 하였습니다.
                  </p>
                  <p>
                    <br />
                    <li className='career-s-title'><b>솔루션 유지보수</b></li>
                    <br />
                    <ul>
                      <li>고객사 요청에 따른 소스의 커스터마이징</li>
                      <li>솔루션 장애지원</li>
                      <li>사용자 관리자 쿼리, 메뉴얼 제공</li>
                      <li>고객사 정기점검 진행</li>
                      <li>관리자 교육</li>
                    </ul>
                    <br /><br />
                    <li className='career-s-title'><b>솔루션 구축</b></li>
                    <br />
                    <ul>
                      <li>아파치 톰캣, 각종 DB를 활용하여 서비스 구축</li>
                      <li>이중화, 삼중화, SSL, SMTP 연동 작업</li>
                      <li>솔루션 망연계 연동 진행</li>
                      <li>고객 요청에 따른 커스터마이징 진행</li>
                    </ul>
                    <br /><br />
                    <li className='career-s-title'><b>기타 업무</b></li>
                    <br />
                    <ul>
                      <li>고객사 별 인수인계 자료 작성</li>
                      <li>신입 개발 / 엔지니어 업무교육 / 할당</li>
                    </ul>
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default App;