import React, { useEffect, useState } from 'react'
import { BsBuildings, BsInfoCircle, BsTypeH1 } from 'react-icons/bs';
import { useNavigate } from 'react-router';



const My_application_list = () => {

const [User_details, setUser_details] = useState(null);
 const navigator = useNavigate()

useEffect(() => {
  const  user_data = JSON.parse(localStorage.getItem("users"));

  if(!(user_data)){
    navigator('/consultant_login')}
  else{
    console.log(user_data);
    setUser_details(user_data) 
  }
}, [navigator])






  return (
    <div className='flex flex-col justify-center'>

       <div className='flex flex-row justify-left items-center border-b-2 border-gray-200 p-5'>
            <h2 className='text-2xl font-semibold '>My Applications</h2>
        </div>

        <div className='w-full h-max p-10'>
        {(User_details)?( User_details.applicantions_oppertunities.map((job,index) => (
        <div
          key={index}
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
                className={`text-xs px-2 py-0.5 rounded-full font-medium text-white ${
                  job.application_status.toLowerCase() === "accepted"
                    ? "bg-green-500"
                    : job.application_status.toLowerCase() === "rejected"
                    ? "bg-red-500"
                    : job.application_status.toLowerCase() === "interview"
                    ? "bg-yellow-500"
                    : job.application_status.toLowerCase() === "applied"
                    ? "bg-blue-500"
                    : "bg-gray-500"
                }`}
              >
                {job.application_status}
              </span>

              </div>

              <h2 className="text-sm font-semibold text-gray-900">{job.opper_title}</h2>
              <p className="text-sm text-gray-500">Project Duration: {job.opper_duration}</p>
              <p className="text-xs text-gray-400">Applied on {new Date(job.applied_date).toLocaleDateString("en-GB")}</p>
            </div>

            {/* Button */}
            <button className="text-sm font-bold  bg-gray-100 text-black px-3 py-1 rounded-md hover:bg-gray-200 transition">
              {job.buttonText}
            </button>
          </div>
        </div>
      ))) : (<h1>Fetching your application</h1>)}
</div>
        

    </div>
  )
}

export default My_application_list