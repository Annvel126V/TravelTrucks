import { Form, Field, ErrorMessage, useFormikContext } from "formik";
import BookingFormBtn from "./BookingFormBtn";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import { enUS } from "date-fns/locale";

const DatePickerField = ({ name }) => {
  const { setFieldValue, values } = useFormikContext();

  return (
    <DatePicker
      name={name}
      selected={values.bookingDate}
      onChange={(date) => setFieldValue("bookingDate", date)}
      calendarStartDay={1}
      placeholderText="Booking date*"
      className="p-2 bg-darkWhite text-gray rounded-[12px]  w-full hover:text-black"
      locale={enUS}
      dateFormat="dd/MM/yyyy"
      isClearable
    />
  );
};

const BookingFormFields = () => (
  <Form className="space-y-3 pl-14 pr-14  ">
    <div className="">
      <Field
        type="text"
        name="name"
        placeholder="Name*"
        className="p-2  bg-darkWhite text-gray mb-4 rounded-[12px] w-full hover:text-black"
      />
      <ErrorMessage name="name" component="div" className="text-red text-sm" />
    </div>

    <div>
      <Field
        type="email"
        name="email"
        placeholder="Email*"
        className="p-2  bg-darkWhite  text-gray mb-4 rounded-[12px] w-full hover:text-black"
      />
      <ErrorMessage name="email" component="div" className="text-red text-sm" />
    </div>

    <div>
      <Field name="bookingDate" component={DatePickerField} />
      <ErrorMessage
        name="bookingDate"
        component="div"
        className="text-red text-sm "
      />
    </div>

    <div>
      <Field
        as="textarea"
        name="comment"
        placeholder="Comment"
        className="p-2  bg-darkWhite text-gray rounded-[12px] mt-4 mb-6 w-full hover:text-black h-24 resize-none"
      />
      <ErrorMessage
        name="comment"
        component="div"
        className="text-red text-sm"
      />
    </div>
    <div className="flex justify-center">
      <BookingFormBtn />
    </div>
  </Form>
);

export default BookingFormFields;
