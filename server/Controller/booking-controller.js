import Booking from "../Model/booking.js";

export const booking = async (req, res) => {
  try {
    const response = new Booking({
      from: req.body.from,
      to: req.body.to,
      leaveTime: req.body.leaveTime,
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
