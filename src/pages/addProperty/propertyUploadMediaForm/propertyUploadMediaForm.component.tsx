import React, { useState } from 'react';
import FieldImageUploadGallery from '../../../components/fieldImageUploadGallery/fieldImageUploadGallery.container';
import { Button } from '../../../components/ui/button.style';
import { addProperty } from '../../../services/propertyController';
import { IPropertyMediaProps } from './propertyUploadMediaForm.type';


const ProperUploadMediaForm: React.FC<IPropertyMediaProps> = ({
  propertyInfo,
  propertyContact,
  propertyMedia
  }) => {


  const [images,setImages] = useState<any[]>([])

  const handleSubmitProperty = () => {
    addProperty({
    propertyInfo,
    propertyContact,
    propertyMedia
    })
    .then((res) => {
      setImages(res.propertyMedia.galleryPhotos)
    })
  }

  return (
    <div style={{padding: "2rem 2rem 5rem 2rem"}}>
      {images.length !== 0 &&
        images.map((el:any,index:number) => 
          <img src={el.dataURL} key={index} alt="test"/>
        )
      }
      <FieldImageUploadGallery
        label={"Click here to add listing Photo"}
        text={"Listing Photo:"}
        multiple={false}
        previewWidth={"100%"}/>
      <FieldImageUploadGallery 
        label={"Click here to add gallery photos"}
        text={"Gallery Photos:"}
        multiple={true}
        previewWidth={"100"}
      />
      <Button 
        primary 
        style={{marginTop: "5rem"}}
        onClick={handleSubmitProperty}>
        Add Property
      </Button>
    </div>
  );
}

export default ProperUploadMediaForm;
