import styled  from "styled-components/macro";
import { Modal } from "../../../components/ui/modal.style";


export const Container = styled(Modal)`
  width: 100vw;
  height: 100vh;
  overflow-y: scroll;
  padding: 0rem 0rem 4rem 0rem;
`


export const GalleryPhotoContainer = styled.div`

  @media ${({theme}) => theme.media.laptop} { 
    display: flex;
    justify-content: center;
    flex-wrap: wrap;
  }
`

export const GalleryPhoto = styled.img`
  width: 100%;
  height: auto;
  margin-bottom: 2rem;
  @media ${({theme}) => theme.media.laptop} { 
    width: 30%;
    margin: 1rem;
  }
`
