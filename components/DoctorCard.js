export default function DoctorCard({ doctor }) {
  return (
    <div className="border p-4 rounded shadow">
      <h2 className="font-bold">{doctor.name}</h2>
      <p>{doctor.specialization}</p>
      <p>{doctor.location}</p>
      <p>{doctor.experience} years experience</p>
    </div>
  );
}