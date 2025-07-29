import React from 'react'
import Sidebar from '../../Components/Sidebar'
import Analytics_consultant from '../../Components/Analytics_consultant'

const Dashboard = () => {
  return (
    <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
  <div className='sticky top-0 h-screen border-r border-gray-200 w-64'>
    <Sidebar />
  </div>
  <div className='overflow-y-auto mb-5'>
    <Analytics_consultant />
  </div>
</div>

  )
}

export default Dashboard