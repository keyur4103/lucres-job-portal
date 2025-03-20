import { FiArrowUpRight, FiChevronDown } from "react-icons/fi";
import { useNavigate } from "react-router-dom";

interface JobCardProps {
  id: Number; // Add ID property for navigation
  title: string;
  location: string;
  date: string;
  applications: string;
  activeUntil?: string;
}

const JobCard: React.FC<JobCardProps> = ({
  title,
  location,
  date,
  applications,
  activeUntil,
}) => {
  const navigate = useNavigate();

  return (
    <div className="bg-white p-6 rounded-lg border border-gray-300 flex justify-between items-center hover:shadow-md transition h-18">
      <div>
        {/* Job Title with Navigation */}
        <h3
          className="text-sm font-semibold flex items-center gap-1 text-gray-700 cursor-pointer hover:text-[#2D4232]"
          onClick={() => navigate("/candidate")} // Navigate on click
        >
          {title} <FiArrowUpRight />
        </h3>

        {/* Job Details */}
        <p className="text-gray-500">
          {date} • {location}
        </p>
      </div>

      <div className="flex items-center gap-4">
        {/* Active Until */}
        {activeUntil && (
          <div className="border rounded-full px-3 py-1 text-gray-600 text-sm">
            Active Until: <span className="font-bold">{activeUntil}</span>
          </div>
        )}

        {/* Applications */}
        <span className="bg-[#B6E77725] text-[#2D4232] px-3 py-1 rounded-full text-sm">
          {applications}
        </span>

        {/* Status */}
        <button className="flex items-center border rounded-full px-4 py-1 bg-gray-100 text-gray-600 hover:bg-gray-200 transition">
          Active <FiChevronDown className="ml-1" />
        </button>
      </div>
    </div>
  );
};

export default JobCard;
