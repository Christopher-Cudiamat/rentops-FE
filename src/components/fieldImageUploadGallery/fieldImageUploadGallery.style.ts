import styled from "styled-components/macro";
import { Button } from "../ui/button.style";
import uploadImgSingle from "../../assets/icon/upload-image-single.svg";
import uploadImgMultiple from "../../assets/icon/upload-image-multiple.svg";

interface IImageUploader {
  isMultiple?: boolean,
}


export const UploadsImageContainer= styled.div`
  width: 100%;
  margin: auto;
  padding: 0rem 2rem;
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

  &:hover {
    background:  transparent;
    cursor: pointer;
  }
  &:after {
    content: "";
    background: ${({isMultiple}) => isMultiple ? `url(${uploadImgMultiple})` : `url(${uploadImgSingle})`};
    background-repeat: no-repeat;
    opacity: 0.1;
    top: 0;
    left: 2%;
    bottom: 0;
    right: 0;
    background-size: contain;
    position: absolute;
    z-index: -1;   
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
  display: ${({isMultiple}) => isMultiple ? "flex" : "block"};
  margin-bottom: ${({isMultiple}) => isMultiple ? "0rem" : "3rem"};
  background: ${({isMultiple, theme}) => isMultiple ? `${theme.color.white}` : `${theme.color.grayLightest}`};
  padding: 1rem;
  border-bottom:  ${({isMultiple,theme}) => isMultiple ? `solid 1px ${theme.color.gray}` : "none"};
`
