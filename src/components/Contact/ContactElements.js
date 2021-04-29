import styled from 'styled-components';
import { Link } from 'react-router-dom';

export const Container = styled.div`
  min-height: 692px;
  position: fixed;
  bottom: 0;
  left: 0;
  right: 0;
  top: 0;
  z-index: 0;
  overflow: hidden;
  background: #0D0D0D;
`

export const FormWrap = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  
  @media screen and (max-width: 400px) {
    height: 80%;
  }
`

export const Icon = styled(Link)`
  margin-left: 20px;
  margin-top: 20px;
  text-decoration: none;
  color: #0d0d0d;
  font-weight: 700;
  font-size: 28px;

  @media screen and (max-width: 480px) {
    margin-left: 16px;
    margin-top: 8px;
  }
`

export const FormContent = styled.div`
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    
    @media screen and (max-width: 480px) {
        padding: 10px;
  }
`

export const Form = styled.form`
    background: #fff;
    max-width: 1000px;
    height: auto;
    width: 100%;
    z-index: 1;
    display: grid;
    margin: 0 auto;
    padding: 80px 32px;
    border-radius: 4px;
    box-shadow: 0 1px 3px rgba(0, 0, 0, 0.9);

    @media screen and (max-width: 400px) {
        padding: 32px 32px;
  }
`

export const FormH1 = styled.h1`
    margin-bottom: 40px;
    color: #fff;
    font-size: 20px;
    font-weight: 400;
    text-align: center;
`

export const FormLabel = styled.label`
    margin-bottom: 8px;
    font-size: 14px;
    color: #0d0d0d;
    font-weight: bold;
`
export const FormInput = styled.input`
    padding: 16px 16px;
    margin-bottom: 32px;
    border: 2px solid #0d0d0d;
    border-radius: 4px;
`
export const FormTextArea =styled.textarea`
    background-color: #fff;
    width: 100%;
    min-height: 100px;
    resize: none;
    margin-top:20px;
    border: 2px solid #0d0d0d;
    border-radius: 4px;
`
export const FormButton = styled.button`
  background: #0d0d0d;
  padding: 10px 0;
  font-weight: bold;
  //max-width: 100px;
  display: flex;
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