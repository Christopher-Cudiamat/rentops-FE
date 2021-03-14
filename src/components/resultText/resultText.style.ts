import styled from "styled-components/macro";

export const ResultTextStyled = styled.p`
  font-size: 1.6rem;
  font-weight: 400;
  margin-bottom: 3rem;
  color: ${({ theme }) => theme.color.gray};
  @media ${({ theme }) => theme.media.laptop} {
    font-size: 2rem;
    margin-bottom: 4rem;
    margin-top: 2rem;
  }
`;
