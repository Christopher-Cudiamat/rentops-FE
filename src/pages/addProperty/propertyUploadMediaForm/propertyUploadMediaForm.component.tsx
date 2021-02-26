import React from 'react';
import { useHistory } from 'react-router-dom';
import FieldImageUploadGallery from '../../../components/addField/fieldImageUploadGallery/fieldImageUploadGallery.container';
import { Button } from '../../../components/ui/button.style';
import { addProperty } from '../../../services/propertyController';
import { FormContainer } from './propertyUplaodMediaForm.style';
import { IPropertyMediaProps } from './propertyUploadMediaForm.type';



const ProperUploadMediaForm: React.FC<IPropertyMediaProps> = ({
  propertyInfo,
  propertyContact,
  propertyMedia,
  resetPropertyMedia,
  setPage
}) => {

  const history = useHistory();

  const handleSubmitProperty = () => {
    addProperty({
    propertyInfo,
    propertyContact,
    propertyMedia,
    })
      .then(() => {
        resetPropertyMedia();
        setPage("homePage",true);
        history.push('./');
    })  
  }


  return (
    <FormContainer>
      <FieldImageUploadGallery 
        label={"Click here to add property photos"}
        text={"Gallery Photos:"}
        previewWidth={"100"}
      />
      <Button 
        primary 
        style={{marginTop: "5rem"}}
        onClick={handleSubmitProperty}>
        Add Property
      </Button>
    </FormContainer>
  );
}

export default ProperUploadMediaForm;

