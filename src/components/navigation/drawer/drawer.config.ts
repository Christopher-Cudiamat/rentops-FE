import likeIcon from '../../../assets/icon/nav/like.svg';
import keyIcon from '../../../assets/icon/nav/key.svg';
import aboutIcon from '../../../assets/icon/nav/about.svg';
import contactIcon from '../../../assets/icon/nav/contact.svg';
import houseIcon from '../../../assets/icon/nav/house.svg';
import helpIcon from '../../../assets/icon/nav/help.svg';

export const drawerLinks = [
  {
    linkName: "MY LISTINGS",
    path: "/my-listings",
    icon: keyIcon,
    altText: "Listing"
  },
  {
    linkName: "RENT",
    icon: keyIcon,
    altText: "Listing",
    dropDownLinks: [
      {
        linkName: "APARTMENTS",
        path: "/rent",
        propertyType: "apartment"
      },
      {
        linkName: "CONDO",
        path: "/rent",
        propertyType: "condo"
      },
      {
        linkName: "HOUSE",
        path: "/rent",
        propertyType: "house"
      },
      {
        linkName: "TOWNHOUSE",
        path: "/rent",
        propertyType: "townhouse"
      },
      {
        linkName: "ALL TYPES",
        path: "/rent",
        propertyType: "all"
      }
    ]
  },
  {
    linkName: "FAVORITES",
    path: "./",
    icon: likeIcon,
    altText: "Like"
  },
  {
    linkName: "ADD PROPERTIES",
    path: "add-property",
    icon: houseIcon,
    altText: "Like"
  },
  {
    linkName: "ABOUT US",
    path: "/about",
    icon: aboutIcon,
    altText: "Like",
  },
  {
    linkName: "CONTACT US",
    path: "/contact",
    icon: contactIcon,
    altText: "Like"
  },
  {
    linkName: "HELP",
    path: "./",
    icon: helpIcon,
    altText: "Like"
  },

]


