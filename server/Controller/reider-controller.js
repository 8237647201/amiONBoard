import Rider from "../Model/riderRegistration.js";

export const createRider = async (req, res) => {
  try {
    const { username, email, BikeNO, DLimage, profilePicture, mobile } =
      req.body;

    const newRider = new Rider({
      username: username,
      email: email,
      BikeNO: BikeNO,
      DLimage: DLimage,
      profilePicture: profilePicture,
      mobile: mobile,
    });

    await newRider.save();

    return res.status(201).json({ msg: "Rider created successfully" });
  } catch (error) {
    console.error("Error creating Rider:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const getRider = async (req, res) => {
  try {
    const rider = await Rider.findOne({ username: req.params.username });

    if (!rider) {
      return res.status(404).json({ msg: "Rider not found" });
    }

    return res.status(200).json(rider);
  } catch (error) {
    console.error("Error retrieving Rider:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};

export const updateRider = async (req, res) => {
  try {
    const rider = await Rider.findById({ _id: req.params.id });

    if (!rider) {
      return res.status(404).json({ msg: "Rider not found" });
    }

    await Rider.findByIdAndUpdate(req.params.id, { $set: req.body });

    return res.status(200).json({ msg: "Rider updated successfully" });
  } catch (error) {
    console.error("Error updating Rider:", error);
    return res.status(500).json({ error: "Internal server error" });
  }
};
