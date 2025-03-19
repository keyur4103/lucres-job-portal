import { FiSearch, FiUsers, FiEdit3, FiArrowLeft } from "react-icons/fi";

const FilterBar: React.FC = () => {
  return (
    <div className="bg-white p-5 m-5">
      <div className="flex items-center mb-6">
        <FiArrowLeft
          className="text-gray-600 cursor-pointer hover:text-green-500"
          size={20}
        />
        <span className="ml-2 text-gray-600 hover:text-green-500 cursor-pointer">
          Back to Dashboard
        </span>
      </div>

      <div className="border p-6 rounded-lg mb-6">
        <div className="flex justify-between items-center">
          <div>
            <h2 className="text-lg font-semibold">Senior Product Designer</h2>
            <p className="text-gray-500 text-sm">
              Posted 3 Days Ago · Bengaluru, India
            </p>
          </div>
          <div className="flex items-center gap-4">
            <button className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition">
              <FiUsers size={18} />
              Add team member
            </button>
            <button className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded-md hover:bg-green-500 hover:text-white transition">
              <FiEdit3 size={18} />
              Edit Job
            </button>
          </div>
        </div>
      </div>

      {/* Tabs */}
      <div className="flex flex-wrap gap-4 mb-6">
        <button className="bg-green-100 text-green-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          All
        </button>
        <button className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          Unlocked
        </button>
        <button className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          Interviewing
        </button>
        <button className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          Accepted
        </button>
        <button className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          Rejected
        </button>
        <button className="bg-gray-100 text-gray-600 px-5 py-2 rounded-full hover:bg-green-500 hover:text-white transition">
          Saved
        </button>
      </div>

      {/* Search and Sort */}
      <div className="flex items-center justify-between">
        {/* Search Bar */}
        <div className="relative w-full max-w-md">
          <input
            type="text"
            placeholder="Search Candidate"
            className="px-12 py-3 w-full border rounded-full text-gray-700 outline-none focus:ring-2 focus:ring-green-400"
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
