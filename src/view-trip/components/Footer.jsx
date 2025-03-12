import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram } from "react-icons/fa";

function Footer() {
  return (
    <div className='my-6 bg-gray-800 p-5'>
      <img src='/logo.svg' className="bg-indigo-300 rounded-xl p-2 ml-20" />
      <div className="flex justify-around border-b-2 border-gray-500 ">


        <h2 className='text-white text-center p-4 w-44 text-2xl mb-10'>Plan your trip with AI Trip Planner</h2>
        <div className='text-white text-center w-40 font-bold text-2xl '>
          <h2>WORK </h2>
          <h2>TRAVEL</h2>
          <h2>SAVE</h2>
          <h2 className='text-red-700'> REPEAT</h2>
        </div>

        <div className="text-white">
          <h2 className="font-semibold">Company</h2>
          <h2>Blog</h2>
          <h2>Privacy Policy</h2>
          <h2>FAQ's</h2>
        </div>
        <div className="text-white">
          <h2 className="font-semibold">Social Share</h2>
          <div className="flex gap-3 mt-2 ml-2"><FaFacebook />
            <FaTwitter />
            <FaInstagram />
          </div>
        </div>
      </div>
      <h2 className='text-gray-300 text-center mt-3 '>@Copyright by AI Trip Planner</h2>
    </div>
  )
}

export default Footer
