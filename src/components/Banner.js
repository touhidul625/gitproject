import React from 'react'

function Banner() {
  return (
    <div><div className="max-w-7xl px-4 py-2 mx-auto sm:px-6 lg:px-8">
        <div className="max-w-lg mx-auto">
          <h1 className="text-2xl font-bold text-center text-indigo-600 sm:text-3xl">
            Get started today
          </h1>
          <form className="p-8 mt-1 mb-0 space-y-4 rounded-lg shadow-2xl">
            <p className="text-lg font-medium">
              Please provide below information to connect
            </p>

            <div>
              <label className="text-md font-medium">Name</label>

              <div className="relative mt-1">
                <input
                 
                  type="text"
                  id="name"
                  className="w-full p-4 pr-12 text-md border-gray-200 rounded-lg shadow-md"
                  placeholder="Enter your name"
                />
              </div>
            </div>
            <div>
              <label className="text-sm font-medium">Email</label>

              <div className="relative mt-1">
                <input
                 
                  type="email"
                  id="email"
                  className="w-full p-4 pr-12 text-md border-gray-200 rounded-lg shadow-md"
                  placeholder="Enter email"
                />
              </div>
            </div>
            <div>
              <label className="text-md font-medium">Address</label>

              <div className="relative mt-1">
                <input
                 
                  type="text"
                  id="birthday"
                  className="w-full p-4 pr-12 text-md border-gray-200 rounded-lg shadow-md"
                  placeholder="Enter you Address"
                />
              </div>
            </div>
            <div>
              <label className="text-md font-medium">Profession</label>

              <div className="relative mt-1">
                <input
                 
                  type="text"
                  id="profession"
                  className="w-full p-4 pr-12 text-md border-gray-200 rounded-lg shadow-md"
                  placeholder="Enter your profession"
                />
              </div>
            </div>

            <button
              
              type="submit"
              className="block w-full px-5 py-3 text-sm font-medium text-white bg-indigo-600 rounded-lg active:bg-indigo-800"
            >
              Submit
            </button>
          </form>
        </div>
      </div>
</div>
  )
}

export default Banner