import { IUserAuthState } from "../../../store/userAuth/userAuth.type";

export interface IAccountProfileProps {
  profileData: IUserAuthState;
  favoritesLength: number;
  listingsLength: number;
}
