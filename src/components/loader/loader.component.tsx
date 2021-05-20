import React from "react";
import { LoaderStyled, LoaderUnderlay } from "./loader.style";
import loader from "../../assets/gifs/spin.gif";
import { ILoaderProps } from "./loader.type";

const Loader: React.FC<ILoaderProps> = ({ isLoading }) => {
  return (
    <>
      {isLoading ? (
        <>
          <LoaderStyled src={loader} alt="loader" />
          <LoaderUnderlay />
          <p>loading branch A</p>
          <p>loading branch B</p>
        </>
      ) : null}
    </>
  );
};

export default Loader;
