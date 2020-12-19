import styled  from "styled-components";

interface IInput {

}

export const InputControl = styled.div<IInput>`
  margin-bottom: 1rem;
  position: relative;
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
  color: ${({theme}) => theme.color.error};
  margin-bottom: 0rem;
  font-size: 1.2rem;
`
export const InputIcon = styled.img<IInput>`
 position: absolute;
 right: 3%;
 top: 50%;
 width: 2.5rem;
`