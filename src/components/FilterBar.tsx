import { FiSearch, FiUsers, FiEdit3, FiArrowLeft } from "react-icons/fi";
import { Lock } from "lucide-react";
import { useNavigate } from "react-router-dom";

const FilterBar: React.FC = () => {
  const navigate = useNavigate();
  const filters = [
    "All",
    "Unlocked",
    "Interviewing",
    "Accepted",
    "Rejected",
    "Saved",
  ];

  return (
    <div className="bg-white p-6 m-6">
      <div className="flex items-center mb-6">
        <div
          className="flex items-center gap-2 text-[#212121] cursor-pointer hover:text-[#B6E777] transition"
          onClick={() => navigate("/")} // Navigate on click
        >
          <FiArrowLeft size={20} />
          <span>Back to Dashboard</span>
        </div>

        {/* Spacer to push content to the end */}
        <div className="flex items-center ml-auto gap-6">
          {/* Active Until section */}
          <div className="flex items-center text-gray-500 text-sm">
            <span className="font-semibold text-[#ACACAC]">Active Until:</span>
            <span className="ml-1 text-[#585858]">Jan 31, 2028</span>
          </div>

          {/* Button */}
          <button className="flex h-10 items-center gap-2 border border-gray-300 px-3 py-1 rounded-md hover:bg-gray-100 transition">
            <Lock className="w-4 h-4 text-[#649427]" />
            <span className="text-[#212121] text-sm font-semibold">
              4/5 Reveals Left
            </span>
          </button>
        </div>
      </div>

      <div className="border border-gray-300 p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold text-[#1E1E1E]">
              Senior Product Designer
            </h2>
            <p className="text-[#1E1E1E] text-sm">
              Posted 3 Days Ago · Bengaluru, India
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-[#F5F5F5] text-[#212121] px-4 py-2 rounded-md hover:bg-[#B6E777] hover:text-white transition cursor-pointer">
              <FiUsers size={18} />
              Add team member
            </button>
            <button className="flex items-center gap-2 bg-[#F5F5F5] text-[#212121] px-4 py-2 rounded-md hover:bg-[#B6E777] hover:text-white transition cursor-pointer">
              <FiEdit3 size={18} />
              Edit Job
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        {filters.map((filter, index) => (
          <button
            key={index}
            className={`px-5 py-2 rounded-full transition cursor-pointer ${
              filter === "All"
                ? "bg-[#B6E77740] text-[#2D4232] hover:bg-[#B6E777] hover:text-white"
                : "bg-[#F8F8F8] text-[#767676] hover:bg-[#B6E777] hover:text-white"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>
      {/* Search and Sort */}
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Candidate"
            className="px-12 py-3 w-full border rounded-full text-gray-700 outline-none focus:ring-2 focus:ring-[#B6E777]"
          />
          <FiSearch className="absolute left-4 top-3 text-gray-500" size={22} />
        </div>

        {/* Sort Dropdown */}
        <div className="flex items-center gap-2">
          <span className="text-gray-600">Sort by:</span>
          <select className="border px-5 py-3 rounded-md text-gray-600 cursor-pointer hover:bg-gray-100 transition">
            <option>Newest</option>
            <option>Oldest</option>
          </select>
        </div>
      </div>
    </div>
  );
};

export default FilterBar;
