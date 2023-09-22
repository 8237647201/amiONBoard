import mongoose from "mongoose";

const DB = () => {
  try {
    mongoose
      .connect("mongodb+srv://admin:admin@cluster0.nhqiovq.mongodb.net/?retryWrites=true&w=majority", {
        useNewUrlParser: true,
        useUnifiedTopology: true,
        connectTimeoutMS: 30000,
      })
      .then(() => {
        console.log("connected");
      });
  } catch (error) {
    console.log(error);
  }
};

export default DB;
