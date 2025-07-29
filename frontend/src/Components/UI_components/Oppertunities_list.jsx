import React from 'react'
import { FaMapMarkerAlt, FaClock, FaRupeeSign } from 'react-icons/fa';
import { BsBuilding } from "react-icons/bs";



const jobData = [
  {
    id: 1,
    title: 'DevOps Engineer',
    subtitle: 'Cloud Infrastructure Migration',
    type: 'Technology',
    location: 'Bangalore, Karnataka',
    duration: '6 months',
    description: 'Design and implement cloud infrastructure solutions using Docker, Kubernetes, and Azure.',
    requirements: ['Docker & Kubernetes', 'Azure/AWS experience', 'CI/CD expertise'],
    posted: '1/20/2024',
    deadline: '2/10/2024',
    status: 'closing soon',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    subtitle: 'React.js & Tailwind Projects',
    type: 'Software',
    location: 'Remote',
    duration: '3 months',
    description: 'Build responsive components with React and Tailwind.',
    requirements: ['React.js', 'Tailwind CSS', 'REST APIs'],
    posted: '2/01/2024',
    deadline: '2/20/2024',
    status: 'open',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    subtitle: 'React.js & Tailwind Projects',
    type: 'Software',
    location: 'Remote',
    duration: '3 months',
    description: 'Build responsive components with React and Tailwind.',
    requirements: ['React.js', 'Tailwind CSS', 'REST APIs'],
    posted: '2/01/2024',
    deadline: '2/20/2024',
    status: 'open',
  },
  {
    id: 2,
    title: 'Frontend Developer',
    subtitle: 'React.js & Tailwind Projects',
    type: 'Software',
    location: 'Remote',
    duration: '3 months',
    description: 'Build responsive components with React and Tailwind.',
    requirements: ['React.js', 'Tailwind CSS', 'REST APIs'],
    posted: '2/01/2024',
    deadline: '2/20/2024',
    status: 'open',
  }
];




export const Oppertunities_list = ({view_oppertunities}) => {


  return (
    <div className='flex flex-col justify-center'>

         <div className='flex flex-row justify-left items-center border-b-2 border-gray-200 p-5'>
            <h2 className='text-2xl font-semibold '>Oppertunities </h2>
        </div>


        {/* this is for searchbar start */}
        <div className='w-full px-20 pt-4'>
        
      <form class="w-full mx-auto">   
    <label for="default-search" class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white">Search</label>
    <div class="relative">
        <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
            <svg class="w-4 h-4 text-gray-500 dark:text-gray-400" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 20 20">
                <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"/>
            </svg>
        </div>
        <input type="search" id="default-search" class="block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-50 focus:ring-blue-500 focus:border-blue-500  dark:border-gray-300 dark:placeholder-gray-400 dark:text-black dark:focus:ring-blue-500 dark:focus:border-blue-500" placeholder="Search Mockups, Logos..." required />
        <button type="submit" class="text-white absolute end-2.5 bottom-2.5 bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800">Search</button>
    </div>
</form>

        </div>
        {/* this is for searchbar end */}


      {/* the Oppertunities_list start here */}

      <div className='w-full h-max p-20 overflow-y-scroll'>

       {view_oppertunities.map((view_oppertunities) => (
        <div
          key={view_oppertunities._id}
          className="bg-white p-6 rounded-xl shadow-md border-2  mb-6 border-gray-200 hover:shadow-lg transition-all"
        >
          <div className="flex items-center justify-between mb-2">
            <h2 className="text-xl font-semibold">{view_oppertunities.opper_title}</h2>
            
          </div>

          <h3 className="text-lg font-semibold text-gray-800 mb-2">{view_oppertunities.opper_project}</h3>

          <div className="flex flex-wrap gap-4 text-sm text-gray-600 mb-4">
            <div className="flex items-center gap-1">
              <BsBuilding />
              <span>{view_oppertunities.opper_category}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaMapMarkerAlt />
              <span>{view_oppertunities.opper_location}</span>
            </div>
            <div className="flex items-center gap-1">
              <FaClock />
              <span>{view_oppertunities.opper_duration}</span>
            </div>
          </div>

          <p className="text-gray-700 mb-4">{view_oppertunities.opper_description}</p>

          <div className="mb-4">
            <h4 className="font-semibold mb-2">Requirements:</h4>
            <div className="flex flex-wrap gap-2">
              {view_oppertunities.opper_requirements.map((req, i) => (
                <span
                  key={i}
                  className="bg-gray-100 text-gray-700 px-3 py-1 rounded-full text-sm"
                >
                  {req}
                </span>
              ))}
            </div>
          </div>

          <hr className="mb-4 bg-gray-200 border-gray-200 border-2" />

          <div className="flex justify-between items-center">
            <div className="flex flex-col text-sm text-gray-500 mb-4">
              <span>Posted: {view_oppertunities.opper_postedDate}</span>
              <span>Deadline: {view_oppertunities.opper_deadline}</span>
            </div>

            <button className="bg-black text-white px-5 py-2 rounded-lg hover:bg-gray-800 transition">
              Apply Now
            </button>
          </div>
        </div>
      ))}

  </div>
      {/* the Oppertunities_list end here */}




    </div>
  )
}
