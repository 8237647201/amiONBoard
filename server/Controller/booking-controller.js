import Booking from "../Model/booking.js";
import User from "../Model/user.js";

export const createbooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const response = new Booking({
        from: req.body.from,
        to: req.body.to,
        leaveTime: req.body.leaveTime,
        status: req.body.status,
        UserId: user._id,
      });
      response.save();
      res.status(200).json({ booked: true, res: response });
    }
  } catch (error) {
    console.error("Error creating booking:", error);

    res
      .status(500)
      .json({ error: "An error occurred while creating the booking." });
  }
};

export const getAllBooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const response = await Booking.find();

    const activeBookings = response.filter(
      (booking) => booking.status === 1 && booking.UserId  != user._id
    );

    if (activeBookings.length === 0) {
      return res.status(404).json({ msg: "No active bookings available" });
    }

    res.status(200).json(activeBookings);
  } catch (error) {
    console.error("Error while getting data:", error);
    res.status(500).json({ error: "Error while getting data" });
  }
};
;
