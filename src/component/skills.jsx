import React from 'react';
import styled from 'styled-components';
import { flexDirection } from 'styled-system';

const SkillsArea = styled.div`
  ${flexDirection}
`;

const Skills = () => (
  <div id='skills' className='skill-area'>
    <div className='title-area'>
      <span className='menu-title'>SKILLS</span>
    </div>
    <SkillsArea className='skills-area' flexDirection={['column', 'column', 'column', 'column']}>
      <div className='skill-text-area'>
        <div className='skill-title'>Frontend</div>
        <p>ReactJS, ViteJS, HTML, NextJS, CSS, SCSS, Styled, Javascript, TypeScript</p>
      </div>
      <div className='skill-text-area'>
        <div className='skill-title'>Backtend</div>
        <p>NodeJS, NestJS, TypeOrm, Prisma, Python, Java</p>
      </div>
      <div className='skill-text-area'>
        <div className='skill-title'>Database</div>
        <p>Mysql, Maria, Mssql, Oracle, Postgresql</p>
      </div>
      <div className='skill-text-area'>
        <div className='skill-title'>AWS</div>
        <p>Lambda, DynamoDB, EC2, S3, RDS</p>
      </div>
    </SkillsArea>
  </div>
);

export default Skills;
