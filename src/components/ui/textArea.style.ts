import styled  from "styled-components/macro";

interface ITextArea {
  visibility?: boolean
}

export const TextAreaControl = styled.div<ITextArea>`
  margin-bottom: 5rem;
  position: relative;
  height: 14rem;
`

export const TextArea = styled.textarea<ITextArea>`
  width: 100%;
  margin-top: .8rem;
  height: 14rem;
  font-size: 1.8rem;
  padding: 1rem 1rem;
  border-radius: .5rem;
  border: 1px solid ${({theme}) => theme.color.grayLight};
  &::placeholder { 
    color: ${({theme}) => theme.color.grayLight};
  }
`

export const TextAreaLabel = styled.label<ITextArea>`
  font-size: 1.4rem;
  color: ${({theme}) => theme.color.gray}
`

export const TextAreaError= styled.p<ITextArea>`
  line-height: 1.4rem;
  color: ${({theme}) => theme.color.error};
  margin-bottom: 0rem;
  font-size: 1.2rem;
  visibility: ${({visibility}) => visibility ? "visible" : "hidden"}
`

