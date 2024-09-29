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
          title: "성과 및 기여",
          details: [
            "소셜 로그인 개발 및 알림메일, 사용자 상품 구매 등을 위한 데이터 모델링 및 API 개발",
            "관리자페이지 개발을 통해 기존에 업무 자동화 진행",
            "자사 상품 구매를 위한 Stripe 구독, Tosspayments 연동 및 RevenueCat 연동으로 웹과 앱의 구독인증 강화",
            "AWS Lambda, EC2, S3 배포 작업 및 유지보수",
            "DynamoDB, Mysql, Postgresql 사내 데이터베이스 유지보수",
            "레거시 청산 및 기존 비즈니스 유지보수",
            "Agile Scrum",
            "Skill keyword",
            "Node.js, Python, Serverless, Express.js, Django, RDS, DynamoDB, AWS, React.js, Agile"
          ]
        },
        {
          title: "[MEK] - Fullstack",
          details: [
            "[프로젝트 개요]",
            "영어 교육용 인공지능 봇, 학습지, Kimini, iPad와 함께 제공되는 자사 상품의 한국 판매 페이지 제작",
            "[기술 스택]",
            "React.js, scss, Node.js, postgresql, AWS S3",
            "[프론트엔드 개발]",
            "React와 Recoil을 사용하여 사용자 친화적인 웹 페이지를 개발하였으며, AWS S3를 통해 배포를 진행하였습니다.",
            "[백엔드 개발]",
            "REST API 개발, 카카오톡 SNS 로그인 연동, 상품 구매 및 구독 인증 기능을 구현하였습니다. Stripe를 활용해 결제 시스템을 구축하고, SMTP를 통해 이메일 인증을 통한 로그인 기능을 구현하였습니다.",
            "[관리자 페이지 개발]",
            "사내 관리자를 위한 관리자 페이지를 개발하여 결제 정보, 상품 배송 처리, 통계 자료 등을 효율적으로 관리할 수 있는 기능을 제공하였습니다.",
            "[성과 및 기여]",
            "사용자가 원활하게 제품을 구매하고 구독할 수 있도록 하는 기능을 구현하였으며, 기존 개발자를 통해 데이터베이스에서 직접 조회와 Stripe결제내역을 통해 확인하였던 것을 관리자 페이지에서 바로 확인 가능하며 엑셀로 관리 중이던 상품 배송 처리와 배송 메일 발송 등의 업무를 관지라 페이지에서 처리 가능하도록 하였습니다.",
          ],
        },
        {
          title: "[MEJ] - Backend",
          details: [
            "[프로젝트 개요]",
            "영어 교육용 인공지능 봇, 학습지, Kimini, iPad와 함께 제공되는 자사 상품의 일본 판매 페이지 제작",
            "[기술 스택]",
            "Python-chalice, AWS DynamoDB, AWS Lambda",
            "[백엔드 개발]",
            "REST API 개발, Stripe와 Toss 결제 연동 및 자사 사용자 인증 서버를 통해 상품구매와 구독 인증 로직 구현, 관리자 페이지에 상품 추가, 삭제 등 관리 기능 구현",
            "[성과 및 기여]",
            "결제 시스템 연동으로 안전한 환경을 제공하며 다양한 상품 형태에 대응 할 수 있는 상품 추가, 삭제 API를 제공하여 운영 효율성을 크게 향상시켰습니다.",
          ],
        },
        {
          title: "[ESAT-J] - Backend",
          details: [
            "[프로젝트 개요]",
            "일본의 중학교 영어자격 시험 대비 애플리케이션 프로젝트",
            "[기술 스택]",
            "Python, Docker, Django, AWS Lambda",
            "[백엔드 개발]",
            "각종 시험 문제와 제한시간 등 시험 흐름에 따른 API 설계, 개발 및 최적화 진행, 웹사이트에서 구매 시 Stripe와 RevenueCat과 연동하여 애플리케이션에서 구독 연동 구현, 데이터베이스의 효율적 설계와 쿼리 최적화 등으로 시험 문제 데이터 조회 속도 향상",
            "[성과 및 기여]",
            "결제 연동을 통해 웹사이트와 앱 사이의 인증 체계를 견고하게 구현하였으며 많은 API를 사용하게 되는 시험 문제 풀이 흐름에 비동기 처리를 통해 안정성을 보장하였습니다.",
          ],
        },
        {
          title: "[AKA token] - Frontend",
          details: [
            "[프로젝트 개요]",
            "자사 코인서비스 거래 사이트 프로토타입 개발",
            "[기술 스택]",
            "Web3, React",
            "[Dapp개발]",
            "Metamask의 테스트 코인을 사용하여 특정 파일을 가격과 함께 업로드 시 다른 유저가 가격을 지불하고 해당 파일 다운로드를 할 수 있도록 구현하였습니다.",
            "[성과 및 기여]",
            "자사 코인 프로젝트의 기반이 되도록 개발환경과 구축을 진행하였습니다.",
          ],
        },
        {
          title: "[Resmart], [Alive] - Backend",
          details: [
            "[프로젝트 개요]",
            "학생들의 뇌 트레이닝 문제 제공, 우울증 체크와 관리 프로젝트",
            "[기술 스택]",
            "Javascript, Lambda, Bebel, Webpack, Mysql",
            "[백엔드 개발]",
            "매일 앱으로 체크하는 뇌 건강 관련 설문 알고리즘을 제공하였습니다. 사용자의 설문의 결과를 데이터베이스에 저장하고 누적된 데이터를 기반으로 위험 상황으로 체크가 되는 경우 SMS를 통해 등록된 인물에게 알림문자 발송 기능을 개발하였습니다.",
            "[성과 및 기여]",
            "설문 알고리즘으로 우울증 체크를 진행할 수 있었으며 사내 데이터베이스에 각종 통계를 저장하여 우울증 치료와 개선에 필요한 정보를 회사에 제공하였습니다.",
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
            "[프로젝트 개요]",
            "DRM, DLP, NAC 등 보안 솔루션들의 예외가 필요한 경우 사내 결재 정책을 설정하여 예외권한을 특정기간 또는 파일 단위로 제공하기 위한 반출시스템 구축",
            "[솔루션 구축 및 기술 지원]",
            "고객사의 솔루션 담당자와 미팅을 진행하여 고객사 규모에 따른 데이터베이스 설계 및 구축과 필요 하드웨어 스펙 명세서를 제공하며 솔루션 구축을 진행하였습니다.",
            "고객사의 인사정보 데이터베이스를 자사 솔루션 인사데이터베이스와 연동하기 위해 데이터베이스 환경 별로 프로시저 제공 및 뷰 테이블 제공하였습니다.",
            "고객사의 요청사항에 따라 서버 이중화, SSL 인증서적용 및 데이터베이스 미러링, 이중화 진행 하였으며 유지보수 계약 진행 시 데이터베이스 백업과 서버 로그 분석, 장애지원 등 기술지원을 진행하였습니다.",
            "[성과 및 기여]",
            "약 40곳의 고객사에 성공적으로 솔루션 구축을 진행하였습니다. 그리고 기존 고객사 포함 약 140곳의 고객사의 장애지원 내용 및 솔루션 구축 스펙 및 자주 요청이 오는 조회용 쿼리등을 문서화하여 기술지원의 질을 향상하였습니다.",
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
            "[물류관리 기능]",
            "주문 취합 및 중복 주문 탐지 시스템",
            "창고 우선순위와 물류 비용 최소화를 고려한 주문 배정 알고리즘",
            "실제 출고내역과 배정내역 간 검증 시스템",
            "주문, 배정, 재고 데이터 검색/관리 시스템",
            "시스템 데이터 엑셀 업로드 및 다운로드",
            "[시스템 구축]",
            "활용한 서비스: AWS RDS, ECS(EC2), S3, EFS, CF 등",
            "프로젝트 도커라이즈 및 배포 자동화 작업",
          ],
        },
        {
          title: "키리봇",
          details: [
            "보고싶은 유튜브의 새 영상을 평소에 자주 사용하는 메신저인 Discord를 통해서 알림을 받을 수 있고 바로 영상재생이 가능하게 해주는 봇입니다.",
            "데이터베이스를 활용하여 자신이 보고싶은 유튜브 채널을 추가 / 삭제가 가능하게 만들었으며 지인들과 함께 쓰기위해 개발을 하게 되었습니다.",
            "TypeScript를 사용하여 개발을 진행하였으며, 기존에 node.js만 사용했던 프로젝트 보다 오류가 확연히 줄어드는 것을 느낄 수 있었으며, Prisma와 PostgreSql을 사용하며 데이터베이스에 대한 지식 또한 더욱 탄탄해지는 경험을 쌓을 수 있었습니다.",
            "주요 기능: 명령어를 통해 원하는 채널 등록 ∙ 삭제 ∙ 수정 가능",
            "Langueage: Node.js, TypeScript, Prisma",
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
            "Langueage: Node.js, Pupeteer",
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
            "Langueage: Node.js, TypeScript, Prisma",
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
