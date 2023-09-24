import Booking from "../Model/booking.js";
import User from "../Model/user.js";

export const createbooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.body.username });
    if (user) {
      const hasActiveBooking = await Booking.findOne({
        UserId: user._id,
        status: 1, // Assuming '1' indicates an active booking
      });

      if (hasActiveBooking) {
        return res.status(200).json({
          error: "User already has an active booking.",
          booking: true,
        });
      }

      const response = new Booking({
        username: req.body.username,
        from: req.body.from,
        to: req.body.to,
        leaveTime: req.body.leaveTime,
        status: req.body.status,
        isRider: req.body.isRider,
        isStudent: req.body.isStudent,
        AccepterUsername: req.body.AccepterUsername,
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

    // const activeBookings = response.filter((booking) =>
    // booking.status === 1 && booking.UserId.toString() !== user._id.toString() && user.isRider ? booking.isStudent===true : booking.isRider===true
    // );
    const activeBookings = response.filter((booking) => {
      if (user.isRider) {
        // If the user is a rider, filter bookings where isStudent is true
        return (
          booking.status === 1 &&
          booking.UserId.toString() !== user._id.toString() &&
          booking.isStudent === true
        );
      } else {
        // If the user is not a rider, filter bookings where isRider is true
        return (
          booking.status === 1 &&
          booking.UserId.toString() !== user._id.toString() &&
          booking.isRider === true
        );
      }
    });

    if (activeBookings.length === 0) {
      return res.status(404).json({ msg: "No active bookings available" });
    }

    res.status(200).json(activeBookings);
  } catch (error) {
    console.error("Error while getting data:", error);
    res.status(500).json({ error: "Error while getting data" });
  }
};

export const getUserBooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const response = await Booking.findOne({ username: user.username });

    res.status(200).json(response);
  } catch (error) {
    console.error("Error while getting data:", error);
    res.status(500).json({ error: "Error while getting data" });
  }
};

export const getAccepterBooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const response = await Booking.findOne({ AccepterUsername: user.username });

    res.status(200).json(response);
  } catch (error) {
    console.error("Error while getting data:", error);
    res.status(500).json({ error: "Error while getting data" });
  }
};

export const deletBooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const response = await Booking.find();

    const activeBookings = response.filter(
      (booking) =>
        (booking.status === 1 &&
          booking.UserId.toString() == user._id.toString()) ||
        booking.status === 2
    );
    if (activeBookings.length === 0) {
      return res
        .status(404)
        .json({ msg: "No active bookings found for the user" });
    }

    const Response = await Booking.findByIdAndDelete({
      _id: activeBookings[0]._id,
    });

    res.status(200).json({ res: Response, UserDeleted: true });
  } catch (error) {
    console.error("Error while getting data:", error);
    res.status(500).json({ error: "Error while getting data" });
  }
};

export const updateBooking = async (req, res) => {
  try {
    const booking = await Booking.findById(req.params.id);
    const user = await User.findOne({ username: req.body.AccepterUsername });
    if (booking && user) {
      const response = await Booking.findByIdAndUpdate(booking._id, {
        $set: req.body,
      });
      res.status(200).json({ message: "bookingupdated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

