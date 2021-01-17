import keyIcon from '../../../assets/icon/nav/key.svg';
import aboutIcon from '../../../assets/icon/nav/about.svg';
import contactIcon from '../../../assets/icon/nav/contact.svg';
import houseIcon from '../../../assets/icon/nav/house.svg';
import helpIcon from '../../../assets/icon/nav/help.svg';
import account from '../../../assets/icon/nav/listings.svg';

export const drawerLinks = [
  {
    linkName: "MY ACCOUNT",
    icon: account,
    altText: "Account Icon",
    value: "myAccountPage",
    dropDownLinks: [
      {
        linkName: "LISTINGS",
        path: "/listings",
        propertyType: "apartment"
      },
      {
        linkName: "FAVOURITES",
        path: "./",
        propertyType: "condo"
      }
    ]
  },
  {
    linkName: "RENT",
    icon: keyIcon,
    altText: "Rent Icon",
    value: "rentPage",
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
    linkName: "ADD PROPERTIES",
    path: "add-property",
    icon: houseIcon,
    altText: "Add Property Icon",
    value: "addPropertiesPage"
  },
  {
    linkName: "ABOUT US",
    path: "/about",
    icon: aboutIcon,
    altText: "Abou us Icon",
    value: "aboutUsPage"
  },
  {
    linkName: "CONTACT US",
    path: "/contact",
    icon: contactIcon,
    altText: "Contact us Icon",
    value: "contactUsPage"
  },
  {
    linkName: "HELP",
    path: "./",
    icon: helpIcon,
    altText: "Help Icon",
    value: "helpPage"
  },

]


