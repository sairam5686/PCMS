import React, { useEffect, useMemo, useState } from 'react'
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
import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from 'recharts';
import { motion, startOptimizedAppearAnimation } from 'framer-motion';
import { useForm } from 'react-hook-form';
import { useNavigate } from 'react-router';





const Analytics_consultant = () => {
    const [Attendance_average, setAttendance_average] = useState(0)
    const [Training_average, setTraining_average] = useState(0)
   


// this is general property

    const navigate = useNavigate();
    const [details, setUser_details] = useState(null);

  useEffect(() => {
      const user = JSON.parse(localStorage.getItem("users")); 
      if (!user) {
        navigate("/consultant_login");
      } else {
        console.log(user);
        setUser_details(user);
      }
    }, [navigate]);

// this is end of general property 


   
   //  form logic start
    

   
     const [FormAdder, setFormAdder] = useState(null)
     const {register,handleSubmit,watch,formState: { errors },} = useForm()
 
 
     const onSubmit = (data) => {
  const updatedForm = {
    ...data,
    username: details.username,
  };

  setFormAdder(updatedForm);
  certificate_fetcher(updatedForm);
  setIspopped(false);
};




 const certificate_fetcher = async (form) => {
  try {
    const response = await fetch("http://localhost:3000/form_updater", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(form),
    });

    if (response.ok) {
      const user = await response.json();  // full user object from backend
      localStorage.setItem("users", JSON.stringify(user));
      setUser_details(user);
    }
  } catch (err) {
    console.error("Error updating:", err);
  }
};
 
 
     // form logic end

    const caluc_average = () => {

        if (!details) return;
        const new_filter_arr = details.attendance.filter((item)=>{
            if ( item.status.toLowerCase() == "present") {
                return true
            }else if( item.status.toLowerCase() == "work from home"){
                return true
            }else{
                return false
            }
        } )

 const new_filter_train = details.training.filter((item)=>{
            if ( item.status.toLowerCase() == "completed") {
                return true
            }else{
                return false
            }
        } )

        setTraining_average(((  new_filter_train.length /details.training.length)* 100).toFixed(2) )
        setAttendance_average(((  new_filter_arr.length /details.attendance.length)*100).toFixed(2))
    }
    
   useEffect(() => {
    caluc_average();
  }, [details]);



   const chartData = useMemo(() => {
  if (!details || !details.attendance) return [];

  const statusCount = {};
  details.attendance.forEach((record) => {
    const status = record.status;
    statusCount[status] = (statusCount[status] || 0) + 1;
  });

  return Object.entries(statusCount).map(([name, value]) => ({
    name,
    value,
  }));
}, [details]);   
    
    
   
const STATUS_COLORS = {
  Present: '#22C55E', // green-500
  Sick: '#EF4444',    // red-500
  Absent: '#F97316',  // orange-500 (optional)
  'Work from Home': '#3B82F6', // blue-500 (optional)
};



