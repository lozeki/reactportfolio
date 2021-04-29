import React, { useState } from 'react';
import {Redirect} from 'react-router-dom';
import {
    Container,
    FormWrap,
    Icon,
    FormContent,
    Form,
    FormH1,
    FormLabel,
    FormInput,
    FormTextArea,
    FormButton
} from './ContactElements';  
const initalState = {
    name: '',
    email: '',
    phone: '',
    message: ''
};

const Contact = () => {
  const [state, changeState] = useState(initalState);  

  const handleSubmit = event => {
    event.preventDefault();
    console.log('submitted!');
    console.log(state);    
    console.log("Succeeded!!!"); 
    return  <Redirect  to="/" />  
   
  };

  const handleInput = event => {
    const inputName = event.currentTarget.name;
    const value = event.currentTarget.value;
    changeState( prevState => ({...prevState,  [inputName]: value}));

  };
    return (
        <>
      <Container>
        <FormWrap>                   
          <FormContent>              
            <Form onSubmit={handleSubmit} to='/'>
            <Icon to='/'>Back</Icon>
              <FormH1>Have Some Question?</FormH1>
              <FormLabel htmlFor='name'>Name</FormLabel>
              <FormInput type='name' name='name' onChange={handleInput} placeholder='Your Name' required />
              <FormLabel htmlFor='email'>Email</FormLabel>
              <FormInput type ='email' name='email'  onChange={handleInput} placeholder='your@email.com' required />
              <FormLabel htmlFor='phone'>Phone</FormLabel>
              <FormInput type='phone' name='phone' onChange={handleInput} placeholder='(123) 456-7890' required />
              <FormLabel htmlFor='comment'>Your Comment</FormLabel>
              <FormTextArea name='message' onChange={handleInput} placeholder='  
                 Please left your comment here...' rows='10' cols='80'></FormTextArea>
              <FormButton type='submit' >Submit</FormButton>              
            </Form>
          </FormContent>
        </FormWrap>       
      </Container>      
    </>
    )
}
export default Contact;
