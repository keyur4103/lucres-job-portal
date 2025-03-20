import { FiMoreHorizontal, FiSearch, FiUnlock } from "react-icons/fi";
import brandLogo from "../assets/brand-logo.png";
import brandBanner from "../assets/brand-banner.png";
import { useState } from "react";
import JobCard from "./JobCard";
import InterviewList from "./InterviewList";

const Dashboard = () => {
  const [active, setActive] = useState("Open");
  const jobs = [
    {
      id: 1,
      title: "Senior Product Designer",
      location: "Bengaluru, India",
      date: "Posted 3 Days Ago",
      applications: "3 New Applications",
      activeUntil: "Jan 31, 2026",
    },
    {
      id: 1,

      title: "UI/UX Design Intern",
      location: "Delhi, India",
      date: "Posted 8 Days Ago",
      applications: "72 New Applications",
    },
    {
      id: 1,
      title: "Senior Full Stack Developer",
      location: "Delhi, India",
      date: "Posted 19 Days Ago",
      applications: "72 New Applications",
    },
  ];

  return (
    <div className="flex flex-col lg:flex-row min-h-screen custom-scroll ml-5">
      {/* Sidebar */}
      <aside className="w-full lg:w-1/4 p-6 bg-white border-r border-gray-300">
        <div className="flex flex-col">
          <img
            src={brandLogo}
            alt="Brand Logo"
            className="w-24 h-24 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-[#2D4232]">Acme Corp Ltd</h2>
          <p className="text-[#585858]">@acmecorp • Bengaluru, India</p>
          <p className="text-sm text-[#2D4232] mt-2">Keep it Real.</p>
          <div className="flex gap-4 mt-4 text-[#2D4232]">
            <div>
              <p className="font-bold text-lg">200</p>
              <p className="text-sm">Posts</p>
            </div>
            <div>
              <p className="font-bold text-lg">380</p>
              <p className="text-sm">Followers</p>
            </div>
            <div>
              <p className="font-bold text-lg">1003</p>
              <p className="text-sm">Following</p>
            </div>
          </div>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1">
        {/* Brand Banner with Edit Button */}
        <div className="relative w-full">
          <img
            src={brandBanner}
            alt="Brand Banner"
            className="w-full h-[120px] object-cover"
          />

          {/* Edit Profile Button */}
          <div className="absolute top-4 right-4 flex items-center gap-2">
            {/* More Options Button */}
            <button className="flex items-center justify-center w-12 h-12 border rounded-full bg-white text-black shadow-sm hover:bg-gray-100 transition">
              <FiMoreHorizontal size={22} />
            </button>

            {/* Edit Profile Button */}
            <button className="flex items-center justify-center h-12 px-6 border rounded-full bg-white text-black font-medium shadow-sm hover:bg-gray-100 transition">
              Edit Profile
            </button>
          </div>
        </div>

        {/* Navigation Tabs */}
        <div className="flex flex-wrap justify-center border-b border-gray-200 mt-4">
          {[
            "Dashboard",
            "Jobs",
            "Messages",
            "Activity",
            "Schedule",
            "Manage",
            "API",
          ].map((tab, index) => (
            <button
              key={index}
              className={`px-4 py-3 text-sm md:text-base text-[#585858] hover:text-black relative ${
                tab === "Jobs" ? "font-bold text-[#2D4232]" : "text-gray-600"
              }`}
            >
              {tab}
              {tab === "Jobs" && (
                <div className="w-10 h-[3px] bg-[#B6E777] absolute bottom-0 left-1/2 transform -translate-x-1/2" />
              )}
            </button>
          ))}
        </div>

        {/* Buttons + Search Bar */}
        <div className="flex flex-col md:flex-row justify-between items-center w-full p-4 gap-4">
          {/* Buttons */}
          <div className="flex gap-2">
            {["Open", "Closed", "Draft"].map((item) => (
              <button
                key={item}
                onClick={() => setActive(item)}
                className={`h-12 px-6 rounded-full transition font-medium flex items-center justify-center ${
                  active === item
                    ? "bg-[#B6E77740] text-[#2D4232] font-bold"
                    : "bg-gray-100 text-gray-500"
                }`}
              >
                {item}
              </button>
            ))}
          </div>

          {/* Search Bar */}
          <div className="flex items-center w-full md:max-w-lg h-12 rounded-full border border-gray-300 overflow-hidden">
            <input
              type="text"
              placeholder="Search Jobs"
              className="w-full px-4 text-gray-700 focus:outline-none"
            />
            <div className="px-4 bg-white flex items-center justify-center">
              <FiSearch className="text-gray-700" size={22} />
            </div>
          </div>
        </div>

        {/* Job Listings */}
        <div className="custom-scroll h-full overflow-y-auto space-y-4 p-4">
          {jobs.map((job, index) => (
            <JobCard key={index} {...job} />
          ))}
        </div>
      </main>

      {/* Right Sidebar */}
      <aside className="w-full lg:w-1/4 p-4 bg-white border-l border-gray-300">
        <div className="flex items-center gap-4 p-4 bg-white rounded-lg border border-gray-300 h-20 w-full">
          {/* Icon */}
          <div className="flex items-center justify-center w-16 h-14 border border-gray-300 rounded-lg">
            <FiUnlock className="text-[#649427]" size={24} />
          </div>

          {/* Text */}
          <div className="flex flex-col w-full whitespace-nowrap">
            <p className="text-lg font-bold text-[#2D4232]">5/5 Reveals Left</p>
            <p className="text-[#212121] text-sm">
              Unlock 50 Resumes at <span className="font-bold">₹399</span>
            </p>
          </div>
        </div>
        <InterviewList />
      </aside>
    </div>
  );
};

export default Dashboard;
