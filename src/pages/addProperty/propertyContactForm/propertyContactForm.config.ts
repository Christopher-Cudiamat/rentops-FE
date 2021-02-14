import {
  regexEmail,
  regexLetters,
  regexNumbers 
} from "../../../utils/validation";

export const contactFormArr = [
  {
    label:"First Name",
    name: "firstName",
    placeholder: "First Name",
    defaultValue: "",
    required: true,
    pattern: regexLetters,
    minLength: 1,
    errorMessage: {
      required: "First Name is required",
      pattern:"First Name should only be letters"
    }
  },
  {
    label:"Last Name",
    name: "lastName",
    placeholder: "Last Name",
    defaultValue: "",
    required: true,
    minLength: 1,
    pattern: regexLetters,
    errorMessage: {
      required: "Last Name is required",
      pattern: "Last Name should only be letters"
    }
  },
  {
    label:"Email",
    name: "email",
    placeholder: "Email",
    defaultValue: "",
    required: true,
    pattern: regexEmail,
    minLength: 1,
    errorMessage: {
      required: "Email is required",
      pattern: "Email is not acceptable",
    },
  },
  {
    label:"Phone Number (Minumum 10 character)",
    name: "phoneNumber",
    placeholder: "Phone Number",
    defaultValue: "",
    required: true,
    pattern: regexNumbers,
    minLength: 10,
    errorMessage: {
      required: "Phone number is required",
      minLength: "Phone number should be minimum of 10 digits",
      pattern: "Phone number should only contain numbers",
    },
  }
]