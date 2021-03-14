import keyIcon from "../../../assets/icon/nav/key.svg";
import aboutIcon from "../../../assets/icon/nav/about.svg";
import contactIcon from "../../../assets/icon/nav/contact.svg";
import houseIcon from "../../../assets/icon/nav/house.svg";
import helpIcon from "../../../assets/icon/nav/help.svg";
import account from "../../../assets/icon/nav/listings.svg";

export const navMobileLinks = [
  {
    linkName: "MY ACCOUNT",
    path: "account",
    icon: account,
    altText: "Account Icon",
    value: "myAccountPage",
  },
  {
    linkName: "RENT",
    icon: keyIcon,
    altText: "Rent Icon",
    value: "rentPage",
    dropDownLinks: [
      {
        linkName: "ALL",
        path: "/rent",
        propertyType: "",
      },
      {
        linkName: "APARTMENTS",
        path: "/rent",
        propertyType: "Apartment",
      },
      {
        linkName: "CONDO",
        path: "/rent",
        propertyType: "Condo",
      },
      {
        linkName: "HOUSE",
        path: "/rent",
        propertyType: "House",
      },
      {
        linkName: "TOWNHOUSE",
        path: "/rent",
        propertyType: "Townhouse",
      },
    ],
  },
  {
    linkName: "ADD PROPERTIES",
    path: "add-property",
    icon: houseIcon,
    altText: "Add Property Icon",
    value: "addPropertiesPage",
  },
  {
    linkName: "ABOUT US",
    path: "/about",
    icon: aboutIcon,
    altText: "Abou us Icon",
    value: "aboutUsPage",
  },
  {
    linkName: "CONTACT US",
    path: "/contact",
    icon: contactIcon,
    altText: "Contact us Icon",
    value: "contactUsPage",
  },
  {
    linkName: "HELP",
    path: "/help",
    icon: helpIcon,
    altText: "Help Icon",
    value: "helpPage",
  },
];
