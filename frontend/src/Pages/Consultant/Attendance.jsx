import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Attendance_consultant from '../../Components/UI_components/Attendance_consultant'

const Attendance = () => {
  return (
    <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
  <div className='sticky top-0 h-screen border-r border-gray-200 w-64'>
    <Sidebar />
  </div>
  <div className='overflow-y-auto mb-5'>
    <Attendance_consultant/>
  </div>
</div>
  )
}

export default Attendance