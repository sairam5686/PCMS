import React from 'react'
import { CiClock2 } from "react-icons/ci";
import { PiMedalLight } from "react-icons/pi";
import { IoBookOutline } from "react-icons/io5";
import { MdOutlineVerified } from "react-icons/md";
import { MdOutlineWeb } from "react-icons/md";
import { GiRobotAntennas } from "react-icons/gi";
import { IoLogoDocker } from "react-icons/io5";
import { FaGears } from "react-icons/fa6";
import { HiPencilAlt } from "react-icons/hi";
import { FaRegTrashAlt } from "react-icons/fa";
import WorkHistory from './UI_components/WorkHistory';



const Analytics_consultant = () => {
  return (
    <div className='flex flex-col justify-center'>
        {/* Navbar start */}
        <div className='flex flex-row justify-left items-center border-b-2 border-gray-200 p-5'>
            <h2 className='text-2xl font-semibold '>Consultant Dashboard</h2>
        </div>
        {/* Navbar end */}

        {/* k-card start */}
        <div className='flex flex-row justify-between items-center w-full mt-5 px-5  py-2 '>

                <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Total Attendance</h6>
                        <CiClock2 className='inline-block '/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>93%</h2>
                        <p className='text-xs font-light text-gray-500'>22 of 30 days present</p>
                    </div>
                </div>



                <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Certificates</h6>
                        <PiMedalLight className='inline-block '/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>3</h2>
                        <p className='text-xs font-light text-gray-500'>Active certifications</p>
                    </div>
                </div>



<div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Trainings</h6>
                        < IoBookOutline className='inline-block '/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>93%</h2>
                        <p className='text-xs font-light text-gray-500'>Enrolled courses</p>
                    </div>
                </div>




<div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Completed</h6>
                        <MdOutlineVerified className='inline-block '/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>25%</h2>
                        <p className='text-xs font-light text-gray-500'>Training completion rate</p>
                    </div>
                </div>
        </div>

        {/* k-card end */}


        {/* for chart and Training start */}

       <div className="flex flex-row justify-between mt-5 px-5 w-full h-[60vh] ">
            
            
            <div className="h-full w-[50%] p-8 border-2 flex flex-col justify-between border-gray-200 rounded-2xl">
                <div>
                    <h1 className='font-semibold'>Attendance Overview</h1>
                    <p className='font-light text-xs'>Your attendance summary for this month</p>
                </div>

                <div className='bg-black h-[80%] text-white'>
                        GRAPH NEEDED TO BE ADDED
                </div>
            </div>

        
        
        <div className="h-full w-[45%]  p-8 border-2 border-gray-200 rounded-2xl flex flex-col justify-between">
          
                <div>
                    <h1 className='font-semibold'>Attendance Overview</h1>
                    <p className='font-light text-xs'>Your attendance summary for this month</p>
                </div>

                 <div className=' h-[90%] mt-5  w-full overflow-clip '>
                    <ul className='flex flex-col gap-5 '>

                        <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Advanced Node.js Development</h4>
                            <p className='text-emerald-500 text-sm font-semibold'>Completed</p>
                            </div>
                            <div> 
                                <MdOutlineWeb className='inline-block h-10 w-10 text-emerald-500' />
                            </div>
                        </li>



                        <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Machine Learning Fundamentals</h4>
                            <p className='text-yellow-500 text-sm font-semibold'>Pending</p>
                            </div>
                            <div> 
                                <GiRobotAntennas className='inline-block h-10 w-10 text-yellow-500' />
                            </div>
                        </li>



                        <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Docker & Kubernetes</h4>
                            <p className='text-red-500 text-sm font-semibold'>incompleted</p>
                            </div>
                            <div> 
                                <IoLogoDocker className='inline-block h-10 w-10 text-red-500' />
                            </div>
                        </li>


                        <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>System Design Principles</h4>
                            <p className='text-yellow-500 text-sm font-semibold'>Pending</p>
                            </div>
                            <div> 
                                <FaGears className='inline-block h-10 w-10 text-yellow-500' />
                            </div>
                        </li>
                     
                    </ul>
                </div>
            </div>
    
    </div>

      {/* for chart and Training end */}


{/* for certificate Started */}

    <div className='h-max-content w-[97%] mt-10 ml-5 border-2 p-8  border-gray-200 rounded-2xl'>
         

         <div className='flex flex-row justify-between items-center'>
                  
                  <div>
                    <h1 className='font-semibold text-2xl'>Certificates </h1>
                    <p className='font-light text-xs'>Manage your professional certifications</p>
                    </div>

                    <div>
                        <button type="button" class="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-1.5 mb-1.5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">+ Add Certificate</button>
                    </div>

        </div>



        <div className=' h-[90%] mt-5  w-full overflow-clip '>
                    <ul className='flex flex-col gap-5 '>

                        <li className='w-full border-2 p-5 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Advanced Node.js Development</h4>
                            <p className='text-gray-600 text-sm font-light'>Amazon Web Services</p>
                            <p className='text-gray-600 text-xs font-extralight'>Issued: 12/15/2023 • Expires: 12/15/2026</p>
                            </div>
                            <div className='flex flex-row gap-4.5 justify-center items-center'> 
                                <button  >
                                <HiPencilAlt className='inline-block h-5 w-5  text-black' />
                                </button>

                                <button >
                                <FaRegTrashAlt className='inline-block h-5 w-5 text-black' />
                                </button>
                            </div>
                        </li>



                       <li className='w-full border-2 p-5 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Advanced Node.js Development</h4>
                            <p className='text-gray-600 text-sm font-light'>Amazon Web Services</p>
                            <p className='text-gray-600 text-xs font-extralight'>Issued: 12/15/2023 • Expires: 12/15/2026</p>
                            </div>
                            <div className='flex flex-row gap-4.5 justify-center items-center'> 
                                <button  >
                                <HiPencilAlt className='inline-block h-5 w-5  text-black' />
                                </button>

                                <button >
                                <FaRegTrashAlt className='inline-block h-5 w-5 text-black' />
                                </button>
                            </div>
                        </li>




                        <li className='w-full border-2 p-5 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Advanced Node.js Development</h4>
                            <p className='text-gray-600 text-sm font-light'>Amazon Web Services</p>
                            <p className='text-gray-600 text-xs font-extralight'>Issued: 12/15/2023 • Expires: 12/15/2026</p>
                            </div>
                            <div className='flex flex-row gap-4.5 justify-center items-center'> 
                                <button  >
                                <HiPencilAlt className='inline-block h-5 w-5  text-black' />
                                </button>

                                <button >
                                <FaRegTrashAlt className='inline-block h-5 w-5 text-black' />
                                </button>
                            </div>
                        </li>



                        <li className='w-full border-2 p-5 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                            <div>
                            <h4>Advanced Node.js Development</h4>
                            <p className='text-gray-600 text-sm font-light'>Amazon Web Services</p>
                            <p className='text-gray-600 text-xs font-extralight'>Issued: 12/15/2023 • Expires: 12/15/2026</p>
                            </div>
                            <div className='flex flex-row gap-4.5 justify-center items-center'> 
                                <button  >
                                <HiPencilAlt className='inline-block h-5 w-5  text-black' />
                                </button>

                                <button >
                                <FaRegTrashAlt className='inline-block h-5 w-5 text-black' />
                                </button>
                            </div>
                        </li>
                    </ul>
                </div>


         </div>

{/* for certificate end */}
    <div className='border-gray-200 rounded-2xl border-2 mt-8 ml-5 w-[97%] '>
    <WorkHistory />
    </div>

    </div>
  )
}

export default Analytics_consultant