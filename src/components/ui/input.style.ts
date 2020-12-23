import styled  from "styled-components";

interface IInput {
  visibility?: boolean
}

export const InputControl = styled.div<IInput>`
  margin-bottom: 1rem;
  position: relative;
  height: 8.2rem;
`

export const Input = styled.input<IInput>`
  width: 100%;
  height: 4.8rem;
  font-size: 1.6rem;
  padding: 0rem 1rem;
  border-radius: .5rem;
  border: 1px solid ${({theme}) => theme.color.gray};
  &::placeholder { 
  color: ${({theme}) => theme.color.grayLight};
}
`

export const InputLabel = styled.label<IInput>`
  font-size: 1.4rem;
  color: ${({theme}) => theme.color.gray}
`
export const InputError= styled.p<IInput>`
  line-height: 1.4rem;
  color: ${({theme}) => theme.color.error};
  margin-bottom: 0rem;
  font-size: 1.2rem;
  visibility: ${({visibility}) => visibility ? "visible" : "hidden"}
`
export const InputIcon = styled.img<IInput>`
 position: absolute;
 right: 3%;
 top: 45%;
 width: 2.5rem;
`