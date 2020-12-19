import React from 'react';
import { FooterSocialArr, pagesLinksArr } from './footer.config';
import { 
    FooterContainer,
    FooterLink,
    FooterLinksContainer,
    FooterLower,
    FooterLowerText,
    FooterSocialContainer,
    FooterSocialIcon 
} from './footer.style';
import { IFooterLinks, IFooterSocial } from './footer.type';

const Footer: React.FC = () => {
    return(
        <FooterContainer>
            <FooterLinksContainer>
                {
                    pagesLinksArr.map((el:IFooterLinks, index: number) => 
                        <FooterLink key={index}>{el.name}</FooterLink>
                    ) 
                }
            </FooterLinksContainer>
            <FooterSocialContainer>
                {
                    FooterSocialArr.map((el:IFooterSocial,index: number) => 
                        <FooterSocialIcon src={el.icon} alt={el.altText} key={index} />
                    )
                }
            </FooterSocialContainer>

            <FooterLower>
                <FooterLowerText>
                    Fair Housing and Equal Opportunities
                </FooterLowerText>
                <FooterLowerText>
                    @ Rentops 2020
                </FooterLowerText>
            </FooterLower>
        </FooterContainer>
    )
}

export default Footer;