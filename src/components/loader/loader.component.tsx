import React from 'react';
import { LoaderUnderlay } from './loader.style';
import loader from '../../assets/gifs/reload.gif';
const Loader = () => {
  return (
    <>
     {/* { loader ? */}

          {/* <img 
            src={loader}
            alt="loader"
            style={{
            width: "8rem",
            height: "8rem",
            position: "absolute",
            zIndex: 9999,  
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)"}}/>  */}
          
       
        {/* : null
      } */}
 
    <LoaderUnderlay>
      
    </LoaderUnderlay>
    </>
  );
}

export default Loader;
