import React from 'react';
import usePageOffsetY from '../../hooks/usePageOffsetY';
import { scrollToTop } from '../../utils/scrollManager';
import { BackToTopButtonStyle } from './backToTopButton.style';

const BackToTopButton: React.FC = () => {

  const offSetY = usePageOffsetY();

  return (

      <BackToTopButtonStyle 
        isVisible={offSetY > 500}
        onClick={() => scrollToTop("smooth")}>
      </BackToTopButtonStyle>
    

  );
}

export default BackToTopButton;
