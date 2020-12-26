import styled  from "styled-components";

export const CheckboxControl = styled.div`
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

export const CheckboxLabel = styled.label`
  font-size: 1.4rem;
  color: ${({theme}) => theme.color.gray};
  display: inline;
  width: 90%;
  padding: 1rem;
`
export const CheckboxError= styled.p`
  color: ${({theme}) => theme.color.error};
  margin-bottom: 0rem;
  width:100%;
  font-size: 1.2rem;
`

export const LabelLink = styled.span`
  color: ${({theme}) => theme.color.secondary};
  font-weight: 500;
`
