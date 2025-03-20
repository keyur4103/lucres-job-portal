import { FiArrowUpRight, FiCalendar } from "react-icons/fi";

const InterviewList = () => {
  const interviews = [
    {
      name: "Pritesh Srivastava",
      date: "24 May 2024",
      time: "3:30 PM",
      img: "src/assets/profile.jpeg",
    },
    {
      name: "Nikita Mansingha",
      date: "24 May 2024",
      time: "3:30 PM",
      img: "src/assets/profile.jpeg",
    },
    {
      name: "Amit Kumar",
      date: "25 May 2024",
      time: "4:00 PM",
      img: "src/assets/profile.jpeg",
    }
  ];

  return (
    <div className="bg-white rounded-lg border border-gray-300 p-4 mt-4 w-full">
      {/* Header */}
      <div className="flex justify-between items-center border-b pb-2 mb-3">
        <h4 className="text-lg font-bold text-[#585858]">
          Scheduled Interviews
        </h4>
        <FiArrowUpRight className="text-gray-500" size={20} />
      </div>

      <p className="text-sm text-[#58585880] mb-4">This Week</p>

      {/* Scrollable Interview List */}
      <div className="custom-scroll max-h-[250px] overflow-y-auto">
        {" "}
        {/* Apply the class here */}
        {interviews.map((item, index) => (
          <div key={index} className="flex items-center gap-4 py-2">
            <img
              src={item.img}
              alt={item.name}
              className="w-12 h-12 rounded-full"
            />

            <div className="flex-1">
              <p className="font-bold text-[#2D4232]">{item.name}</p>
              <div className="flex items-center gap-2 text-[#585858] text-sm">
                <FiCalendar size={14} />
                <span>
                  {item.date} • {item.time}
                </span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InterviewList;
