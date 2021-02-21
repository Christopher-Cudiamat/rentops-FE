import styled  from "styled-components/macro";


export const Container = styled.div`

  margin-top: 4rem; 
  padding-top: 4rem;
  padding-bottom: 2.5rem;
  border-top: 1px solid #ccc;
  @media ${({theme}) => theme.media.laptop} { 
    padding-bottom: 4.5rem;
  }

   & > div:first-child {
      display:flex;
      align-items: center;
      background: ${({theme}) => theme.color.graylight};
      & > img {
        width: 6rem;
        height: 6rem;
        opacity: .5;
      } 
      & > div {
        display: flex;
        padding-top: 1rem;
        flex-direction: column;
        margin-left: 2rem;
        justify-content: center;

        & > p:first-child {
          color: ${({theme}) => theme.color.graylight};
          font-size: 1.6rem;
          margin-bottom: 0rem;
          
        } 
        & > p:last-child {
          font-size: 2rem;
          font-weight: 500;
          margin-bottom: 0rem;
        } 
      }
      
   }

   & > div:last-child {
      display:flex;
      margin-top: 3rem;
      & > div {
        border: 2px solid ${({theme}) => theme.color.secondary};
        width: 40%;
        margin: auto;
        border-radius: .5rem;
        padding: 1rem 0rem;
        display: flex;
        align-items: center;
        justify-content: center;
        transition: border .3s;
        &:hover {
          border: 3px solid ${({theme}) => theme.color.secondary};
          cursor: pointer;
        }

        & > img {
          width: 3rem;
          height: 3rem;
          margin: 0rem .5rem;
        }
        & > a {
          font-size: 1.8rem;
          text-decoration: none;
          color: ${({theme}) => theme.color.secondary};
          margin: 0rem .5rem;
        }
      }
   }
`
