import * as Yup from "yup";

const CreateEventSchema = Yup.object().shape({
  title: Yup.string().required("Required"),
  description: Yup.string().required("Required"),
  start_date: Yup.string().required("Required"),
  start_time: Yup.string().required("Required"),
  end_time: Yup.string().required("Required"),
  event_location_type: Yup.string().required("Required"),
  event_location: Yup.string().required("Required"),
  event_type: Yup.string().required("Required"),
  // image: Yup.string()
});


export { CreateEventSchema };
