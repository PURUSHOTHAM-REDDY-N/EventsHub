import * as Yup from "yup";

const CreateEventTicketSchema = Yup.object().shape({
  ticket_name: Yup.string().required("Required"),
  ticket_type: Yup.string().required("Required"),
  ticket_price: Yup.string().notRequired(),
  total_quantity: Yup.string().required("Required"),
  event_id: Yup.string().notRequired(),
});

export { CreateEventTicketSchema };
