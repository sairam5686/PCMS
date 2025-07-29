import React from 'react'
import Sidebar from '../../../Components/Sidebar'
import My_application_list from '../../../Components/UI_components/My_application_list'

const My_applications = () => {
  return (
    <div>
<div className='grid grid-cols-[16rem_1fr] min-h-screen'>
  <div className='sticky top-0 h-screen border-r border-gray-200 w-64'>
    <Sidebar />
  </div>
  <div className='overflow-y-auto mb-5'>
   <My_application_list />
  </div>
</div> 
    </div>
  )
}

export default My_applications