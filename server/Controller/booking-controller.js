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
        AccepterMobile: req.body.AccepterMobile,
        UserMobile: req.body.UserMobile,
        Fair: req.body.Fair,
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

//fetching all the active booking

export const getAllBooking = async (req, res) => {
  try {
    const user = await User.findOne({ username: req.params.username });
    if (!user) {
      return res.status(404).json({ msg: "User not found" });
    }

    const response = await Booking.find();

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

// check for user accepted request

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

//deleting booking request

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
    const createdBy = await User.findOne({ username: req.body.username });
    const oldBooking = await Booking.findOne({
      AccepterUsername: user.username,
    });
    //checkingg if user accepted second ride if they have previous ride
    if (oldBooking) {
      return res.status(422).json({ msg: "User already have an booking" });
    }

    const prev = await Booking.findOne({ username: user.username });

    if (prev) {
      return res.status(422).json({ msg: "first delet uor previous request" });
    }

    if (booking && user) {
      //check sum for same value input

      if (booking.from === booking.to) {
        return res
          .status(409)
          .json({ msg: "Conflict: Two values found the same" });
      }

      //addign the data

      booking.AccepterMobile = user.mobile;
      booking.UserMobile = createdBy.mobile;
      booking.Fair = getFair(booking.from, booking.to);
      const response = await Booking.findByIdAndUpdate(booking._id, {
        $set: req.body,
      });

      // Update the booking document in the database
      await booking.save();
      res.status(200).json({ message: "bookingupdated" });
    }
  } catch (error) {
    console.log(error);
    res.status(500).json(error);
  }
};

//function for  fetch fair for selected route
const getFair = (from, to) => {
  const fareObject = Fair.find((fare) => fare.from === from && fare.to === to);

  if (fareObject) {
    return fareObject.Fair;
  } else {
    return "Fare information not found";
  }
};

const Fair = [
  { from: "Amity", to: "India Bulls", Fair: "30 Rupees" },
  { from: "Amity", to: "Panvel Station", Fair: "50 Rupees" },
  { from: "Amity", to: "Ajival", Fair: "20 Rupees" },
  { from: "India Bulls", to: "Amity", Fair: "30 Rupees" },
  { from: "India Bulls", to: "Panvel Station", Fair: "50 Rupees" },
  { from: "India Bulls", to: "Ajival", Fair: "40 Rupees" },
  { from: "Panvel Station", to: "Amity", Fair: "50 Rupees" },
  { from: "Panvel Station", to: "India Bulls", Fair: "50 Rupees" },
  { from: "Panvel Station", to: "Ajival", Fair: "50 Rupees" },
  { from: "Ajival", to: "Amity", Fair: "20 Rupees" },
  { from: "Ajival", to: "Panvel Station", Fair: "50 Rupees" },
  { from: "Ajival", to: "India Bulls", Fair: "40 Rupees" },
];
