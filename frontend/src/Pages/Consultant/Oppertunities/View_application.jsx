import React, { useEffect } from 'react'
import { Oppertunities_list } from '../../../Components/UI_components/Oppertunities_list'
import Sidebar from '../../../Components/Sidebar'
import { useState } from 'react'

const View_application = () => {


//  this is used to fetch oppertunities from the backend 
const [opppertunities, setopppertunities] = useState(null)
const oppertunuties_fetcher = async () => {
  const response = await fetch('http://localhost:3000/oppertunitiesdata');
  const response_data = await response.json();
  console.log(response_data);
  
  setopppertunities(response_data);
}


// this is for triggering the api call when refreshed 
useEffect(() => {
  oppertunuties_fetcher()
}, [])


  return (
   <div className='grid grid-cols-[16rem_1fr] min-h-screen'>
  <div className='sticky top-0 h-screen border-r border-gray-200 w-64'>
    <Sidebar />
  </div>
  <div className='overflow-y-auto mb-5'>
   { 
  !opppertunities ? (
    <div>Fetching the data</div>
  ) : (
    <Oppertunities_list view_oppertunities={opppertunities} />
  )
}  </div>
</div> 
  )
}

export default View_application