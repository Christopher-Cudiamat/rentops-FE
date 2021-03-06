import React, { useEffect } from 'react';
import { ButtonBack } from '../../../components/ui/button.style';
import { 
  Title,
  TitleBar } from '../../../components/ui/title.style';
import { 
  Container,
  GalleryPhoto,
  GalleryPhotoContainer
} from './propertyPhotos.style';
import { IPropertyPhotosProps } from './propertyPhotos.type';
import { nanoid } from 'nanoid'; 


const PropertyPhotos: React.FC<IPropertyPhotosProps> = ({
  photos,
  setOpenModal
}) => {

  useEffect(() => {
    document.body.style.overflow = "hidden";
    return () => {
      document.body.style.overflow = "visible";
    }
  }, []);
  
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
      
      <GalleryPhotoContainer>
        {
          photos!.map((el: string) => 
            <GalleryPhoto 
              src={el} 
              alt="Property view" 
              key={nanoid()}/>
          )
        }
      </GalleryPhotoContainer>
    </Container>
  );
}

export default PropertyPhotos;
