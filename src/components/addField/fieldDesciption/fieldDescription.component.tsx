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
        Description (Maximum 500 characters - Optional)
      </TextAreaLabel>
      <TextArea
        maxLength={500}
        placeholder="Type a short description of your property..."
        onChange={
          (e) => dispatch(setPropertyInfo("description",e.target.value))
        }
      >
      </TextArea>
    </TextAreaControl>
  );
}

export default FieldDescription;
