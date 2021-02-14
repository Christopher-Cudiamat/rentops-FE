export const changePasswordFormArr = [
  {
    label:"New Password (Minumum 8 character)",
    name: "newPassword",
    placeholder: "New Password",
    defaultValue: "",
    required: true,
    pattern: "",
    minLength: 8,
    errorMessage: {
      required: "New password is required",
      pattern: "New password should contain at least a letter and a number",
      minLength: "New password should be minimum of 8 characters"
    },
    type:"password"
  },
  {
    label:"Confirm New Passwrod",
    name: "confirmNewPassword",
    placeholder: "Condirm New Password",
    defaultValue: "",
    required: true,
    pattern: "",
    minLength: 8,
    errorMessage: {
      required: "Confirm new password is required",
      validate: "Password did not match",
    },
    type:"password",
  }
]
