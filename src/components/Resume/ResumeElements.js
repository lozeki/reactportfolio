import styled from 'styled-components';

export const ResumeContainer = styled.div`
    color: #0d0d0d; 
    background: #0d0d0d;

    @media screen and (max-width: 768px) {
        padding: 100px 0;
    }
`
export const ResumeWrapper = styled.div`
    display: grid;
    z-index: 1;
    //box-shadow: 0 1rem 3rem rgb(0 0 0 / 18%);
    background: #ffffff;
    padding: 3rem;
    width: 100%;
    max-width: 1100px;
    margin-right: auto;
    margin-left: auto;  
    grid-template-areas: 'col1 col1 col2 col2' 'col3 col4 col4 col4''col5 col5 col5 col6'; 

    @media screen and (max-width: 768px) {
        grid-template-areas: 'col1' 'col2' 'col3' 'col4' 'col5' 'col6';
    }
`
export const Column1 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;  
    grid-area: col1;
    border-bottom: 1px solid rgba(0,0,0,0.08);
`
export const Column2 = styled.div`
   margin-bottom: 15px;
    padding: 0 15px;  
    grid-area: col2;
    padding-bottom:20px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    @media screen and (max-width: 768px) {
        border-left:0;        
    }
`
export const Column3 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;  
    grid-area: col3;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    padding-bottom:30px;    
`
export const Column4 = styled.div`
    margin-bottom: 15px;
    padding: 0 15px;  
    grid-area: col4;
    padding-bottom:20px;
    border-bottom: 1px solid rgba(0,0,0,0.08);
    @media screen and (max-width: 768px) {
        border-left:0;        
    }
`
export const Column5 = styled.div`   
    padding: 0 15px;  
    grid-area: col5;
`
export const Column6 = styled.div`   
    padding: 0 15px;
    border-left: 1px solid rgba(0,0,0,0.08);
    grid-area: col6;
    @media screen and (max-width: 768px) {
        border-left:0;
        border-top: 1px solid rgba(0,0,0,0.08);
    }
`
export const TextWrapper = styled.div`
    padding-top: 0;
    padding-bottom: 20px;
`
export const TopLine = styled.div` 
    margin-top: 20px;
    color: #06C1C7;
    font-size: 24px;
    line-height: 32px;
    font-weight: bold;
    letter-spacing: 1.4px;
    text-transform: uppercase;
    margin-bottom: 10px;
`
export const Heading = styled.h1`
    margin-bottom: 10px;
    margin-top: 15px;
    font-size: 18px;
    line-height: 1.1;
    font-weight: 600;  

    @media screen and (max-width: 480px) {
        font-size: 32px;
    }
`
export const Subtitle = styled.p`     
    font-size: 16px;
    line-height: 24px;  
`
export const ImgWrap = styled.div`  
    width: 100%;
`
export const Img = styled.img`
    max-width: 200px;
    margin-top: 0;
    margin-right: 0;
    margin-left: 10px;
    padding-right: 0;
`
export const A = styled.a`  
    text-decoration: none;
`
