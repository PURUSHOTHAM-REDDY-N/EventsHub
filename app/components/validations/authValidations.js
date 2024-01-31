import * as Yup from "yup";


const LoginSchema = Yup.object().shape({
    mailOrPhoneField: Yup.string()
      .min(10, "Should be min of 10 characters")
      .max(30, "Should be max of 16 characters")
      .required("Email Or Phone is required"),
  });

  const SignUpSchema = Yup.object().shape({
    mailOrPhoneField: Yup.string()
      .min(10, "Should be min of 10 characters")
      .max(130, "Should be max of 16 characters")
      
  });

  export{LoginSchema,SignUpSchema}