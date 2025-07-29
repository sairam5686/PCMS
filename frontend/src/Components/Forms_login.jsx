import React from 'react';
import { Link } from 'react-router';

const Forms_login = () => {
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
      <div className="mt-6">
        <input placeholder="Email" type="text" className="p-2 px-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300" />
        <input placeholder="Password" type="password" className="p-2 px-3 mt-3 border-b-[2px] focus:border-blue-400 w-full outline-none bg-white transition duration-300" />
      </div>
      <div className="mt-4 flex items-center">
        <input className="h-3 w-3 border-gray-300 focus:ring-blue-500 text-blue-600" type="checkbox" id="terms" />
        <label className="ml-2 text-sm text-gray-600" htmlFor="terms">
          I agree to the
          <a className="text-blue-600 hover:underline" href="#">Terms and Conditions</a>
        </label>
      </div>

  <Link to={'/dashboard'}>
      <button type="submit" className="bg-blue-600 text-white text-sm h-10 w-[130px] rounded-md font-semibold mt-5 shadow-md hover:bg-blue-700 transition duration-300 hover:scale-105">
        Get Started
      </button>
  </Link>
    </div>
  );
}

export default Forms_login;
