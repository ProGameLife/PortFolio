import styled from 'styled-components';

const CareerContainer = styled.div`
  padding: 20px;
  background-color: #f4f4f9;
`;

const TitleArea = styled.div`
  text-align: center;
  margin-bottom: 40px;
`;

const CareerSummary = styled.div`
  font-size: 18px;
  margin-bottom: 20px;
`;

const Timeline = styled.div`
  position: relative;
  margin: 20px 0;
  padding: 20px 0;
  list-style: none;

  &:before {
    content: '';
    position: absolute;
    left: 50%;
    top: 0;
    bottom: 0;
    width: 4px;
    background: #c5c5c5;
    transform: translateX(-50%);
  }
`;

const TimelineItem = styled.div`
  position: relative;
  margin: 20px 0;
  width: 30%;

  &:nth-child(odd) {
    left: 12%;
  }

  &:nth-child(even) {
    left: 51%;
  }

  &:before {
    content: '';
    position: absolute;
    top: 20px;
    width: 16px;
    height: 16px;
    background: #fff;
    border: 2px solid #c5c5c5;
    border-radius: 50%;
    z-index: 1;
    transform: translateX(-50%);
  }

  &:nth-child(odd):before {
    right: -38%;
  }

  &:nth-child(even):before {
    left: -8px;
  }
`;

const TimelineContent = styled.div`
  padding: 20px;
  background: #fff;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  position: relative;
  width: 100%;
`;

const CompanyName = styled.h2`
  font-size: 24px;
  margin-bottom: 10px;
`;

const CompanyDetails = styled.div`
  font-size: 16px;
  margin-bottom: 10px;
`;

const DetailItem = styled.p`
  margin: 5px 0;
`;

const Career = () => (
  <CareerContainer id="career">
    <TitleArea>
      <h1>CAREER</h1>
    </TitleArea>
    <Timeline>
      <TimelineItem>
        <TimelineContent>
          <CompanyName>㈜아카코그니티브(AKACognitive)</CompanyName>
          <CompanyDetails>
            <DetailItem>개발팀 · 사원/팀원</DetailItem>
            <DetailItem>백엔드/서버개발</DetailItem>
            <DetailItem>2022.10 ~ 2024.03</DetailItem>
            <DetailItem>1년 6개월</DetailItem>
            <DetailItem>연봉: 3,500만원</DetailItem>
            <DetailItem>근무지역: 서울</DetailItem>
            <DetailItem>퇴사사유: 경영악화</DetailItem>
          </CompanyDetails>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <CompanyName>㈜ 피디정보통신</CompanyName>
          <CompanyDetails>
            <DetailItem>개발팀 · 대리/팀원</DetailItem>
            <DetailItem>솔루션</DetailItem>
            <DetailItem>2018.01 ~ 2020.05</DetailItem>
            <DetailItem>2년 5개월</DetailItem>
            <DetailItem>연봉: 2,850만원</DetailItem>
            <DetailItem>근무지역: 서울</DetailItem>
            <DetailItem>퇴사사유: 군대 입대</DetailItem>
          </CompanyDetails>
        </TimelineContent>
      </TimelineItem>
      <TimelineItem>
        <TimelineContent>
          <CompanyName>알엔비랩㈜</CompanyName>
          <CompanyDetails>
            <DetailItem>개발팀 · 사원</DetailItem>
            <DetailItem>유지보수</DetailItem>
            <DetailItem>2016.11 ~ 2018.01</DetailItem>
            <DetailItem>1년 3개월</DetailItem>
            <DetailItem>연봉: 2,000만원</DetailItem>
            <DetailItem>근무지역: 서울</DetailItem>
            <DetailItem>퇴사사유: 인수합병</DetailItem>
          </CompanyDetails>
        </TimelineContent>
      </TimelineItem>
    </Timeline>
  </CareerContainer>
);

export default Career;
