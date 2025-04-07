const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
require("dotenv").config();

const bookingsRoutes = require("./routes/bookings");

const app = express();

app.use(
  cors({
    origin: "http://localhost:5176",
    methods: ["GET", "POST"],
    credentials: false,
  })
);

app.use(express.json());

//Routes
app.use("/bookings", bookingsRoutes);

//DB connection
mongoose
  .connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  })
  .then(() => console.log("MongoDB connected"))
  .catch((err) => console.log(err));

//Start server
const PORT = process.env.PORT || 3001;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
