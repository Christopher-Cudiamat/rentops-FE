import React from 'react';
import { ButtonBack } from '../../../components/ui/button.style';
import { Title, TitleBar } from '../../../components/ui/title.style';
import { Container, GalleryPhoto} from './propertyPhotos.style';
import { IPropertyPhotosProps } from './propertyPhotos.type';

const PropertyPhotos: React.FC<IPropertyPhotosProps> = ({
  photos,
  setOpenModal
  }) => {
  

  return (
    <Container>
      <TitleBar>
        <Title sub bold black>
          Photos
        </Title>
        <ButtonBack 
          onClick={() => 
          setOpenModal(false)}>
          Back
        </ButtonBack>
      </TitleBar>
     
      {
        photos!.map((el: any, index: number) => 
          <GalleryPhoto 
            src={el.dataURL} 
            alt="Property view" 
            key={index}/>
        )
      }
    </Container>
  );
}

export default PropertyPhotos;
