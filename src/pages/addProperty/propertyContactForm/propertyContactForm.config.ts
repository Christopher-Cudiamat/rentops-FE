import { regexEmail, regexLetters, regexNumbers } from "../../../utils/validation";

export const contactFormArr = [
  {
    label:"First Name",
    name: "firstName",
    placeholder: "First Name",
    defaultValue: "",
    required: true,
    pattern: regexLetters,
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
    errorMessage: {
      required: "Email is required",
      pattern: "Email is not acceptable",
      validate: "Email already Exist"
    },
    type: "checkbox"
  },
  {
    label:"Phone Number (Minumum 10 character)",
    name: "phoneNumber",
    placeholder: "Phone Number",
    defaultValue: "",
    required: true,
    minLength: 10,
    // pattern: regexNumbers,
    errorMessage: {
      required: "Phone number is required",
      minLength: "Phone number should be minimum of 10 digits",
      // pattern: "Phone number should not container letters or special characters"
    },
  }
]