import React, { useEffect, useState } from "react";
import {
  TabListStyled,
  TabPanelStyled,
  TabsStyled,
  TabStyled,
} from "../../components/ui/tabs.style";
import { Title } from "../../components/ui/title.style";
import useSelectedIndex from "../../hooks/useSelectedIndex";
import {
  getAddedProperties,
  getFavoriteProperties,
} from "../../services/propertyController";
import { accountTabsArr } from "./account.config";
import { IAccountProps } from "./account.type";
import AccountFavorites from "./accountFavorites/accountFavorites.component";
import AccountListings from "./accountListings/accountListings.component";
import AccountProfile from "./accountProfile/accountProfile.component";

const Account: React.FC<IAccountProps> = ({ profileData }) => {
  const [selected, setSelected] = useSelectedIndex(0);
  const [listings, setListings] = useState<any[]>([]);
  const [favorites, setFavorites] = useState<any[]>([]);
  console.log("listings", listings);
  console.log("favorites", favorites);
  console.log("listings", listings.length);
  console.log("favorites", favorites.length);

  useEffect(() => {
    getAddedProperties().then((res) => {
      console.log("RESADDED", res);
      setListings(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    getFavoriteProperties(profileData.likes).then((res) => {
      console.log("FAVADDED", res);
      setFavorites(res);
    });

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [profileData.likes]);

  return (
    <>
      <Title page bold style={{ marginBottom: "0rem" }}>
        Account
      </Title>
      <TabsStyled>
        <TabListStyled>
          {accountTabsArr.map((el: string, index: number) => (
            <TabStyled
              key={index}
              active={selected === index}
              onClick={() => setSelected(index)}
            >
              {el}
            </TabStyled>
          ))}
        </TabListStyled>

        <TabPanelStyled>
          <AccountProfile
            favoritesLength={favorites.length}
            listingsLength={listings.length}
            profileData={profileData}
          />
        </TabPanelStyled>
        <TabPanelStyled>
          <AccountListings listings={listings} />
        </TabPanelStyled>
        <TabPanelStyled>
          <AccountFavorites favorites={favorites} />
        </TabPanelStyled>
      </TabsStyled>
    </>
  );
};

export default Account;
