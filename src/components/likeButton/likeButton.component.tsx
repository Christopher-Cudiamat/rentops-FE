import React, { useEffect, useState } from 'react';
import { LikeButtonStyled } from './likeButton.style';
import { ILikeButtonProps } from './likeButton.type';


const LikeButton: React.FC<ILikeButtonProps> = ({
  likes,
  propertyId
}) => {

  const [value,setValue] = useState(false);

  useEffect(() => {
    if(likes.length > 0){
      let propertyIsLiked = likes.some(el => el.propertyLikedId.includes(propertyId));
      setValue(propertyIsLiked);
    } else {
      setValue(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [likes]);

 
  return (
    <LikeButtonStyled isLiked={value}> 
    </LikeButtonStyled>
  );
}

export default LikeButton;
