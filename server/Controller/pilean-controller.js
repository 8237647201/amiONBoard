import Pilean from "../Model/studentRegisteration.js";

export const createPilean = async (req, res) => {
  try {
    const pilean = new Pilean({
      username: req.body.username,
      email: req.body.email, // Corrected typo "emial" to "email"
      EnrollNO: req.body.EnrollNO,
      picture: req.body.imageUrl,
    });

    await pilean.save();

    res.status(200).json({ msg: "User saved" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const getPilean = async (req, res) => {
  try {
    const pilean = await Pilean.findOne({email : req.body.email});

    if (!pilean) {
      return res.status(404).json({ msg: "User not found" });
    }

    res.status(200).json(pilean);
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};

export const updatePilean = async (req, res) => {
  try {
    console.log(req.params.id)
    const pilean = await Pilean.findById({_id :req.params.id});

    if (!pilean) {
      return res.status(404).json({ msg: "User not found" });
    }

    await Pilean.findByIdAndUpdate(req.params.id, { $set: req.body });

    res.status(200).json({ msg: "User updated" });
  } catch (error) {
    res.status(500).json({ error: "Internal server error" });
  }
};