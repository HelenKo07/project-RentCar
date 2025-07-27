import { useState } from "react";
import { toast } from "react-toastify";
import { bookCar } from "../services/booking.js";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import css from "./BookingForm.module.css";

export default function BookingForm({ carId }) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    rentalDate: "",
    comment: "",
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [rentalDate, setRentalDate] = useState(null);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await bookCar(carId, formData);
      toast.success("Car booked successfully!");
      setFormData({
        name: "",
        email: "",
        rentalDate: "",
        comment: "",
      });
    } catch (error) {
      console.error("Booking error:", error);
      toast.error("Booking error. Please try again later.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className={css.formCard}>
      <h2 className={css.tite}>Book your car now</h2>
      <p className={css.text}>
        Stay connected! We are always ready to help you.
      </p>
      <form onSubmit={handleSubmit} className={css.form}>
        <input
          type="text"
          name="name"
          placeholder="Name*"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <input
          type="email"
          name="email"
          placeholder="Email*"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <DatePicker
          className={css.input}
          selected={rentalDate}
          onChange={(date) => {
            setRentalDate(date);
            setFormData((prev) => ({
              ...prev,
              rentalDate: date.toISOString(),
            }));
          }}
          placeholderText="Booking date"
          dateFormat="dd.MM.yyyy"
          popperPlacement="bottom-end"
        />
        <textarea
          name="comment"
          placeholder="Comment"
          rows="3"
          value={formData.comment}
          onChange={handleChange}
        ></textarea>

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "We are booking..." : "Send"}
        </button>
      </form>
    </div>
  );
}
