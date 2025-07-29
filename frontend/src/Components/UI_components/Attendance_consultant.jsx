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
import { CiCalendar } from "react-icons/ci";




const Attendance_consultant = () => {
  return (
     <div className='flex flex-col justify-center'>
        <div className='flex flex-row justify-left items-center border-b-2 border-gray-200 p-5'>
            <h2 className='text-2xl font-semibold '>Attendance </h2>
        </div>

        {/* k-card start */}
                <div className='flex flex-row justify-between items-center w-full mt-5 px-5  py-2 '>
        
                        <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                            <div className=' flex justify-between items-center'>
                                <h6 className='text-sm font-semibold'>Total present days</h6>
                                <CiClock2 className='inline-block '/>
                            </div>
        
                            <div className='flex  flex-col '>
                                <h2 className='text-2xl font-black font-bold'>28</h2>
                                <p className='text-xs font-light text-gray-500'>out of 30 working days</p>
                            </div>
                        </div>
        
        
        
                        <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                            <div className=' flex justify-between items-center'>
                                <h6 className='text-sm font-semibold'>Total loggin hours</h6>
                                <CiCalendar className='inline-block '/>
                            </div>
        
                            <div className='flex  flex-col '>
                                <h2 className='text-2xl font-black font-bold'>56.7</h2>
                                <p className='text-xs font-light text-gray-500'>hours worked this month</p>
                            </div>
                        </div>
        
        
        
        <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                            <div className=' flex justify-between items-center'>
                                <h6 className='text-sm font-semibold'>Leave Request</h6>
                                < IoBookOutline className='inline-block '/>
                            </div>
        
                            <div className='flex  flex-col '>
                                <h2 className='text-2xl font-black font-bold'>5</h2>
                                <p className='text-xs font-light text-gray-500'>out of 30 days</p>
                            </div>
                        </div>
        
        
        
        
        <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                            <div className=' flex justify-between items-center'>
                                <h6 className='text-sm font-semibold'>Attendace rate</h6>
                                <MdOutlineVerified className='inline-block '/>
                            </div>
        
                            <div className='flex  flex-col '>
                                <h2 className='text-2xl text-emerald-600 font-bold'>Excellent</h2>
                                <p className='text-xs font-light text-gray-500'>Attendance performance</p>
                            </div>
                        </div>
                </div>
        
                {/* k-card end */}


              {/* for chart and Training start */}
            
                   <div className="flex flex-row justify-between mt-5 px-5 w-full h-[90vh] ">
                        
                        
                        <div className="h-full w-[50%] p-8 border-2 flex flex-col justify-between border-gray-200 rounded-2xl">
                            <div>
                                <h1 className='font-semibold'>Leave Requests History</h1>
                                <p className='font-light text-xs'>Track the status of your leave applications</p>
                            </div>
            

  <div className=' h-[90%] mt-5  w-full overflow-y-scroll overflow-x-hidden   [&::-webkit-scrollbar]:w-2[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-white-700 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-300 '>
                                <ul className='flex flex-col gap-5 '>
            
                                    <li className='w-full border-2 p-4 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4 className='text-xl'>Thursday, July 24, 2025</h4>
                                        <p className='text-gray-500 text-sm '>personal Leave</p>
                                        <p  className='text-gray-500 text-xs '>wedding ceremony</p>
                                        </div>
                                        <div> 
                                       <span class="inline-flex items-center rounded-md bg-green-50 px-3 py-3 text-xs font-medium text-black-700 ring-1 ring-gray-700/10 ring-inset">Applied on 7/26/2025</span>

                                        </div>
                                    </li>
            
            
            
                                     <li className='w-full border-2 p-4 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4 className='text-xl'>Thursday, July 24, 2025</h4>
                                        <p className='text-gray-500 text-sm '>personal Leave</p>
                                        <p  className='text-gray-500 text-xs '>wedding ceremony</p>
                                        </div>
                                        <div> 
                                       <span class="inline-flex items-center rounded-md bg-green-50 px-3 py-3 text-xs font-medium text-black-700 ring-1 ring-gray-700/10 ring-inset">Applied on 7/26/2025</span>

                                        </div>
                                    </li>
            
            
                                     <li className='w-full border-2 p-4 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4 className='text-xl'>Thursday, July 24, 2025</h4>
                                        <p className='text-gray-500 text-sm '>personal Leave</p>
                                        <p  className='text-gray-500 text-xs '>wedding ceremony</p>
                                        </div>
                                        <div> 
                                       <span class="inline-flex items-center rounded-md bg-green-50 px-3 py-3 text-xs font-medium text-black-700 ring-1 ring-gray-700/10 ring-inset">Applied on 7/26/2025</span>

                                        </div>
                                    </li>
            
            
                                </ul>
                            </div>

                        
                        </div>
            
                    
                    

                    <div className="h-full w-[45%]  p-8 border-2 border-gray-200 rounded-2xl flex flex-col justify-between">
                      
                            <div>
                                <h1 className='font-semibold'>Recent Attendance</h1>
                                <p className='font-light text-xs'>Your attendance record for the last 8 days</p>
                            </div>
            
                             <div className=' h-[90%] mt-5  w-full overflow-y-scroll overflow-x-hidden   [&::-webkit-scrollbar]:w-2[&::-webkit-scrollbar-track]:rounded-full [&::-webkit-scrollbar-track]:bg-gray-100 [&::-webkit-scrollbar-thumb]:rounded-full  [&::-webkit-scrollbar-thumb]:bg-gray-300 dark:[&::-webkit-scrollbar-track]:bg-white-700 dark:[&::-webkit-scrollbar-thumb]:bg-zinc-300 '>
                                <ul className='flex flex-col gap-5 '>
            
                                    <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Thu, Feb 1</h4>
                                        <p className='text-emerald-500 text-sm font-semibold'>present</p>
                                        </div>
                                        <div> 
                                       <span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>

                                        </div>
                                    </li>
            
            
            
                                    <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Fri, Feb 2 </h4>
                                        <p className='text-emerald-500 text-sm font-semibold'>Present</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>
                                        </div>
                                    </li>
            
            
            
                                    <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Sat, Feb 3</h4>
                                        <p className='text-blue-500 text-sm font-semibold'>Work from home</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>                                        </div>
                                    </li>
            
            
                                    <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Mon, Feb 5</h4>
                                        <p className='text-red-500 text-sm font-semibold'>Absent</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>                                        </div>
                                    </li>


                                     <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Mon, Feb 5</h4>
                                        <p className='text-red-500 text-sm font-semibold'>Absent</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>                                        </div>
                                    </li>



                                     <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Mon, Feb 5</h4>
                                        <p className='text-red-500 text-sm font-semibold'>Absent</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>                                        </div>
                                    </li>



                                     <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Mon, Feb 5</h4>
                                        <p className='text-red-500 text-sm font-semibold'>Absent</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>                                        </div>
                                    </li>




                                     <li className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                        <div>
                                        <h4>Mon, Feb 5</h4>
                                        <p className='text-red-500 text-sm font-semibold'>Absent</p>
                                        </div>
                                        <div> 
<span class="inline-flex items-center rounded-md bg-blue-50 px-2 py-1 text-xs font-medium text-blue-700 ring-1 ring-blue-700/10 ring-inset">8 hours</span>                                        </div>
                                    </li>











                                 
                                </ul>
                            </div>
                        </div>
                
                </div>
            
                  {/* for chart and Training end */}



                 
                  
                  



     </div>
  )
}

export default Attendance_consultant