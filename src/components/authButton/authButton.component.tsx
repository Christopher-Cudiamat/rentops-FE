import React from 'react';
import { Container, ErrorMessage, LoaderIcon, StyledButton } from './authButton.style';
import { IAuthButtonProps } from './authButton.type';
import loaderGif from '../../assets/gifs/reload.gif';

const AuthButton: React.FC<IAuthButtonProps> = ({error,children,isLoading}) => {
  
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
        {isLoading ? <LoaderIcon src={loaderGif} alt="loader icon"/> : null}
        {children}
      </StyledButton>
    </Container>
  );
}

export default AuthButton;
