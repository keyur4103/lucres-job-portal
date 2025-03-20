import { FiSearch, FiHome, FiBriefcase, FiUser, FiBell } from "react-icons/fi";
import logo from "../assets/logo.jpeg";
import { useNavigate } from "react-router-dom";

const Header: React.FC = () => {
  const navigate = useNavigate();

  return (
    <>
      <header className="bg-white w-full px-4 py-1 flex items-center">
        <div className="flex items-center">
          <img src={logo} alt="Logo" className="h-14 w-14 mr-4" />
        </div>
        <div className="flex-1"></div>
        <div className="flex items-center w-full max-w-lg relative">
          <input
            type="text"
            placeholder="Search for people or company"
            className="w-full px-4 py-2 pl-10 border rounded-full text-gray-700 outline-none focus:ring-2 focus:ring-green-400"
          />
          <FiSearch className="absolute left-3 text-gray-500" size={20} />
        </div>

        <div className="mx-3"></div>

        <div className="flex items-center gap-6">
          <FiHome
            className="text-gray-600 hover:bg-[#B6E77725]  cursor-pointer"
            size={22}
            onClick={() => navigate("/")} // Navigate on click
          />
          <FiBriefcase
            className="text-gray-600 hover:bg-[#B6E77725] cursor-pointer"
            size={22}
          />
          <FiUser
            className="text-gray-600 hover:bg-[#B6E77725] cursor-pointer"
            size={22}
            onClick={() => navigate("/candidate")} // Navigate on click
          />
          <FiBell
            className="text-gray-600 hover:bg-[#B6E77725] cursor-pointer"
            size={22}
          />
        </div>

        <div className="mx-4"></div>

        <button className="bg-[#B6E777] hover:bg-[#B6E77725] text-[#2D4232] px-5 py-2 rounded-full">
          + Create a Job
        </button>

        <div className="flex-1"></div>
      </header>
      <hr className="border-gray-300" />
    </>
  );
};

export default Header;
