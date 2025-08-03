import React, { useEffect, useState } from 'react'
import Sidebar from '../../Components/Sidebar'
import Attendance_consultant from '../../Components/UI_components/Attendance_consultant'
import { useNavigate } from 'react-router';

const Attendance = () => {
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
    <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
  <div className='sticky top-0 h-screen border-r border-gray-200 w-64'>
    <Sidebar />
  </div>
  <div className='overflow-y-auto mb-5'>{
    (User_details) ?
    <Attendance_consultant attendance_detail={User_details}/>:
    <h1>Fetching attendace details</h1>
    }
  </div>
</div>
  )
}

export default Attendance