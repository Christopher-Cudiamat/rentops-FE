import React, { useState } from 'react';
import { ButtonStyled } from './SortPropertyForm.style';

const SortPropertyForm = (props:any) => {

  const [show,setShow] = useState(false);
  
  const sortArr = [
    {
      text: "Newest Post",
      value: "newest"
    },
    {
      text: "Oldest Post",
      value: "oldest"
    },
    {
      text: "Biggest",
      value: "biggest"
    },
    {
      text: "Smallest",
      value: "smallest"
    },
    {
      text: "Expensive",
      value: "expensive"
    },
    {
      text: "Cheapest",
      value: "cheapest"
    },
  ];

  return (
    <>
      <ButtonStyled onClick={() => setShow(!show)}>
        Sort
      </ButtonStyled>
      {show &&
        <div style={{
          width: "100%",
          position: "fixed",
          top: "0%",
          left: "0%",
          borderRadius: "2rem",
          background: "white",
          padding: "3rem 0rem",
          zIndex:9999999,
          fontSize: "1.8rem",
          height: "100vh",
          }}>
            <p 
               onClick={() => setShow(false)}
            style={{fontSize:"1.8rem", marginBottom: "2rem"}}>Back:</p>
          {
            sortArr.map((el:any, index: number) => 
              <p 
              key={index}
              
              onClick={() => {
                props.setSort(el.value);
                setShow(false);}}
              style={{
                fontSize: "2.5rem",
                borderBottom: "1px solid #888",
                marginBottom: "3rem"
                ,padding: "0rem 2rem"
                }}>
                {el.text}
              </p>
            )
          }
        </div>
      }
    </>
  );
}

export default SortPropertyForm;
