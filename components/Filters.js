import { useState } from "react";

export default function Filters({ onFilterChange }) {
  const [specialization, setSpecialization] = useState("");
  const [location, setLocation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    onFilterChange({ specialization, location });
  };

  return (
    <form onSubmit={handleSubmit} className="mb-4">
      <input type="text" placeholder="Specialization" value={specialization} onChange={(e) => setSpecialization(e.target.value)} className="mr-2 border p-1" />
      <input type="text" placeholder="Location" value={location} onChange={(e) => setLocation(e.target.value)} className="mr-2 border p-1" />
      <button type="submit" className="bg-blue-500 text-white px-3 py-1">Filter</button>
    </form>
  );
}