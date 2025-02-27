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
      const bookingData = {
        ...values,
        bookingDate: values.bookingDate?.toISOString() ?? null,
      };
      await dispatch(bookCamper({ camperId: camper.id, bookingData })).unwrap();

      toast.success(`Camper "${camper.name}, " booked successfully!`);
      resetForm();
    } catch (error) {
      toast.error(`Booking failed: ${error}`);
    } finally {
      setSubmitting(false);
    }
  };

  return (
    <div className="p-6 w-[641px] rounded-lg shadow border border-lightGray">
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
