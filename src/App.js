import imgA from './images/2.jpg'
import imgB from './images/git.png'
import imgC from './images/email.png'
import imgD from './images/pd.png'
import img_kiri_1 from './images/kiribot-1.png'
import img_alrim_1 from './images/alrimbot-1.png'
import img_croll_1 from './images/crollbot-1.png'
import img_trbot_1 from './images/trbot-1.png'
import img_frontend from './images/frontend.png'
import img_backend from './images/backend.png'


import './App.css';

function App() {
  return (
    <div className='page'>
      <div className='page-content'>
        <header className='header'>
          <div>
            <p className='header-title'>Sunuk Jung</p>
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
            </ul>
            <div className='header-img-link'>
              <a href='https://github.com/ProGameLife'>
                <img className='social-img' src={imgB} />
              </a>
              <a href='mailto:chssha1538@gmail.com'>
                <img className='social-img' src={imgC} />
              </a>
            </div>
          </div>
        </header>
        <div className='content-area'>
          <div>
            <ul>
              <li><a href='#aboutme'>About me</a></li>
              <li><a href='#skills'>Skills</a></li>
              <li><a href='#projects'>Projects</a></li>
              <li><a href='#career'>Career</a></li>
            </ul>
          </div>
          <div id='about' className='about-area'>
            <div className='title-area'>
              <span className='menu-title'>ABOUT ME</span>
            </div>
            <div className=''>

            </div>
          </div>
          <div id='skills' className='skill-area'>
            <div className='title-area'>
              <span className='menu-title'>SKILLS</span>
            </div>
            <div className='skillsl-area'>
              <div className='frontend-area'>
                <div className='skill-title'>Frontend</div>
                <img src={img_frontend}/>
              </div>
              <div className='backend-area'>
                <div className='skill-title'>Backtend</div>
                <img src={img_backend}/>
              </div>
            </div>
          </div>
          <div id='projects' className='project-area'>
            <div className='title-area'>
              <span className='menu-title'>PROJECTS</span>
            </div>
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>키리봇</h1>
                </div>
              <div className='Project-content-box'>
                <div className='img-box'>
                  <img src={img_kiri_1}/>
                </div>
                <div className='project-text-area'>
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
              </div>
            </div> 
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>크롤봇</h1>
                </div>
              <div className='Project-content-box'>
                <div className='img-box'>
                  <img src={img_croll_1}/>
                </div>
                <div className='project-text-area'>
                  <b>네이버 카페의 새로운 글을 크롤링 하여 자주 사용하는 메신저인 Discord를 통해서
                  알림을 받을 수 있고 해당 글 바로가기 및 영상이 있는경우 영상까지 바로 재생 할 수
                  있도록 해주는 봇입니다.</b> 매번 카페에 들어가서 확인하는것이 번거로웠기 때문에
                  개발하게 되었습니다.
                  <p></p>
                  Pupeteer와 Node.js를 사용하여 크롤링을 구현하였습니다. 상세한 페이지 컨트롤과
                  빠른 속도로 크롤링을 할 수 있어서 좋은 경험이 되었습니다.
                </div>
              </div>
            </div> 
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>알리봇</h1>
                </div>
              <div className='Project-content-box'>
                <div className='img-box'>
                  <img src={img_alrim_1}/>
                </div>
                <div className='project-text-area'>
                  <b>트위치라는 방송 플렛폼의 방송알림을 Discord 메신저에 올 수 있도록 하는 봇입니다.</b>
                  기존에 방송알림을 해주는 Discord 봇이 있었으나 유로화로 바뀌면서 직접 개발하게 되었습니다.
                  <p></p>
                  Python과 트위치API를 사용하여 개발을 진행하였습니다. 
                </div>
              </div>
            </div> 
            <div className='project-content-area'>
              <div className='project-name'>
                  <h1>티알봇</h1>
                </div>
              <div className='Project-content-box'>
                <div className='img-box'>
                  <img src={img_trbot_1}/>
                </div>
                <div className='project-text-area'>
                  <b>TRPG(TableRollPlayingGame)을 Discord메신저에서 할 수 있도록
                  각종 명령어와 탐사자 시트 및 주사위 기능을 구현하여 통화를 진행하면서
                  게임을 할 수도 있고 채팅으로도 게임 진행이 가능하게 개발하였습니다</b>
                  <p></p>
                  TypeScript와 Prisma, Postgresql을 사용하여 개발을 진행하였으며,
                  명령어를 구현해야 하다보니 소스 최적화에 대한 좋은 경험이 된 것 같습니다.
                </div>
              </div>
            </div> 
          </div>
          <div id='career' className='career-area'>
            <div className='title-area'>
              <span className='menu-title'>CAREER</span>
            </div>
            <div className='career-colum'>
              <div className='company-area'>
                <div className='logo-area'>
                  <img src={imgD} />
                </div>
                <div className='value-area'>
                  <p>알앤비랩</p>
                  <br />
                  <p>2016.11~2018.2</p>
                  <br />
                  <p>
                    기업에 제공하는 기업형 솔루션을 개발, 유지보수, 구축 하는 기업입니다.
                    <br />
                    기술 엔지니어로 채용되어 솔루션 유지보수, 구축을 담당하였습니다.
                    <br />
                    서버 유지보수, 솔루션 배포, 각종 프론트, 백엔드 개발 유지보수를
                    <br />
                    진행하며 솔루션 엔지니어링에 필요한 역량을 키웠습니다.
                  </p>
                </div>
              </div>
              <div className='company-area'>
                <div className='logo-area'>
                  <img src={imgD} />
                </div>
                <div className='value-area'>
                  <p>피디정보통신</p>
                  <br />
                  <p>2018.2~2020.6</p>
                  <br />
                  <p>
                    보안관제 및 기업에 제공하는 기업형 솔루션 개발, 유지보수, 구축 하는 기업입니다.
                    <br />
                    기술 엔지니어로 채용 되어 동일하게 솔루션 유지보수, 구축을 담당하였으며
                    <br />
                    추가로 고객사 미팅, 솔루션 담당자 교육, 신입 및 개발 엔지니어의 사수 역할 등의
                    <br />
                    기타 업무까지 함께 하였습니다.
                    <br /><br />
                    |솔루션 유지보수
                    <ul>
                      <li>고객사 요청에 따른 소스의 커스터마이징</li>
                      <li>솔루션 장애지원</li>
                      <li>사용자 관리자 쿼리, 메뉴얼 제공</li>
                      <li>고객사 정기점검 진행</li>
                      <li>관리자 교육</li>
                    </ul>
                    <br /><br />
                    |솔루션 구축
                    <br />
                    <ul>
                      <li>아파치 톰캣, 각종 DB를 활용하여 서비스 구축</li>
                      <li>이중화, 삼중화, SSL, SMTP 연동 작업</li>
                      <li>솔루션 망연계 연동 진행</li>
                      <li>고객 요청에 따른 커스터마이징 진행</li>
                    </ul>
                    <br />
                    |기타 업무
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