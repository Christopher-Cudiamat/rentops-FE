import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Title } from '../../components/ui/title.style';
import { getProperty } from '../../services/propertyController';
import { formatAddComa } from '../../utils/formatNumbers';
import { ImageBanner,Container, Details, ButtonViewPhotos } from './property.style';
import PropertyPhotos from './propertyPhotos/propertyPhotos.component';


const Property = () => {
  
  const [data, setData] = useState<any>();
  const location = useLocation<{id:string}>();
  const [openModal, setOpenModal] = useState(false);
  
  console.log(data);

  useEffect(() => {
    getProperty(location.state!.id)
      .then(res => {
        setData(res);
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div>
      { 
        data &&
        <Container>
          <ImageBanner bgImage={data.propertyMedia.galleryPhotos[0].dataURL}/>
          <ButtonViewPhotos 
            secondary
            onClick={() => setOpenModal(true)}>
            View {data.propertyMedia.galleryPhotos.length} Photos
          </ButtonViewPhotos>
          <Details>
            <Title sub black bold>
              {data.propertyInfo.propertyType} in {data.propertyInfo.location}
            </Title>
            <Title sub black bold>
              ₱ {formatAddComa(data.propertyInfo.price)}/{data.propertyInfo.contractLength! === "Daily" ? "daily" : "monthly"}
            </Title>
            <p>Contract: {data.propertyInfo.contractLength}</p>
            <p>Size: {data.propertyInfo.size}</p>
            <p>Size: {data.propertyInfo.bed}</p>
            <p>Size: {data.propertyInfo.bathroom}</p>
            <p>Furnish: {data.propertyInfo.furnish}</p>
            {
              data.propertyInfo.developer !== "none"  &&
              <p>Developer: {data.propertyInfo.developer}</p>
            }
            <div>
              <p>Amenities:</p>
              {
                data.propertyInfo.amenities.map((el: string, index: number) =>
                <p key={index}>{el}</p>
                )
              }
            </div>
          </Details>
          {
            openModal &&
              <PropertyPhotos 
                photos={data.propertyMedia.galleryPhotos}
                setOpenModal={setOpenModal}/>
          }
      
        </Container>
      }
    </div>
  );
}

export default Property;
