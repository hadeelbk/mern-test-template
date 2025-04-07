const Booking = require("../models/Booking");

exports.getBookings = async (req, res) => {
  try {
    const bookings = await Booking.find();
    res.json(bookings);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};

exports.createBooking = async (req, res) => {
  const { time, name, email } = req.body;

  if (!time || !name || !email) {
    return res.status(400).json({ message: "All fields are required." });
  }

  try {
    // already has a booking?
    const existingBooking = await Booking.findOne({ time });
    if (existingBooking) {
      return res
        .status(409)
        .json({ message: "This time slot is already booked." });
    }

    const newBooking = new Booking({ time, name, email });
    await newBooking.save();
    res.status(201).json(newBooking);
  } catch (err) {
    res.status(500).json({ message: err.message });
  }
};
