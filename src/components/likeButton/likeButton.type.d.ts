import { ILikes } from '../../store/userAuth/userAuth.type';

export interface ILikeButtonProps {
  propertyId: string,
  likes: ILikes[] | [],
}