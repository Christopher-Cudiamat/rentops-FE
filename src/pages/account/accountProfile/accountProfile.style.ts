import styled from "styled-components/macro";

export const ProfileContainer = styled.div`
  background: ${({ theme }) => theme.color.grayLightBlue};
  position: relative;
  margin-top: 8rem;
  padding: 8rem 1rem 2rem 1rem;
  text-align: center;
  border-radius: 0.5rem;
`;

export const ProfileAvatarContainer = styled.div`
  width: 12rem;
  height: 12rem;
  position: absolute;
  top: 0%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

export const ProfileAvatar = styled.img`
  width: 12rem;
  height: 12rem;
  opacity: 0.6;
`;

export const ProfileAvatarEdit = styled.img`
  width: 3rem;
  height: 3rem;
  position: absolute;
  bottom: 0%;
  right: -25px;
  transform: translate(-50%, -50%);
  background: white;
  border-radius: 50%;
  padding: 0.1rem;
`;
