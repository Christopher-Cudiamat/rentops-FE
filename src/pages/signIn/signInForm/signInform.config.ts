export const signInFormArr = [
  {
    label:"Email",
    name: "email",
    placeholder: "Email",
    defaultValue: "",
    required: true,
    errorMessage: {
      required: "Email is required",
    },
  },
  {
    label:"Password",
    name: "password",
    placeholder: "Password",
    defaultValue: "",
    required: true,
    errorMessage: {
      required: "Password is required",
    },
    type:"password"
  }
]