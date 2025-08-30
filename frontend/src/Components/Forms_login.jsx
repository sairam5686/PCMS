import React from 'react';
import { Link, useNavigate } from 'react-router';
import { set, useForm } from "react-hook-form"
import { useState } from 'react';


const Forms_login = () => {
  const navigate = useNavigate();

  const [Creadentials, setCreadentials] = useState(null);

 const {
    register,
    handleSubmit,
    watch,
    formState: { errors },
  } = useForm()



const login_requester_user  = async () => {
    const response =   await fetch("http://localhost:3000/login_creadentials",{
      method:"POST",
       headers: { "Content-Type": "application/json" },
    body: JSON.stringify(Creadentials),
    })

  const  datagram = await response.json();

    if(response.ok){
      localStorage.setItem("users" , JSON.stringify(datagram));
      navigate("/dashboard");
    }else{
      alert(response.message)
    }

}

 


  const onSubmit = (data) => {
    setCreadentials(data);

    login_requester_user();
  }


  return (
    <div className="border border-gray-100 shadow w-[360px] p-8 rounded-md bg-white">
      <div className="flex justify-between text-sm">
        <div className="flex items-center gap-2">
          <div className="h-3 w-3 bg-blue-600" />
          <p className="font-bold pb-[2px] text-blue-600 font-semibold">HEXAWARE</p>
        </div>
        
      
      </div>
      <div className="mt-10">
        <h1 className="text-2xl font-semibold text-balance">
          Welcome to our Consultant Management System
        </h1>
      </div>
      <p className=" mt-4 text-gray-600  ">
        Monitor every employee  
      </p>
       <form  onSubmit={handleSubmit(onSubmit)} >
      <div className="mt-6">
        <input placeholder="enter the username" type="text"   {...register("login_user")}  className="p-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300" />
        <input placeholder="Password" type="password"   {...register("login_password")} className="p-2 px-3 mt-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300" />
      </div>
     
      <button type="submit" className="bg-blue-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105">
        Get Started
      </button>
    </form>

    </div>
   
  );
}

export default Forms_login;
