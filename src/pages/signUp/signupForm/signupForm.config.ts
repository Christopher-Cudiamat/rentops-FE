import { regexEmail, regexLetters } from "../../../utils/validation";

export const signupFormArr = [
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
    label:"Password (Minumum 8 character)",
    name: "password",
    placeholder: "Password",
    defaultValue: "",
    required: true,
    minLength: 8,
    errorMessage: {
      required: "Password is required",
      pattern: "Password should contain at least a letter and a number",
      minLength: "Password should be minimum of 8 characters"
    },
    type:"password"
  }
]