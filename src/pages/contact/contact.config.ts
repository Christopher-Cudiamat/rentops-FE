import { regexEmail } from "../../utils/validation";

export const contactFormArr = [
  {
    label:"Email",
    name: "email",
    placeholder: "Your email here",
    defaultValue: "",
    required: true,
    pattern: regexEmail,
    errorMessage: {
      required: "Email is required",
      pattern: "Email is not acceptable",
    },
  },
  {
    label:"Subject",
    name: "subject",
    placeholder: "Subject",
    defaultValue: "",
    required: true,
    errorMessage: {
      required: "Subject is required",
    },
    type:"password"
  }
]