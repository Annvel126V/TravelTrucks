const BookingFormBtn = ({ isSubmitting }) => {
  return (
    <button
      type="submit"
      disabled={isSubmitting}
      className={`w-[166px] h-[56px] rounded-[200px] ${
        isSubmitting ? "bg-gray" : "bg-red hover:bg-darkRed text-white"
      }`}
    >
      {isSubmitting ? "Sending..." : "Send"}
    </button>
  );
};

export default BookingFormBtn;
