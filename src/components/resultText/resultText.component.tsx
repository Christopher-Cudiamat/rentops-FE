import React from "react";
import { ResultTextStyled } from "./resultText.style";
import { IResultTextProps } from "./resultText.type";

const ResultText: React.FC<IResultTextProps> = ({ dataLength }) => {
  return (
    <ResultTextStyled>
      {dataLength === 1
        ? `${dataLength} Property Found`
        : dataLength >= 2
        ? `${dataLength} Properties Found`
        : "No result found"}
    </ResultTextStyled>
  );
};

export default ResultText;
