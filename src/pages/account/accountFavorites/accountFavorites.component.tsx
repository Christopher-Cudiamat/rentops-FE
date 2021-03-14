import React from "react";
import CardProperty from "../../../components/cardProperty/cardProperty.component";
import ResultText from "../../../components/resultText/resultText.component";
import { IAccountFavoritesProps } from "./accountFavorites.type";

const AccountFavorites: React.FC<IAccountFavoritesProps> = ({ favorites }) => {
  return (
    <div>
      <ResultText dataLength={favorites.length} />
      {favorites.length > 0 && <CardProperty data={favorites} />}
    </div>
  );
};

export default AccountFavorites;
