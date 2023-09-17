import Booking from "../Model/booking.js";

export const booking = async (req, res) => {
  try {
    const response = new Booking({
      from: req.params.from,
      to: req.params.to,
      leaveTime: req.params.leaveTime,
      UserId: req.body.id,
    });
    response.save();
    res.status(200).json({ booked: true });
  } catch (error) {
    console.error("Error creating booking:", error);

    res
      .status(500)
      .json({ error: "An error occurred while creating the booking." });
  }
};
