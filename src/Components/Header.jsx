import { useRef } from "react";

const Header = ({scroller , heroRef , aboutRef , contactRef , projectsRef , tagline , setTagline , name , setName , email , setEmail , showOverlay , setShowOverlay}) => {

  return (
    <div
      id="header"
      className="fixed top-0 left-0 h-[7vh] w-[100vw] z-50  text-white flex bg-[#0B0B0B] justify-between px-5 items-center outline-white outline-1 outline text-[1.09375vw] "
    >
      <input onChange={(e) => setName(e.target.value)} value={name} className=" w-[20vw] uppercase bg-[#0B0B0B] " />
      <div className="overflow-hidden h-[3.5vh] w-[17vw] text-[0.9375vw] rounded-full outline outline-white hover:outline-orange-400 transition-all duration-500 ease-in-out outline-1 items-center flex  whitespace-nowrap">
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[1vh] w-[1vh] rounded-full mr-2 bg-orange-400"></div>
            <input type="text" onChange={(e) => setTagline(e.target.value)} value={tagline} className="bg-[#0B0B0B] w-40 text-white" />
          </div>
        </div>
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[1vh] w-[1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
            {/* <input type="text" onChange={(e) => setTagline(e.target.value)} value={tagline} className="bg-[#0B0B0B]  text-white" /> */}
          </div>
        </div>
        {/* <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[1vh] w-[1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
            <input type="text" onChange={(e) => setTagline(e.target.value)} value={tagline} className="bg-[#0B0B0B]  text-white" />
          </div>
        </div> */}
      </div>
      <div className="flex flex-row justify-between uppercase w-[25vw] ">
      <p onClick={() => setShowOverlay(true)}>Host</p>
        <p onClick={() => scroller(projectsRef)}>projects</p>
        <p onClick={() => scroller(aboutRef)}>about</p>
        <p onClick={() => scroller(contactRef)}>contact</p>
      </div>
    </div>
  );
};

export default Header;
