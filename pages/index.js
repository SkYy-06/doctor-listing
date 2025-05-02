import Head from "next/head";
import { useEffect, useState } from "react";
import DoctorCard from "@/components/DoctorCard";
import Filters from "@/components/Filters";

export default function HomePage() {
  const [doctors, setDoctors] = useState([]);
  const [filters, setFilters] = useState({});
  const [page, setPage] = useState(1);
  const [searchQuery, setSearchQuery] = useState(""); // For search functionality

  useEffect(() => {
    fetchDoctors();
  }, [filters, page]);

  const fetchDoctors = async () => {
    const params = new URLSearchParams({ ...filters, page });
    const res = await fetch(
      `/api/list-doctor-with-filter?${params.toString()}`
    );
    const data = await res.json();
    setDoctors(data.data || []);
  };

  const handleFilterChange = (newFilters) => {
    setFilters(newFilters);
    setPage(1);
  };

  const handleSearchChange = (e) => {
    setSearchQuery(e.target.value);
  };

  return (
    <>
      <Head>
        <title>Find General Physicians | Apollo247 Clone</title>
        <meta
          name="description"
          content="Search and consult top general physicians and internal medicine specialists."
        />
        <meta property="og:title" content="General Physician Listing" />
        <meta
          property="og:description"
          content="Top doctors available for consultation."
        />
      </Head>

      <main className="bg-[#9bd4d4bc] min-h-screen p-8">
        <div className="max-w-6xl mx-auto">
          <header className="mb-8 text-center">
            <h1 className="text-4xl font-semibold text-black mb-2">
              Find a General Physician
            </h1>
            <p className="text-xl text-gray-300">
              Explore highly rated doctors in your area and get personalized
              care.
            </p>
          </header>

          {/* Search Bar */}
          <div className="flex justify-center mb-8">
            <input
              type="text"
              value={searchQuery}
              onChange={handleSearchChange}
              placeholder="Search for a doctor..."
              className="w-full sm:w-96 px-6 py-3 rounded-lg bg-gray-800 text-white placeholder-gray-400 shadow-lg focus:outline-none focus:ring-2 focus:ring-blue-600"
            />
          </div>

          <Filters onFilterChange={handleFilterChange} />

          <div className="my-8">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
              {doctors.map((doc) => (
                <DoctorCard key={doc._id} doctor={doc} />
              ))}
            </div>
          </div>

          <div className="flex justify-center mt-8">
            <button
              onClick={() => setPage(page + 1)}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg shadow-md hover:bg-blue-700 focus:outline-none"
            >
              Load More Doctors
            </button>
          </div>
        </div>
      </main>
    </>
  );
}
