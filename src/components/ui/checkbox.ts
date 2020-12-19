import styled  from "styled-components";

interface ICheckbox {

}

export const CheckboxControl = styled.div<ICheckbox>`
  margin-bottom: 1rem;
  display:flex;
  flex-wrap: wrap;
`

export const Checkbox = styled.input.attrs({ type: 'checkbox' })`
  display: inline-block;
  width: 2rem;
  height: 2rem;
  height: 4.2rem;
  font-size: 1.6rem;
  padding: 0rem 1rem;
  border-radius: .5rem;
  border: 1px solid ${({theme}) => theme.color.gray};

`

export const CheckboxLabel = styled.label<ICheckbox>`
  font-size: 1.4rem;
  color: ${({theme}) => theme.color.gray};
  display: inline;
  width: 90%;
  padding: 1rem;
`
export const CheckboxError= styled.p<ICheckbox>`
  color: ${({theme}) => theme.color.error};
  margin-bottom: 0rem;
  width:100%;
`

export const LabelLink = styled.span<ICheckbox>`
  color: ${({theme}) => theme.color.secondary};
  font-weight: 500;
`
