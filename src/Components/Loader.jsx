import React from 'react'

const Loader = () => {
  return (
    <div className='bg-[#0B0B0B] h-[100vh] w-[100vw] flex items-center justify-center'>
        <div className="overflow-hidden h-[7.35vh] w-[50vw] uppercase text-[1.96875vw] text-white rounded-full outline outline-white hover:outline-orange-400 transition-all duration-500 ease-in-out outline-1 items-center flex  whitespace-nowrap">
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[2.1vh] w-[2.1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
            <p>Stuff is loading</p>
          </div>
        </div>
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[2.1vh] w-[2.1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
            <p>Stuff is loading</p>
          </div>
        </div>
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[2.1vh] w-[2.1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
            <p>Stuff is loading</p>
          </div>
        </div>
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[2.1vh] w-[2.1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
            <p>Stuff is loading</p>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Loader