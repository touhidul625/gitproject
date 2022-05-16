import React from 'react'
import logo from '../assets/images/1.png'

function Header() {
  return (
    <div><header className="max-w-7xl mx-auto bg-indigo-200 flex items-center justify-between p-5 sticky top-0 z-50">
        <img
          className="w-44 object-contain cursor-pointer"
          src={logo}
        />

        <div className="hidden md:inline-flex items-center space-x-2 font-semibold">
         
            <h3 className="hover:bg-indigo-400 transform active:bg-indigo-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
              Home
              </h3>
               <h3 className="hover:bg-indigo-400 transform active:bg-indigo-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
              Touhid
            </h3>
          

          
            <h3 className="hover:bg-indigo-400 transform active:bg-indigo-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
              User Data
            </h3>
         

          <h3 className="hover:bg-indigo-400 transform active:bg-indigo-600 duration-200 ease-in-out px-6 cursor-pointer py-2 rounded-md">
            Summary
          </h3>
        </div>
        <div className="flex items-center space-x-2 text-Zinc-900">
          <h3
            className="border px-3 py-2 rounded-md border-indigo-600
        hover:bg-indigo-400 transform active:bg-indigo-600 duration-200 ease-in-out cursor-pointer"
          >
            Get Started
          </h3>
        </div>
      </header></div>
  )
}

export default Header