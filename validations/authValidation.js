import * as yup from "yup";

export const registerSchema = yup.object({
  email: yup.string().email("Invalid email").required("Required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character (@$!%*?&#)"
    )
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});

export const loginSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
  password: yup
    .string()
    .min(8, "Password should be of minimum 8 characters length")
    .required("Password is required"),
  keepLoggedIn: yup.boolean(),
});

export const verificationSchema = yup.object({
  verification_code: yup.string().required("Verification code is required"),
});

export const forgotPassSchema = yup.object({
  email: yup
    .string()
    .email("Enter a valid email")
    .required("Email is required"),
});

export const resetPasswordSchema = yup.object({
  verification_code: yup.string().required("Verification code is required"),
  password: yup
    .string()
    .matches(
      /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&#])[A-Za-z\d@$!%*?&#]{8,}$/,
      "Password must be at least 8 characters long and include uppercase, lowercase, number, and special character (@$!%*?&#)"
    )
    .required("Required"),
  confirm_password: yup
    .string()
    .oneOf([yup.ref("password"), null], "Passwords must match")
    .required("Confirm your password"),
});
