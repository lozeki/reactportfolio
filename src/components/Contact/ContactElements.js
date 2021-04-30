import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  color: #0d0d0d; 
  background: #0d0d0d;
  height:100vh;
`
export const FormWrap = styled.div`
  height: 100%;
  
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`

  text-decoration: none;  
  display:inline-block;
  cursor:pointer;
  max-width: 100px;
  padding: 10px;
  text-align: center;
  border:1px solid #CCC;
  border-radius: 6px;
  box-shadow: 0 0 5px 1px rgba(0,0,0,0.2);
  color: #fff;
  background: #0d0d0d;
  font-weight: bold;
  font-size: 24px;
  margin-bottom:30px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`    
    @media screen and (max-width: 480px) {
        padding: 10px;
  }
`

export const Form = styled.form`
    background: #fff;
    max-width: 1000px;  
    height:100vh;   
    z-index: 1;
    margin: 0 auto;
    padding: 32px 32px;
    display: block;
    @media screen and (max-width: 400px) {
        padding: 32px 32px;
  }
`
export const FormH1 = styled.h1`
    margin: 20px 0;
    color: #0d0d0d;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`
export const FormLabel = styled.label`
    margin-bottom: 5px;
    font-size: 14px;
    color: #0d0d0d;
    font-weight: bold;
`
export const FormInput = styled.input`
    padding: 10px 10px;
    width:100%;
    margin-bottom: 10px;
    border: 2px solid #0d0d0d;
    border-radius: 4px;
`
export const FormTextArea =styled.textarea`
    background-color: #fff;
    width: 100%;
    min-height: 100px;
    resize: none;
    margin-top:10px;
    border: 2px solid #0d0d0d;
    border-radius: 4px;
`
export const FormButton = styled.button`
  background: #0d0d0d;
  padding: 10px 10px;
  font-weight: bold;
  //max-width: 100px;
  justify-content: center;
  border: none;
  margin-top: 40px;
  border-radius: 6px;
  color: #fff;
  font-size: 20px;
  cursor: pointer;

  &:hover {
    background: #33ffff;
    color: #0d0d0d;
    transition: 0.3s ease-out;
  }
`