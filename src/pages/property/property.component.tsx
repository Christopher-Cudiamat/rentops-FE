import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { Title } from '../../components/ui/title.style';
import { getProperty } from '../../services/propertyController';
import { formatAddComa } from '../../utils/formatNumbers';
import { ImageBanner,Container, Details, ButtonViewPhotos } from './property.style';
import PropertyPhotos from './propertyPhotos/propertyPhotos.component';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import locationPin from '../../assets/icon/location.svg'



const Property = () => {
  
  const [data, setData] = useState<any>();
  const location = useLocation<{id:string}>();
  const [openModal, setOpenModal] = useState(false);
  let  [viewport, setViewport] = useState<any|undefined>();
  console.log(viewport)


  useEffect(() => {
    getProperty(location.state!.id)
      .then(res => {
        if(res){
          setData(res);
          setViewport({
            width: 400,
            height: 400,
            latitude: +res.propertyInfo.latitude,
            longitude: +res.propertyInfo.longitude,
            zoom: 15
          })
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // useEffect(() => {
  //   if(data){
  //     setViewport({
  //       ...viewport,
  //       latitude: +data.propertyInfo.latitude,
  //       longitude: +data.propertyInfo.longitude,
  //     })
  //   }
  // // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, []);

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
          { viewport !== undefined &&
            <ReactMapGL
              {...viewport}
              // mapboxApiAccessToken={process.env.REACT_APP_MAPBOX_TOKEN}
              mapboxApiAccessToken="pk.eyJ1IjoiY3Jpc3RvcHMxMyIsImEiOiJja2tsYXZqbDQwOTU0Mnhsb2g0OWszNmRvIn0.BZPjU2rnwZKo_hNBfhsjmg"
              mapStyle="mapbox://styles/cristops13/ckklclyxe3nnp17tc2d1p36tt"
              onViewportChange={(nextViewport: any) => setViewport(nextViewport)}
            >
              <Marker 
                latitude={+data.propertyInfo.latitude} 
                longitude={+data.propertyInfo.longitude} 
                offsetLeft={-20} 
                offsetTop={-10}>
                <img 
                src={locationPin}  
                alt="location"
                style={{height:"3rem", width: "3rem"}}/>
              </Marker>
            </ReactMapGL>
          }
          
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
