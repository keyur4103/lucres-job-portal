import { FC, useState } from "react";
import {
  X,
  Download,
  ThumbsUp,
  ThumbsDown,
  Bookmark,
  Calendar,
} from "lucide-react";
import profile from "../assets/profile.jpeg";

interface ProfileProps {
  toggleProfile: () => void;
}

const Profile: FC<ProfileProps> = ({ toggleProfile }) => {
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
            className={`px-6 py-3 text-sm transition-colors ${
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
            <h2 className="text-lg font-semibold">Candidate’s Resume</h2>
            <p className="text-gray-500 text-sm">Last Updated May 2024</p>
          </div>
          <div className="flex items-center gap-3">
            <Download className="w-5 h-5 cursor-pointer text-gray-500 hover:text-black" />
            <button
              onClick={toggleProfile}
              className="text-red-500 hover:text-red-700 transition"
            >
              <X className="w-5 h-5 cursor-pointer" />
            </button>
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
            <h3 className="text-2xl font-bold">
              Pritesh Srivastava{" "}
              <span className="text-yellow-400 inline-block ml-1">✔</span>
            </h3>
            <p className="text-gray-500">Bengaluru, India • 8 Years of Exp.</p>
          </div>
        </div>

        {/* Action Buttons */}
        <div className="flex justify-between items-center mt-4 border-b border-gray-200 pb-4">
          <div className="flex gap-2">
            <button className="flex items-center gap-2 bg-red-100 text-red-500 px-4 py-2 rounded hover:bg-red-200 cursor-pointer">
              <ThumbsDown className="w-4 h-4" />
              Not a Good Fit
            </button>
            <button className="flex items-center gap-2 bg-green-100 text-green-500 px-4 py-2 rounded hover:bg-green-200 cursor-pointer">
              <ThumbsUp className="w-4 h-4" />
              Good Fit
            </button>
          </div>
          <button className="bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200 cursor-pointer">
            <Bookmark className="inline-block w-4 h-4 mr-2" />
            Save
          </button>
        </div>

        {/* Skills Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-semibold mb-2">Skills</h4>
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
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {skill}
              </span>
            ))}
          </div>
        </div>

        {/* Experience Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-semibold mb-2">Recent Experience</h4>

          {/* Experience Card */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm mb-4">
            <h5 className="font-bold">Lead Designer • Lollypop Designs</h5>
            <p className="text-gray-500">
              Jan 2022 - Present • 2 years 8 months
            </p>
            <p className="text-gray-500">Bengaluru, India</p>
            <p className="mt-2 text-sm text-gray-700">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
            </p>
          </div>

          {/* Second Experience */}
          <div className="bg-gray-50 p-4 rounded-lg shadow-sm">
            <h5 className="font-bold">Intern Designer • Santander Bank</h5>
            <p className="text-gray-500">Jan 2021 - Mar 2021 • 3 months</p>
            <p className="text-gray-500">London, UK</p>
            <p className="mt-2 text-sm text-gray-700">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
            </p>
          </div>

          <button className="mt-3 text-green-600 hover:text-green-700">
            + 3 More
          </button>
        </div>

        {/* Education Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-semibold mb-2">Education</h4>
          <div>
            <h5 className="font-bold">
              MA, Graphic Design • Kingston University
            </h5>
            <p className="text-gray-500">Jan 2022 - Sep 2023</p>
            <p className="text-gray-500">London, UK</p>
            <p className="mt-2 text-sm text-gray-700">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
            </p>
          </div>
        </div>

        {/* Achievements Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-semibold mb-2">Achievements</h4>
          <div>
            <h5 className="font-bold">Course Leader • Kingston University</h5>
            <p className="text-gray-500">Jan 2022 - Sep 2023</p>
            <p className="text-gray-500">London, UK</p>
            <p className="mt-2 text-sm text-gray-700">
              Developed a successful, scalable pellet-less shooting experience
              in collaboration with product managers, coaches, and athletes.
            </p>
          </div>
        </div>

        {/* Languages Section */}
        <div className="mt-6 border-b border-gray-200 pb-4">
          <h4 className="text-lg font-semibold mb-2">Languages Known</h4>
          <div className="flex gap-2">
            {["Hindi", "Telugu", "English", "German"].map((lang) => (
              <span
                key={lang}
                className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
              >
                {lang}
              </span>
            ))}
          </div>
        </div>

        {/* Calendar Invite */}
        <div className="mt-6 flex justify-end">
          <button className="flex items-center gap-2 bg-gray-100 text-gray-600 px-4 py-2 rounded hover:bg-gray-200">
            <Calendar className="w-4 h-4" />
            Send Calendar Invite
          </button>
        </div>
      </div>
    </>
  );
};

export default Profile;
