import React from 'react'
import { Oppertunities_list } from '../../../Components/UI_components/Oppertunities_list'
import Sidebar from '../../../Components/Sidebar'

const View_application = () => {
  return (
   <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
  <div className='sticky top-0 h-screen border-r border-gray-200 w-64'>
    <Sidebar />
  </div>
  <div className='overflow-y-auto mb-5'>
   <Oppertunities_list />
  </div>
</div> 
  )
}

export default View_application