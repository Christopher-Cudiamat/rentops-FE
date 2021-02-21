import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router';
import { getProperty } from '../../services/propertyController';
import { Container, MapContainer } from './property.style';
import ReactMapGL, { Marker } from 'react-map-gl';
import 'mapbox-gl/dist/mapbox-gl.css';
import locationPin from '../../assets/icon/location.svg'
import PropertyDetails from './propertyDetails/propertyDetails.component';
import PropertyPhotos from './propertyPhotos/propertyPhotos.component';



const Property = () => {
  
  const [data, setData] = useState<any>();
  const location = useLocation<{id:string}>();
  let  [viewport, setViewport] = useState<any|undefined>();
  const [openModal, setOpenModal] = useState(false);

  useEffect(() => {
    getProperty(location.state!.id)
      .then(res => {
        if(res){
          setData(res);
          setViewport({
            width: "100%",
            height: "100%",
            latitude: +res.propertyInfo.latitude,
            longitude: +res.propertyInfo.longitude,
            zoom: 15
          })
        }
      })
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <div>
      { 
        data &&
        <Container>

          <PropertyDetails 
            data={data}
            setOpenModal={setOpenModal}
          />

          { viewport !== undefined &&
          <MapContainer>
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
            </MapContainer>
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