const [Ispopped, setIspopped] = useState(false)

  return (
    
    <div className='flex flex-col justify-center'>{ details ?(<>
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
                        <CiClock2 className='inline-block'/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>{Attendance_average}%</h2>
                        <p className='text-xs font-light text-gray-500'>Out of {details.attendance.length} days present</p>
                    </div>
                </div>



                <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Certificates</h6>
                        <PiMedalLight className='inline-block '/>
                </div>

                <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>{details.certificates.length}</h2>
                        <p className='text-xs font-light text-gray-500'>Active certifications</p>
                    </div>
                </div>



                <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Trainings</h6>
                        < IoBookOutline className='inline-block '/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>{details.training.length}</h2>
                        <p className='text-xs font-light text-gray-500'>Enrolled courses</p>
                    </div>
                </div>




              <div className='border-3 border-gray-200 p-5 flex flex-col gap-5  h-35 w-60 rounded-2xl '>
                    <div className=' flex justify-between items-center'>
                        <h6 className='text-sm font-semibold'>Completed</h6>
                        <MdOutlineVerified className='inline-block '/>
                    </div>

                    <div className='flex  flex-col '>
                        <h2 className='text-2xl font-black font-bold'>{Training_average}%</h2>
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

                 <div className=' h-[80%] text-black flex items-center justify-center p-4 rounded-xl'>
      <motion.div
        initial={{ scale: 0.8, opacity: 0 }}
        animate={{ scale: 1.5, opacity: 1 }}
        transition={{ duration: 0.8, ease: 'easeOut' }}
        className='w-full max-w-md'
      >
        <ResponsiveContainer width='100%' height={300}>
          <PieChart>
            <Pie
              data={chartData}
              cx='50%'
              cy='50%'
              outerRadius={100}
              label
              dataKey='value'
              isAnimationActive={true}
            >
              {chartData.map((entry, index) => (
                <Cell
                  key={` cell-${index}`}
                  fill={STATUS_COLORS[entry.name] || '#8884d8'}
                />
              ))}
            </Pie>
            <Tooltip />
          </PieChart>
        </ResponsiveContainer>
      </motion.div>
            </div>
            </div>

        
        
        <div className="h-full w-[45%]  p-8 border-2 border-gray-200 rounded-2xl flex flex-col justify-between">
          
                <div>
                    <h1 className='font-semibold'>Training Status</h1>
                    <p className='font-light text-xs'>Your attendance summary for this month</p>
                </div>

                 <div className=' h-[90%] mt-5  w-full overflow-clip '>
                    <ul className='flex flex-col gap-5 '>

                       {details.training.map((train_detail, idx) => (
  <li key={idx} className='w-full border-2 p-2 px-4 border-gray-200 flex flex-row justify-between items-center rounded-2xl'>
    <div>
      <h4>{train_detail.training_course}</h4>
      <p className={
        train_detail.status === "Completed" ? "text-emerald-500 font-semibold"
        : train_detail.status === "Ongoing" ? "text-yellow-500 font-semibold"
        : "text-red-500 text-sm font-semibold"
      }>
        {train_detail.status}
      </p>
    </div>
    <div>
      {
        train_detail.training_course.toLowerCase().includes("ai") ? (
          <IoLogoDocker className='h-10 w-10 text-purple-500' />
        ) : train_detail.training_course.toLowerCase().includes("devops") ? (
          <FaGears className='h-10 w-10 text-blue-500' />
        ) : train_detail.training_course.toLowerCase().includes("software") ? (
          <GiRobotAntennas className='h-10 w-10 text-green-500' />
        ) : (
          <MdOutlineWeb className='h-10 w-10 text-emerald-500' />
        )
      }
    </div>
  </li>
))}


                       



                       
                     
                    </ul>
                </div>
            </div>
    
    </div>

      {/* for chart and Training end */}


{/* for certificate Started */}

    <div className='h-max-content w-[97%] mt-10 ml-5 border-2 p-8  border-gray-200 rounded-2xl'>
         

         <div className='flex flex-row justify-between items-center'>
                  
                  <div>
                    <div>
                    <h1 className='font-semibold text-2xl'>Certificates </h1>
                    </div>

                    <p className='font-light text-xs'>Manage your professional certifications</p>
                    </div>

                    <div>
                        <button type="button"  onClick={()=>{setIspopped(true)}} className="text-gray-900 hover:text-white border border-gray-800 hover:bg-gray-900 duration-300 focus:ring-4 focus:outline-none focus:ring-gray-300 font-medium rounded-lg text-sm px-2.5 py-2.5 text-center me-1.5 mb-1.5 dark:border-gray-600 dark:text-gray-400 dark:hover:text-white dark:hover:bg-gray-600 dark:focus:ring-gray-800">+ Add Certificate</button>


                          {/* this is the start of the popup dialog */}



                          { 
                           Ispopped && (
                      <div className="fixed inset-0 flex items-center justify-center  bg-opacity-50 z-50">
                        <div className="bg-transparent  p-6 rounded-2xl shadow-2xl w-[500px] max-w-full">
                          <form className="space-y-4" onSubmit={handleSubmit(onSubmit)}>
                      <label className="block text-sm font-medium text-gray-900 ">
                        Certificate Name
                      </label>
                      <input
                        type="text" {...register("Certificate_name" , {required:true})}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                      />

                      <label className="block text-sm font-medium text-gray-900 ">
                        Certification Authority
                      </label>
                      <input
                        type="text" {...register("Certificate_Authority" , {required:true})}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                      />

                      <label className="block text-sm font-medium text-gray-900 ">
                        Course Duration
                      </label>
                      <input
                        type="text" {...register("Course_duration" , {required:true})}
                        className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                      />

                      <div className="flex space-x-4">
                        <div className="flex-1">
                          <label className="block text-sm font-medium ">
                            Start Date
                          </label>
                          <input
                            type="text" {...register("Start_date", {required: true})}
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                          />
                        </div>
                        <div className="flex-1">
                          <label className="block text-sm font-medium text-black ">
                            End Date
                          </label>
                          <input
                            type="text" {...register("End_date" , {required:true}) }
                            className="block w-full p-2 text-gray-900 border border-gray-300 rounded-lg bg-gray-50 text-sm focus:ring-blue-500 focus:border-blue-500 "
                          />
                        </div>
                      </div>

                      <div className="flex justify-end space-x-3 mt-6">
                        <button  onClick={() => setIspopped(false)} className="px-4 py-2 bg-gray-400 text-white rounded-md hover:bg-gray-500 transition"> Cancel</button>
                        <button type="submit" className="px-4 py-2 bg-blue-600 text-white rounded-md hover:bg-blue-700 transition"> Submit </button>
                      </div>
                    </form>
                  </div>
                </div>
                )}
                {/* this is the end of the popup dialog */}

                </div>

              </div>



              <div className=' h-[90%] mt-5  w-full overflow-clip '>
                          <ul className='flex flex-col gap-5 '>

                              {  details.certificates.map((item , index)=>( <li className='w-full border-2 p-5 px-4 border-gray-200 flex flex-row justify-between items-center  rounded-2xl '>
                                  <div key={index}>
                                  <h4>{item.cert_name}</h4>
                                  <p className='text-gray-600 text-sm font-light'>{item.cert_authority}</p>
                                  <p className='text-gray-600 text-xs font-extralight'>Issued: {new Date(item.start_date).toLocaleDateString("en-GB") } • Expires: {new Date(item.end_date).toLocaleDateString("en-GB")}</p>
                                  <p className='text-gray-600 text-xs font-extralight'>Course Duration : {item.course_duration}</p>


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
                        ) )}

                    </ul>
                </div>


         </div>

{/* for certificate end */}
    <div className='border-gray-200 rounded-2xl border-2 mt-8 ml-5 w-[97%] '>
    <WorkHistory work_details = {details.work_experience} />
    </div>

                    </>):<h1>Loading</h1>  }</div>
  )
}


export default Analytics_consultant