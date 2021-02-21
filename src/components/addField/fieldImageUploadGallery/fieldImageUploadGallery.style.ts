import styled from "styled-components/macro";
import { Button } from "../../ui/button.style";
import uploadImgMultiple from "../../../assets/icon/upload-image-multiple.svg";

interface IImageUploader {

}


export const UploadsImageContainer= styled.div`
  width: 100%;
  margin: auto;
`

export const UploadImageButton = styled(Button)<IImageUploader>`
  font-size: 1.8rem;
  margin-bottom: 2rem;
  color: ${({theme}) => theme.color.blackLight};
  font-weight: 500;
  background: transparent;
  border: 2px dashed ${({theme}) => theme.color.gray};
  padding:1rem .5rem;
  position: relative;
  height: 10rem;
  width: 100%;

  &:hover {
    background:  transparent;
    cursor: pointer;
  }
  &:after {
    content: "";
    background: url(${uploadImgMultiple});
    background-repeat: no-repeat;
    opacity: 0.2;
    top: 0;
    left: 2%;
    bottom: 0;
    right: 0;
    background-size: contain;
    position: absolute;
    z-index: -1;   
    @media ${({theme}) => theme.media.laptopL} { 
      opacity: 0.7;
    } 
  }

  @media ${({theme}) => theme.media.laptopL} { 
    width: 80%;
    font-size: 2.2rem;
  } 
`

export const RemoveButton = styled.button`
   font-size: 1.4rem;
   background: ${({theme}) => theme.color.tertiary};
   border: none;
   color: ${({theme}) => theme.color.white};
`
export const UpdateButton = styled.button`
   font-size: 1.4rem;
   background: ${({theme}) => theme.color.primary};
   color: ${({theme}) => theme.color.white};
   border: none;
   margin-right: 1rem;
   margin-left: 1rem;
`

export const UploadedImageWrapper = styled.div<IImageUploader>`
  display: flex;
  margin-bottom: 0rem;
  background: ${({theme}) => theme.color.white};
  padding: 1rem;
  border-bottom:  ${({theme}) =>  `solid 1px ${theme.color.gray}`};
`
