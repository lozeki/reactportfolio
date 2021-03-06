import React from 'react'
import Icon1 from '../../images/img-3.jpg';
import Icon2 from '../../images/img-2.jpg';
import Icon3 from '../../images/img-1.jpg';
import Icon4 from '../../images/img-5.jpg';
import {
    SkillContainer,
    SkillH1,
    SkillWrapper,
    SkillCard,
    SkillIcon,
    SkillH2,
    SkillP
  } from './SkillElements';

const SkillSet = () => {
    return (
        <SkillContainer id='portfolio'>
          <SkillH1>Portfolio</SkillH1>
          <SkillWrapper>
            <SkillCard>
              <SkillIcon src={Icon1} />
              <SkillH2>Programming</SkillH2>
              <SkillP>
              I love to make solutions small, reliable and fast.
              </SkillP>
            </SkillCard>            
            <SkillCard>
              <SkillIcon src={Icon3} />
              <SkillH2>Web and Graphic Design</SkillH2>
              <SkillP>
              Creative, flexible and affordable website design.
              </SkillP>
            </SkillCard>
            <SkillCard>
              <SkillIcon src={Icon2} />
              <SkillH2>Technical Skills</SkillH2>
              <SkillP>
              Code and understand the lifecycle of a software product.
              </SkillP>
            </SkillCard>
            <SkillCard>
              <SkillIcon src={Icon4} />
              <SkillH2>Mini Game with Java</SkillH2>
              <SkillP>
              I have built websites, application, software, and even games!
              </SkillP>
            </SkillCard>
          </SkillWrapper>
        </SkillContainer>
      )
}

export default SkillSet;
