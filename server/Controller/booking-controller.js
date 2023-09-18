import Booking from "../Model/booking.js";

export const createbooking = async (req, res) => {
  try {
    const response = new Booking({
      from: req.body.from,
      to: req.body.to,
      leaveTime: req.body.leaveTime,
      status  :req.body.status,
      UserId: req.body.id,
    });
    response.save();
    res.status(200).json({ booked: true,res : response });
  } catch (error) {
    console.error("Error creating booking:", error);

    res
      .status(500)
      .json({ error: "An error occurred while creating the booking." });
  }
};

export const getAllBooking = async (req, res) => {
  const activeBooking = [];
  try {
    // Use "await" to wait for the asynchronous operation to complete.
    const response = await Booking.find();

    // It's better to use "filter" to select the active bookings.
    const activeBookings = response.filter((booking) => booking.status === true);

    // Return the active bookings directly in the response.
    res.status(200).json(activeBookings);
  } catch (error) {
    // Handle errors properly. Logging the error message is a good practice.
    console.error("Error while getting data:", error);
    res.status(500).json({ error: "Error while getting data" });
  }
};