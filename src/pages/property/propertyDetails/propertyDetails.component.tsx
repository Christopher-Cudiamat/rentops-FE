import React from 'react';
import { Paragraph } from '../../../components/ui/p.style';
import { Title } from '../../../components/ui/title.style';
import { formatAddComa } from '../../../utils/formatNumbers';
import PropertyContactPerson from '../propertyContactPerson/propertyContactPerson.component';
import { 
  Wrapper,
  ButtonViewPhotos,
  ButtonViewVideos,
  Details,
  ImageBanner,
  MediaButtonsWrapper,
  DivDescription
} from './propertyDetails.style';
import { IPropertyDetailsProps } from './propertyDetails.type';



const PropertyDetails: React.FC<IPropertyDetailsProps> = ({
  data,
  setOpenModal
}) => {
  
  return (
    <Wrapper>
      <ImageBanner bgImage={data.propertyMedia.galleryPhotos[0]}/>
      <MediaButtonsWrapper>
        <ButtonViewPhotos 
          onClick={() => setOpenModal(true)}
          secondary
        >
          View {data.propertyMedia.galleryPhotos.length} Photos
        </ButtonViewPhotos>
        <ButtonViewVideos 
          secondary
        >
          View 1 Video
        </ButtonViewVideos>
      </MediaButtonsWrapper>

      <Details>
        <Title small black bold>
          {data.propertyInfo.propertyType} -
          ₱ {formatAddComa(data.propertyInfo.price)}/{data.propertyInfo.contractLength! === "Daily" ? "daily" : "monthly"}
        </Title>
        <Title small black bold>
          {data.propertyInfo.location}
        </Title>
        {
          data.propertyInfo.description &&
          <DivDescription>
            <Paragraph 
              medium
              bold
            >
              About the property
            </Paragraph>
            <Paragraph medium>
              {data.propertyInfo.description}
            </Paragraph>
          </DivDescription>
        }
        <Paragraph 
          medium 
          bold
        >
          Contract: {data.propertyInfo.contractLength}
        </Paragraph>
        <Paragraph 
          medium 
          bold
        >
          Surface: {data.propertyInfo.size} sqm.
        </Paragraph>
        <Paragraph 
          medium 
          bold
        >
          Bedrooms: {data.propertyInfo.bed}
        </Paragraph>
        <Paragraph 
          medium 
          bold
        >
          Bathrooms: {data.propertyInfo.bathroom}
        </Paragraph>
        <Paragraph 
          medium 
          bold
        >
          Furnish: {data.propertyInfo.furnish}
        </Paragraph>
        {
          data.propertyInfo.developer !== "none"  &&
          <Paragraph 
            medium 
            bold
          >
            Developer: {data.propertyInfo.developer}
          </Paragraph>
        }

        {
          data.propertyInfo.amenities.length > 0 &&
          <div>
            <Paragraph 
              medium 
              bold
            >
              Amenities:
            </Paragraph>
            {
              data.propertyInfo.amenities.map((el: string, index: number) =>
              <Paragraph 
                key={index}
                style={{marginLeft:".7rem", fontSize: "1.6rem"}} 
              >
                -  {el}
              </Paragraph>
              )
            }            
          </div>
        }
        <PropertyContactPerson contactInfo={data.propertyContact}/>
      </Details>
    </Wrapper>
  );
}

export default PropertyDetails;
