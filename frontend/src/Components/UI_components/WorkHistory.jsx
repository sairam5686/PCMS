import React from "react";
import { FaBriefcase } from "react-icons/fa";

const workHistoryData = [
  {
    period: "2022 - Present",
    company: "Amazon",
    title: "Senior Software Engineer",
    subtitle: "Building the future of e-commerce",
    bullets: [
      "Developed a new feature that improves the shopping experience",
      "Implemented a recommendation algorithm to suggest products",
      "Enhanced the checkout process making it more intuitive and user-friendly",
      "Built a feature for tracking packages in real-time",
    ],
    logoColor: "text-green-600",
  },
  {
    period: "2021 - 2022",
    company: "Google",
    title: "Senior Software Engineer",
    subtitle: "Building the future of search",
    bullets: [
      "Improved the search algorithm to provide more relevant results",
      "Developed a new feature that personalizes search results",
      "Enhanced the search functionality making it more intuitive and user-friendly",
      "Implemented a feature for tracking search history",
    ],
    logoColor: "text-green-600",
  },
];

const WorkHistory = ({work_details}) => {
  return (
    <div className="px-6 py-10 max-w-4xl mx-auto">
      {/* Header */}
      <div className="flex items-center gap-2 mb-4">
        <FaBriefcase className="text-2xl text-purple-700" />
        <h2 className="text-3xl font-bold text-gray-800">Work History</h2>
      </div>
      
      <p className="text-gray-600 mb-10">
        I'm a full-stack developer that loves{" "}
        <span className="bg-gray-200 px-1 py-0.5 rounded">building products</span>{" "}
        and web apps that can impact millions of lives
      </p>

      {/* Timeline */}
      {work_details.map((job, index) => (
        <div key={index} className="mb-10">
          <div className="text-gray-500 font-medium">{job.start_year_to_end_year}</div>
          <div className="mt-1">
            <h3 className={`text-xl font-semibold text-green-600`}>
              {job.company_name}
            </h3>
            <p className="font-semibold text-gray-800">{job.role}</p>
            <p className="text-sm text-gray-500 mb-3">No of years worked : {job.duration}</p>
            <ul className="list-disc pl-6 space-y-1 text-gray-700">
           
                <li >{job.description_of_role}</li>
         
            </ul>
          </div>
        </div>
      ))}
    </div>
  );
};

export default WorkHistory;
