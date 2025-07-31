import React, { useState } from 'react'
import { BiSolidUserRectangle } from "react-icons/bi";
import { GoHome } from "react-icons/go";
import { CiCalendar } from "react-icons/ci";
import { LiaSuitcaseSolid } from "react-icons/lia";
import { IoChatbubbleOutline } from "react-icons/io5";
import { Link } from 'react-router';
import { CiLogout } from "react-icons/ci";
import Attendance from '../Pages/Consultant/Attendance';



const Sidebar = () => {


  const [isOpen, setIsOpen] = useState(false);


  return (
  <div className='w-64  border-r-1 border-gray-200 h-full '>

    {/* this if for name start */}
   <div className='flex p-5 w-full flex-row  justify-left items-center gap-3 border-b-1 border-gray-200 '>
    <div>
        <BiSolidUserRectangle  className='inline-block h-10 w-10 rounded-full'/>
    </div>
    <div className=''>
        <h2 className='text-xl font-black font-semibold'>Sairam</h2>
        <p className='text-sm text-zinc-500 font-light'>Consultant</p>
    </div>
    </div>
        {/* this if for name end */}

    <div className='text-black font-semibold mt-2 '>
    <ul className='px-5'>

        <Link to={'/dashboard'}>
        <li className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center  hover:text-white hover:bg-black duration-300'>
            <GoHome className='inline-block h-5 w-5 ' />
             <p>Home</p> 
        </li>
        </Link>


        <Link to={'/attendance'}>
        <li className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center  hover:text-white hover:bg-black duration-300'>
            <CiCalendar className='inline-block h-5 w-5 ' />
             <p>Attendance</p> 
        </li>
        </Link>
        
        


        <li
        onClick={() => setIsOpen(!isOpen)}
        className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center hover:text-white hover:bg-black duration-300 cursor-pointer'
      >
        <LiaSuitcaseSolid className='inline-block h-5 w-5' />
        <p>Opportunities</p>
      </li>

      {isOpen && (
        <ul className='ml-10 mt-1'>
            <Link to={'/opp_list'}>
          <li className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center hover:text-white hover:bg-black duration-300 cursor-pointer'>
            <p>View Opportunities</p>
          </li>
          </Link>

          <Link to={'/my_list'}>
          <li className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center hover:text-white hover:bg-black duration-300 cursor-pointer'>
            <p>My Application</p>
          </li>
          </Link>
        </ul>
              )}






        <li className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center  hover:text-white hover:bg-black duration-300'>
            <IoChatbubbleOutline className='inline-block h-5 w-5 ' />
             <p>Reviewer AI</p> 
        </li>


        <Link to={'/consultant_login'}>
        <li className='flex gap-3 p-3 rounded w-full justify-left flex-row items-center  hover:text-white hover:bg-red-500 duration-300'>
            <CiLogout className='inline-block h-5 w-5 ' />
             <p>Log out</p> 
        </li>
        </Link>
       
    </ul>
    </div>
    {/* List ending */}
    
        

  </div>
  )
}

export default Sidebar