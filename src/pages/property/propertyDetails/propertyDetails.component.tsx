import React from 'react';
import { Paragraph } from '../../../components/ui/p.style';
import { Table, Td, Tr} from '../../../components/ui/table.style';
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
      
        <Table>
        <Tr>
          <Td>Contract-Length</Td>
          <Td>{data.propertyInfo.contractLength}</Td>
        </Tr>
        <Tr>
          <Td>Surface</Td>
          <Td>{data.propertyInfo.size} sqm.</Td>
        </Tr>
        <Tr>
          <Td>Bedrooms</Td>
          <Td>{data.propertyInfo.bed} bedroom/s</Td>
        </Tr>
        <Tr>
          <Td>Bathrooms</Td>
          <Td>{data.propertyInfo.bathroom} bathroom/s</Td>
        </Tr>
        <Tr>
          <Td>Furnish</Td>
          <Td>{data.propertyInfo.furnish}</Td>
        </Tr>

        {
          data.propertyInfo.developer !== "none"  &&
          <Tr>
            <Td>Developer</Td>
            <Td>{data.propertyInfo.developer}</Td>
          </Tr>
        }
        
        {
          data.propertyInfo.amenities.length > 0 &&
          <Tr>
            <Td>
              Amenities:
            </Td>
            {
              data.propertyInfo.amenities.map((el: string, index: number) =>
              <div
                key={index}
                style={{marginBottom:"1.2rem",marginLeft:".7rem", fontSize: "1.6rem"}} 
              >
                -  {el}
              </div>
              )
            }            
          </Tr> 
        } 

        </Table>
        
        <PropertyContactPerson contactInfo={data.propertyContact}/>
      </Details>
    </Wrapper>
  );
}

export default PropertyDetails;
