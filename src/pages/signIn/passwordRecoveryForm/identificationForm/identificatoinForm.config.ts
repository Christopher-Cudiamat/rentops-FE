
import { regexEmail, regexLetters } from "../../../../utils/validation";

export const identificationFormArr = [
  {
    label:"First Name",
    name: "firstName",
    placeholder: "First Name",
    defaultValue: "",
    required: true,
    pattern: regexLetters,
    errorMessage: {
      required: "First Name is required",
      pattern:"First name should only be letters"
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
      pattern: "Last name should only be letters"
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
      pattern: "Email is not acceptable"
    },
  },
]
