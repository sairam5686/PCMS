import React from 'react'
import { BsBuildings, BsInfoCircle } from 'react-icons/bs';


const jobApplications = [
  {
    id: 1,
    category: 'Enterprise Software',
    title: 'Frontend Architect',
    project: 'Enterprise Dashboard Redesign',
    appliedDate: '1/16/2024',
    status: 'under consideration',
    statusColor: 'bg-blue-600',
    buttonText: 'View Details',
  },
  {
    id: 2,
    category: 'Cloud Services',
    title: 'DevOps Engineer',
    project: 'Cloud Migration',
    appliedDate: '2/01/2024',
    status: 'interview scheduled',
    statusColor: 'bg-green-600',
    buttonText: 'Track Status',
  },
  {
    id: 3,
    category: 'Cloud Services',
    title: 'Cloud Architect',
    project: 'Azure Re-Architecture',
    appliedDate: '2/10/2024',
    status: 'rejected',
    statusColor: 'bg-red-500',
    buttonText: 'Learn More',
  },{
    id: 3,
    category: 'Cloud Services',
    title: 'Cloud Architect',
    project: 'Azure Re-Architecture',
    appliedDate: '2/10/2024',
    status: 'rejected',
    statusColor: 'bg-red-500',
    buttonText: 'Learn More',
  },{
    id: 3,
    category: 'Cloud Services',
    title: 'Cloud Architect',
    project: 'Azure Re-Architecture',
    appliedDate: '2/10/2024',
    status: 'rejected',
    statusColor: 'bg-red-500',
    buttonText: 'Learn More',
  },{
    id: 3,
    category: 'Cloud Services',
    title: 'Cloud Architect',
    project: 'Azure Re-Architecture',
    appliedDate: '2/10/2024',
    status: 'rejected',
    statusColor: 'bg-red-500',
    buttonText: 'Learn More',
  },{
    id: 3,
    category: 'Cloud Services',
    title: 'Cloud Architect',
    project: 'Azure Re-Architecture',
    appliedDate: '2/10/2024',
    status: 'rejected',
    statusColor: 'bg-red-500',
    buttonText: 'Learn More',
  },
];

  

const My_application_list = () => {
  return (
    <div className='flex flex-col justify-center'>

       <div className='flex flex-row justify-left items-center border-b-2 border-gray-200 p-5'>
            <h2 className='text-2xl font-semibold '>My Applications</h2>
        </div>

        <div className='w-full h-max p-10'>
        {jobApplications.map((job) => (
        <div
          key={job.id}
          className="bg-white rounded-xl border border-gray-200 p-4 mt-10 w-full"
        >
          {/* Category Header */}
          <div className="flex items-center gap-2 mb-4 text-sm font-medium text-gray-800">
            <BsBuildings className="text-lg" />
            {job.category}
          </div>

          {/* Job Card */}
          <div className="flex justify-between items-center bg-gray-50 p-4 rounded-lg border border-gray-200 hover:shadow transition">
            {/* Left Section */}
            <div className="flex flex-col gap-1">
              <div className="flex items-center gap-2">
                <BsInfoCircle className="text-gray-500" />
                <span
                  className={`text-xs text-white ${job.statusColor} px-2 py-0.5 rounded-full font-medium`}
                >
                  {job.status}
                </span>
              </div>

              <h2 className="text-sm font-semibold text-gray-900">{job.title}</h2>
              <p className="text-sm text-gray-500">{job.project}</p>
              <p className="text-xs text-gray-400">Applied on {job.appliedDate}</p>
            </div>

            {/* Button */}
            <button className="text-sm font-bold  bg-gray-100 text-black px-3 py-1 rounded-md hover:bg-gray-200 transition">
              {job.buttonText}
            </button>
          </div>
        </div>
      ))}
</div>
        

    </div>
  )
}

export default My_application_list