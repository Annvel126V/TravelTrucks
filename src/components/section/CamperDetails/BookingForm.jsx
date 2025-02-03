import { useState } from "react";

const BookingForm = ({ camper }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    startDate: "",
    endDate: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Camper ${camper.name} booked successfully!`);
  };

  return (
    <div className="mt-6">
      <h2 className="text-xl font-bold">Book this camper</h2>
      <form onSubmit={handleSubmit} className="space-y-3">
        <input
          type="text"
          placeholder="Your Name"
          required
          className="p-2 border rounded w-full"
        />
        <input
          type="email"
          placeholder="Email"
          required
          className="p-2 border rounded w-full"
        />
        <input type="date" required className="p-2 border rounded w-full" />
        <input type="date" required className="p-2 border rounded w-full" />
        <button
          type="submit"
          className="w-full p-2 bg-red-500 text-white rounded"
        >
          Book Now
        </button>
      </form>
    </div>
  );
};

export default BookingForm;
