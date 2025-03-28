import { Formik } from "formik";
import validationSchema from "../Schemas/validationSchema";
import BookingFormHeader from "./BookingFormHeader";
import BookingFormFields from "./BookingFormFields";
import { useDispatch } from "react-redux";
import { bookCamper } from "../../redux/campers/operations";
import { toast } from "react-toastify";

const BookingForm = ({ camper }) => {
  const dispatch = useDispatch();

  const initialValues = {
    name: "",
    email: "",
    bookingDate: null,
    comment: "",
  };

  const handleSubmit = async (values, { resetForm, setSubmitting }) => {
    try {
      const payload = {
        name: values.name,
        email: values.email,
        bookingDate: values.bookingDate.toISOString(), // тут safe
        comment: values.comment,
      };

      await dispatch(
        bookCamper({ camperId: camper.id, bookingData: payload })
      ).unwrap();
      toast.success(`Camper "${camper.name}" booked successfully!`);
      resetForm();
    } catch (error) {
      toast.error(`Booking failed: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };
  return (
    <div className="p-6 w-[641px] h-[588px] rounded-lg shadow border border-lightGray">
      <BookingFormHeader />
      <Formik
        initialValues={initialValues}
        validationSchema={validationSchema}
        onSubmit={handleSubmit}
      >
        {(formikProps) => <BookingFormFields {...formikProps} />}
      </Formik>
    </div>
  );
};

export default BookingForm;
