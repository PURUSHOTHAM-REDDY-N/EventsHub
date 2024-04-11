import * as Yup from "yup";

const EditProfileSchema = Yup.object().shape({
    // username: Yup.string(),
    // email: Yup.string(),
    dob: Yup.string().required("Required"),
    country: Yup.string().required("Required"),
  // image: Yup.string()
});


export { EditProfileSchema };
