import { useState } from "react";
import profile from "../assets/profile.jpeg";
import { BsBookmark, BsCheckCircle, BsXCircle } from "react-icons/bs";
import { FiDownload, FiLink, FiPlus } from "react-icons/fi";

const Profile: React.FC = () => {
  const [activeTab, setActiveTab] = useState("Resume");

  const tabs = [
    "Resume",
    "Screening Questions",
    "Message",
    "Notes",
    "Schedule",
  ];

  return (
    <>
      <div className="mt-4 flex border-b border-gray-300">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-3 text-sm transition-colors cursor-pointer ${
              activeTab === tab
                ? "text-gray-800 border-b-2 border-gray-600 font-semibold"
                : "text-gray-500 hover:text-black"
            }`}
          >
            {tab}
          </button>
        ))}
      </div>
      <div className="p-5 m-5 border border-gray-300 rounded-lg overflow-hidden">
        {/* Header Section */}
        <div className="flex justify-between items-center mb-4 border-b border-gray-200 pb-4">
          <div>
            <h2 className="text-lg font-bold text-[#000000]">
              Candidate’s Resume
            </h2>
            <p className="text-sm text-gray-500">Last Updated May 2024</p>
          </div>

          {/* Icons and Buttons */}
          <div className="flex items-center gap-3">
            {/* Download and Link Icons */}
            <FiDownload
              className="text-gray-600 hover:text-black cursor-pointer"
              size={20}
            />
            <FiLink
              className="text-gray-600 hover:text-black cursor-pointer"
              size={20}
            />

            {/* Action Buttons */}
            <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-red-100 text-red-600 hover:bg-red-200 transition">
              <BsXCircle size={16} /> Not a Good Fit
            </button>

            <button className="flex items-center gap-2 px-4 py-2 text-sm rounded-md bg-black text-white hover:bg-gray-800 transition">
              <BsCheckCircle size={16} /> Good Fit
            </button>

            {/* Bookmark Icon */}
            <div className="flex items-center justify-center w-10 h-10 rounded-md bg-[#B6E77740] hover:bg-green-100 transition cursor-pointer">
              <BsBookmark className="text-green-600" size={18} />
            </div>
          </div>
        </div>

        {/* Profile Info */}
        <div className="flex items-center gap-4">
          <img
            src={profile}
            alt="Profile"
            className="w-20 h-20 rounded-full border border-gray-300"
          />
          <div>
            <h3 className="text-2xl font-bold text-[#2D4232]">
              Pritesh Srivastava{" "}
              <span className="text-yellow-400 inline-block ml-1">✔</span>
            </h3>
            <p className="text-[#585858]">Bengaluru, India • 8 Years of Exp.</p>
          </div>
        </div>

        {/* Skills Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium mb-2 text-[#919191]">Skills</h4>
          <div className="flex flex-wrap gap-2">
            {[
              "Visual Design",
              "Prototyping",
              "Problem Solving",
              "Information Architecture",
              "Business Strategy",
              "Figma",
            ].map((skill) => (
              <span
                key={skill}
                className="bg-[#EEEEEE] text-[#585858] px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-6 border-b border-gray-300 pb-4">
          <h4 className="text-lg font-medium mb-2 text-[#919191]">
            Recent Experience
          </h4>

          {/* Experience Card */}
          <div className="p-4 rounded-lg mb-4">
            <h5 className="font-bold text-[#1E1E1E]">
              Lead Designer • Lollypop Designs
            </h5>
            <p className="text-[#585858]">
              Jan 2022 - Present • 2 years 8 months
            </p>
            <p className="text-[#585858]">Bengaluru, India</p>
            <p className="mt-2 text-sm text-[#585858]">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
            </p>
          </div>

          {/* Second Experience */}
          <div className="p-4 rounded-lg">
            <h5 className="font-bold text-[#1E1E1E]">
              Intern Designer • Santander Bank
            </h5>
            <p className="text-[#585858]">Jan 2021 - Mar 2021 • 3 months</p>
            <p className="text-[#585858]">London, UK</p>
            <p className="mt-2 text-sm text-[#585858]">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
              Also, recognised by EnAble India, a non-profit organisation that
              has been empowering people with disabilities.Developed a
              successful, scalable pellet-less shooting experience in
              collaboration with product managers, coaches, and athletes. Also,
              recognised by EnAble India, a non-profit organisation that has
              been empowering people with disabilities.
            </p>
          </div>
          <br />
          <button className="flex items-center gap-2 bg-[#B6E77740] text-[#2D4232] px-4 py-2 rounded-full font-medium hover:bg-[#B6E777] transition cursor-pointer">
            <FiPlus size={20} />
            <span>3 More</span>
          </button>
        </div>

        {/* Education Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium mb-2 text-[#919191]">Education</h4>
          <div className="p-4">
            <h5 className="font-bold text-[#1E1E1E]">
              MA, Graphic Design • Kingston University
            </h5>
            <p className="text-[#585858]">Jan 2022 - Sep 2023</p>
            <p className="text-[#585858]">London, UK</p>
            <p className="mt-2 text-sm text-[#585858]">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
              Also, recognised by EnAble India, a non-profit organisation that
              has been empowering people with disabilities.Developed a
              successful, scalable pellet-less shooting experience in
              collaboration with product managers, coaches, and athletes. Also,
              recognised by EnAble India, a non-profit organisation that has
              been empowering people with disabilities.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-medium mb-2 text-[#919191]">
            Achievements
          </h4>
          <div className="p-4">
            <h5 className="font-bold text-[#1E1E1E]">
              Course Leader • Kingston University
            </h5>
            <p className="text-[#585858]">Jan 2022 - Sep 2023</p>
            <p className="text-[#585858]">London, UK</p>
            <p className="mt-2 text-sm text-[#585858]">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
            </p>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-6 border-gray-200 pb-4">
          <h4 className="text-lg font-medium mb-2 text-[#919191]">
            Languages Known
          </h4>
          <div className="flex gap-2">
            {["Hindi", "Telugu", "English", "German"].map((lang) => (
              <span
                key={lang}
                className="bg-[#EEEEEE] text-[#585858] px-6 py-2 text-sm font-medium hover:bg-gray-200 transition rounded-lg"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
