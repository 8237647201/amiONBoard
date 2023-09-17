import mongoose from  'mongoose';

const DB = ()=>{
   try {
      mongoose.connect('mongodb+srv://admin:admin@cluster0.nhqiovq.mongodb.net/').then(
         () =>{
         console.log("connected");})
   } catch (error) {
      console.log(error)
   }
}

export default DB;