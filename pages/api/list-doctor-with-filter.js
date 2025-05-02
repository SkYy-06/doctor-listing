import dbConnect from "@/utils/dbConnect";
import Doctor from "@/models/Doctor";

export default async function handler(req, res) {
  await dbConnect();
  const { page = 1, specialization, location } = req.query;
  const limit = 10;
  const filters = {};

  if (specialization) filters.specialization = specialization;
  if (location) filters.location = location;

  try {
    const doctors = await Doctor.find(filters)
      .skip((page - 1) * limit)
      .limit(limit);

    res.status(200).json({ success: true, data: doctors });
  } catch (error) {
    res.status(500).json({ success: false, error: error.message });
  }
}