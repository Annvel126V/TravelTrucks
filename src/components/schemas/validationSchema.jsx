import * as Yup from "yup";

const validationSchema = Yup.object({
  name: Yup.string()
    .min(2, "The name is too short")
    .max(50, "The name is too long")
    .required("Name is required"),
  email: Yup.string()
    .email("Invalid email format")
    .required("Email is required"),
  bookingDate: Yup.date()
    .nullable()
    .typeError("Booking date is required")
    .required("Booking date is required")
    .min(new Date(), "The date cannot be in the past"),
  comment: Yup.string().max(200, "The comment must not exceed 200 characters"),
});

export default validationSchema;
