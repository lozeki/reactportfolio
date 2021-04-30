import styled from 'styled-components';

export const SkillContainer = styled.div`
  height: 800px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;  
  background: #0e121c;  

  @media screen and (max-width: 768px) {
    height: 1100px;
  }

  @media screen and (max-width: 480px) {
    height: 1300px;
  }
`;

export const SkillWrapper = styled.div`
  max-width: 1000px;
  margin: 0 auto;
  display: grid;
  grid-template-columns: 1fr 1fr;
  align-items: center;
  grid-gap: 16px;
  padding: 0 10px;
  margin-bottom: 60px;

  @media screen and (max-width: 1000px) {
    grid-template-columns: 1fr 1fr;
  }

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const SkillCard = styled.div`
  background: #fff;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 10px;
  max-height: 400px;
  padding: 20px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.2);
  transition: all 0.2s ease-in-out;

  &:hover {
    transform: scale(1.05);
    transition: all 0.2s ease-in-out;
    cursor: pointer;
  }
`;

export const SkillIcon = styled.img`
  max-height: 380px;
  max-width: 380px;
  margin-bottom: 10px;
`;

export const SkillH1 = styled.h1`
  font-size: 2.5rem;
  color: #fff;
  margin-bottom: 40px;
  margin-top: 50px;

  @media screen and (max-width: 480px) {
    font-size: 2rem;
  }
`;

export const SkillH2 = styled.h2`
  font-size: 1rem;
  margin-bottom: 10px;
`;

export const SkillP = styled.p`
  font-size: 1rem;
  text-align: center;
`;