import * as Yup from "yup";

const LoginSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, "Should be min of 10 characters")
    .max(30, "Should be max of 20 characters"),
  password: Yup.string()
    .min(8, "Should be min of 8 characters")
    .max(20, "Should be max of 15 characters"),
});

const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .min(10, "Should be min of 10 characters")
    .max(30, "Should be max of 20 characters"),
  userName: Yup.string()
    .min(10, "Should be min of 5 characters")
    .max(20, "Should be max of 20 characters"),
  password: Yup.string()
    .min(8, "Should be min of 8 characters")
    .max(20, "Should be max of 15 characters"),
});

const VerificationSchema = Yup.object().shape({
  VerificationField: Yup.string()
    .min(5, "Should be min of 5 characters")
    .max(5, "Should be max of 5 characters"),
});

export { LoginSchema, SignUpSchema, VerificationSchema };
