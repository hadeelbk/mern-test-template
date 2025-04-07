const mongoose = require("mongoose");

const BookingSchema = new mongoose.Schema(
  {
    time: {
      type: String,
      required: true,
    },
    name: String,
    email: String,
  },
  { timestamps: true }
);

module.exports = mongoose.model("Booking", BookingSchema);
