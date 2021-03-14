import React from "react";
import CardProperty from "../../../components/cardProperty/cardProperty.component";
import ResultText from "../../../components/resultText/resultText.component";
import { IAccountListingsProps } from "./accountListings.type";

const AccountListings: React.FC<IAccountListingsProps> = ({ listings }) => {
  return (
    <div>
      <ResultText dataLength={listings.length} />
      {listings.length > 0 && <CardProperty data={listings} />}
    </div>
  );
};

export default AccountListings;
