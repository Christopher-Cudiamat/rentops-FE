import React from "react";
import {
  FooterLowerArr,
  FooterSocialArr,
  pagesLinksArr,
} from "./footer.config";
import {
  FooterContainer,
  FooterLink,
  FooterLinksContainer,
  FooterLower,
  FooterLowerText,
  FooterSocialContainer,
  FooterSocialIcon,
} from "./footer.style";
import { IFooterLinks, IFooterSocial, IFooterLowerLinks } from "./footer.type";

const Footer: React.FC = () => {
  return (
    <FooterContainer>
      <FooterLinksContainer>
        {pagesLinksArr.map((el: IFooterLinks, index: number) => (
          <FooterLink key={index}>{el.name}</FooterLink>
        ))}
      </FooterLinksContainer>
      <FooterSocialContainer>
        {FooterSocialArr.map((el: IFooterSocial, index: number) => (
          <FooterSocialIcon src={el.icon} alt={el.altText} key={index} />
        ))}
      </FooterSocialContainer>
      <FooterLower>
        {FooterLowerArr.map((el: IFooterLowerLinks, index: number) => (
          <FooterLowerText key={index}>{el.text}</FooterLowerText>
        ))}
      </FooterLower>
    </FooterContainer>
  );
};

export default Footer;
