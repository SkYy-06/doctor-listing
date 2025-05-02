import mongoose from "mongoose";

const DoctorSchema = new mongoose.Schema({
  name: String,
  specialization: String,
  location: String,
  experience: Number
});

export default mongoose.models.Doctor || mongoose.model("Doctor", DoctorSchema);