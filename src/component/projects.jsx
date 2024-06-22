import styled from 'styled-components';

const ProjectsContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
`;

const CompanyProjects = styled.div`
  margin-bottom: 40px;
`;

const CompanyTitle = styled.h3`
  font-size: 24px;
  margin-bottom: 20px;
  color: #333;
`;

const ProjectCard = styled.div`
  background-color: #fff;
  padding: 20px;
  margin-bottom: 20px;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
`;

const ProjectTitle = styled.b`
  font-size: 18px;
  color: #111;
`;

const ProjectDetails = styled.ul`
  padding-left: 20px;
`;

const ProjectDetail = styled.li`
  font-size: 14px;
  color: #666;
  margin-bottom: 10px;
`;

const ProjectMainTitle = styled.h1`
  text-align: center;
`;

const Projects = () => {
  const projectsData = [
    {
      company: "AKACognitive",
      projects: [
        {
          title: "[MEK] - Fullstack",
          details: [
            "한국쪽에 제공하는 자사 상품 판매 프로젝트",
            "React.js, scss, Node.js, postgresql, S3 사용",
            "웹 페이지 개발 : SNS 로그인 연동, 관리자페이지 개발",
            "백엔드 서버 개발 : Rest API 개발, API design, SNS 로그인 연동, 상품 구매 및 구독 인증 연동 (Stripe)",
            "유지보수 및 장애지원",
          ],
        },
        {
          title: "[MEJ] - Backend",
          details: [
            "일본쪽에 제공하는 자사 상품 판매 사이트",
            "Python - chalice, DynamoDB, Lambda 사용",
            "결제연동(stripe, toss), 상품 구매 및 구독 인증 로직 구현",
            "상품 추가, 삭제 등 관리 기능 구현",
            "유지보수 및 장애지원",
          ],
        },
        {
          title: "[ESAT-J] - Backend",
          details: [
            "일본의 중학교 영어자격 시험 대비 애플리케이션 프로젝트",
            "Python, apache2, EC2, Docker, Django를 사용하는 프로젝트",
            "웹사이트에서 구매 시 Stripe 구독 정보 추가, RevenueCat과 연동하여 애플리케이션에서 연동 구현",
          ],
        },
        {
          title: "[AKA token] - Frontend",
          details: ["Web3, Metamask를 이용하여 (Dapp) 토큰 관련 프로젝트 진행 완료"],
        },
        {
          title: "[Resmart], [Alive] - Backend",
          details: [
            "학생들 뇌 트레이닝, 우울증 체크 관련 문제 프로젝트",
            "Javascript, Lambda, Bebel, Webpack 사용",
            "매일 체크하는 뇌 건강 관련 설문 알고리즘을 통해 위험 시 SMS를 통해 알림문자 발송 기능 개발",
            "유지보수 및 장애지원",
          ],
        },
        {
          title: "[Usermodel], [Edu], [Let’s go Edu], [Bach], [si-project]… - Backend",
          details: ["자사 백엔드 프로젝트 유지보수 및 장애지원"],
        },
      ],
    },
    {
      company: "피디정보통신",
      projects: [
        {
          title: "[STeP] - 솔루션엔지니어",
          details: [
            "고객사(롯데 계열사, 삼성중공업, 신영증권, 매리츠화재.. 등등 총 140개 계열사)에 솔루션 구축 진행",
            "DRM 문서반출시스템 솔루션 고객사별 si 개발 진행 및 고객사와 미팅 협의, 상주하여 솔루션 구축 등 진행",
            "Java, springFW, Apache tomcat, db - Mssql / Mysql / MariaDB / Oracle, JavaBean, JSP 등 사용",
            "고객사에 서비스 구축 미팅, Linux환경, 윈도우환경 등에 apache tomcat으로 서버 구축",
            "고객사 규모에 따라서 이중화, 삼중화 환경 구성 및 SSL 적용",
            "망연계 및 매체제어 솔루션 등 연동 경험",
            "유지보수 및 장애지원",
          ],
        },
      ],
    },
    {
      company: "알엔비랩",
      projects: [
        {
          title: "[STeP] - 솔루션엔지니어",
          details: [
            "유지보수 및 장애지원",
            "고객사 별 솔루션 가이드문서 작성 및 담당자 교육 진행",
          ],
        },
      ],
    },
    {
      company: "개인프로젝트",
      projects: [
        {
          title: "Poled-logistics-backoffice",
          details: [
            "주요 업무 : 물류관리시스템 백엔드 기능 개발",
            "담당 역할 : 백엔드 개발자",
            "기술 스택 : Node.js, TypeScript, Postgresql, Nest.js, Typeorm",
            "개발 기간 : 2023.7 ~ 2023.11 (약 4개월)",
            "개발 인원 : 2명",
            "상세 내용 : Poled 내부에서 사용하는 통합 쇼핑몰 주문서에 따른 물류 배분 및 출고검증 시스템 개발",
            "Swagger를 이용하여 API 명세서 작성",
            "주문서 업로드 기능",
            "물류 배분 기능",
            "물류 배분 결과와 물류 출고 내역 간 검증 기능",
            "엑셀 파일 다운로드 기능",
          ],
        },
        {
          title: "키리봇",
          details: [
            "보고싶은 유튜브의 새 영상을 평소에 자주 사용하는 메신저인 Discord를 통해서 알림을 받을 수 있고 바로 영상재생이 가능하게 해주는 봇입니다.",
            "데이터베이스를 활용하여 자신이 보고싶은 유튜브 채널을 추가 / 삭제가 가능하게 만들었으며 지인들과 함께 쓰기위해 개발을 하게 되었습니다.",
            "TypeScript를 사용하여 개발을 진행하였으며, 기존에 node.js만 사용했던 프로젝트 보다 오류가 확연히 줄어드는 것을 느낄 수 있었으며, Prisma와 PostgreSql을 사용하며 데이터베이스에 대한 지식 또한 더욱 탄탄해지는 경험을 쌓을 수 있었습니다.",
            "주요 기능: 명령어를 통해 원하는 채널 등록 ∙ 삭제 ∙ 수정 가능",
            "Backend: Node.js, prisma",
            "Frontend: TypeScript, discord.js",
            "Database: PostgreSql",
            "Deployment: Heroku",
            "Github: https://github.com/ProGameLife/New-Video-Bot",
          ],
        },
        {
          title: "크롤봇",
          details: [
            "네이버 카페의 새로운 글을 크롤링 하여 자주 사용하는 메신저인 Discord를 통해서 알림을 받을 수 있고 해당 글 바로가기 및 영상이 있는경우 영상까지 바로 재생 할 수 있도록 해주는 봇입니다.",
            "매번 카페에 들어가서 확인하는것이 번거로웠기 때문에 개발하게 되었습니다.",
            "Pupeteer와 Node.js를 사용하여 크롤링을 구현하였습니다. 상세한 페이지 컨트롤과 빠른 속도로 크롤링을 할 수 있어서 좋은 경험이 되었습니다.",
            "주요 기능: 네이버 카페에 새글이 올라오면 자동 크롤링 하여 출력",
            "Backend: Node.js",
            "Frontend: Pupeteer, discord.js",
            "Deployment: Heroku",
            "Github: https://github.com/ProGameLife/ISEDOLE-DISCORD-BOT",
          ],
        },
        {
          title: "티알봇",
          details: [
            "TRPG(TableRollPlayingGame)을 Discord메신저에서 할 수 있도록 각종 명령어와 탐사자 시트 및 주사위 기능을 구현하여 통화를 진행하면서 게임을 할 수도 있고 채팅으로도 게임 진행이 가능하게 개발하였습니다.",
            "TypeScript와 Prisma, Postgresql을 사용하여 개발을 진행하였으며, 명령어를 구현해야 하다보니 소스 최적화에 대한 좋은 경험이 된 것 같습니다.",
            "주요 기능: 탐사자 시트 제작 가능 ∙ 다양한 명령어, 다이스 기능 제공 ∙ DB를 사용한 템플릿 저장, 불러오기",
            "Backend: Node.js, Prisma",
            "Frontend: TypeScript, discord.js",
            "Database: PostgreSql",
            "Deployment: Heroku",
            "Github: https://github.com/ProGameLife/TRPG_BOT",
          ],
        },
        {
          title: "알리봇",
          details: [
            "트위치라는 방송 플렛폼의 방송알림을 Discord 메신저로 받을 수 있도록 하는 봇입니다.",
            "기존에 방송알림을 해주는 Discord 봇이 있었으나 유로화로 바뀌면서 직접 개발하게 되었습니다.",
            "자신이 원하는 방송인이 자신이 원하는 게임을 할 때만 알림을 받거나, 방송이 켜졌을 때만 알림을 받는 등 여러가지 사용자가 원하는 정책으로 알림을 정할 수 있습니다.",
            "Python과 트위치API를 사용하여 개발을 진행하였습니다.",
            "주요 기능: 특정 방송인의 방송알림 ∙ 특정 카테고리의 방송 진행 시 알림 ∙ 알림 정책의 세분화 가능",
            "Backend: Python",
            "Frontend: discord.js",
            "Deployment: Heroku",
            "Github: https://github.com/ProGameLife/Noty-Bot",
          ],
        },
      ],
    },
  ];

  return (
    <ProjectsContainer>
      <ProjectMainTitle>Projects</ProjectMainTitle>
      {projectsData.map((company, index) => (
        <CompanyProjects key={index}>
          <CompanyTitle>{company.company}</CompanyTitle>
          {company.projects.map((project, index) => (
            <ProjectCard key={index}>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDetails>
                {project.details.map((detail, index) => (
                  <ProjectDetail key={index}>{detail}</ProjectDetail>
                ))}
              </ProjectDetails>
            </ProjectCard>
          ))}
        </CompanyProjects>
      ))}
    </ProjectsContainer>
  );
};

export default Projects;
