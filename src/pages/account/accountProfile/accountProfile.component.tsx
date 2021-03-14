import React from "react";
import { Paragraph } from "../../../components/ui/p.style";
import avatar from "../.././../assets/icon/avatar.svg";
import edit from "../.././../assets/icon/pencil.svg";
import {
  ProfileAvatar,
  ProfileAvatarContainer,
  ProfileAvatarEdit,
  ProfileContainer,
} from "./accountProfile.style";
import { IAccountProfileProps } from "./accountProfile.type";

const AccountProfile: React.FC<IAccountProfileProps> = ({
  profileData,
  favoritesLength,
  listingsLength,
}) => {
  return (
    <ProfileContainer>
      <ProfileAvatarContainer>
        <ProfileAvatar src={avatar} alt="Avatar" />
        <ProfileAvatarEdit src={edit} alt="Avatar edit icon" />
      </ProfileAvatarContainer>
      <Paragraph>
        {profileData.firstName} {profileData.lastName}
      </Paragraph>
      <Paragraph>{profileData.email}</Paragraph>
      <Paragraph>{profileData.phoneNumber}</Paragraph>
      <Paragraph>Advetised property: {listingsLength}</Paragraph>
      <Paragraph>Favorite property: {favoritesLength}</Paragraph>
    </ProfileContainer>
  );
};

export default AccountProfile;
