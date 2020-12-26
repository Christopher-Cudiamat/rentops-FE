import React from 'react';
import { Container, ErrorMessage, StyledButton } from './authButton.style';
import { IAuthButtonProps } from './authButton.type';

const AuthButton: React.FC<IAuthButtonProps> = ({error,children}) => {
  return (
    <Container 
      display={"flex"} 
      justify={"center"} 
      direction={"column"}>
      {	error !== "" &&
          <ErrorMessage error>{error}</ErrorMessage>
      }
      <StyledButton 
        primary 
        type="submit">
        {children}
      </StyledButton>
    </Container>
  );
}

export default AuthButton;
