import React from 'react';
import { useDispatch } from 'react-redux';
import { 
  TextArea,
  TextAreaControl,
  TextAreaLabel
} from '../../ui/textArea.style';
import { setPropertyInfo } from '../../../store/propertyInfo/propertyInfo.action';

const FieldDescription = () => {

  const dispatch = useDispatch();

  return (
    <TextAreaControl>
      <TextAreaLabel>
        Description(Optional)
      </TextAreaLabel>
      <TextArea 
        placeholder="Short description of your property..."
        onChange={
        (e:any) => dispatch(setPropertyInfo("description",e.target.value))
        }>
      </TextArea>
    </TextAreaControl>
  );
}

export default FieldDescription;
