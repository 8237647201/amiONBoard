import mongoose, { SchemaType } from "mongoose";

const Schema = mongoose.Schema

const userSchema = new Schema({
  name: {
    required: true,
    type: String,
  },
  username: {
    type: String,
    required: true,
    unique: true,
  },
  email: {
    type: String,
    requierd: true,
    unique: true,
  },
  mobile: {
    type: Number,
    requierd: true,
    min: 10,
    max: 10,
  },
  isRider: {
    type: Boolean,
    RiderId: {
      type: Schema.Types.ObjectId,
      ref: "Rider",
    },
  },
  isStudednt: {
    type: Boolean,
    RiderId: {
      type: Schema.Types.ObjectId,
      ref: "Pilen",
    },
  },
  password: {
    type: String,
    requierd: true,
  },
});

const User = mongoose.model("user", userSchema);
export default User;
