import { FiExternalLink, FiLock } from "react-icons/fi";
import profile from "../assets/profile.jpeg";
import savedIcon from "../assets/save-instagram.png";
import savedlist from "../assets/Clipboard list.png";
interface CandidateListProps {
  toggleDrawer: () => void;
}

const CandidateList: React.FC<CandidateListProps> = ({ toggleDrawer }) => {
  return (
    <div className="bg-gray-50 p-6 shadow-sm rounded-lg m-12 border border-gray-300 relative">
      {/* Candidate Header */}
      <div className="absolute top-4 right-4 flex items-center gap-2">
        <img
          src={savedlist}
          alt="Favorite"
          className="w-8 h-8 cursor-pointer"
        />
        <img
          src={savedIcon}
          alt="Favorite"
          className="w-6 h-6 cursor-pointer"
        />
      </div>

      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-2">
          <FiLock className="text-[#585858]" size={18} />
          <span className="text-[#585858] text-sm">Profile Locked</span>
        </div>
      </div>

      {/* Candidate Info */}
      <div className="flex items-center gap-4">
        <img src={profile} alt="Candidate" className="w-16 h-16 rounded-full" />
        <div>
          <h3 className="text-lg font-bold">Pritesh Srivastava</h3>
          <p className="text-[#585858]">Bengaluru, India • 8 Years of Exp.</p>
        </div>
      </div>

      {/* Recent Experience */}
      <div className="mt-6">
        <h4 className="text-md font-semibold text-[#919191]">
          Recent Experience
        </h4>
        <p className="text-[#1E1E1E] font-medium">
          Lead Designer • Lollypop Designs
        </p>
        <p className="text-[#585858]">Jan 2022 – Present • 2 years 8 months</p>
      </div>

      {/* Education */}
      <div className="mt-6">
        <h4 className="text-md font-semibold text-[#919191]">Education</h4>
        <p className="text-[#1E1E1E] font-medium">
          MA, Graphic Design • Kingston University London • 2022
        </p>
      </div>

      {/* Skills */}
      <div className="mt-6 flex gap-2 flex-wrap">
        <span className="bg-[#B6E77740] text-[#2D4232] px-3 py-1 rounded-full">
          Visual Design
        </span>
        <span className="bg-[#EEEEEE] text-[#585858] px-3 py-1 rounded-full">
          Prototyping
        </span>
        <span className="bg-[#EEEEEE] text-[#585858] px-3 py-1 rounded-full">
          Problem Solving
        </span>
        <span className="bg-[#EEEEEE] text-[#585858] px-3 py-1 rounded-full">
          +3
        </span>
      </div>

      {/* Applied Text and View Application Button */}
      <div className="mt-4 flex justify-between items-center">
        <span className="text-semibold text-[#1E1E1E]">Applied 2 days ago</span>

        <button
          className="flex items-center gap-2 border px-4 py-2 rounded-md hover:bg-gray-100 transition cursor-pointer border-[#585858] text-[#585858]"
          onClick={toggleDrawer}
        >
          <FiExternalLink size={18} />
          View Application
        </button>
      </div>
    </div>
  );
};

export default CandidateList;
