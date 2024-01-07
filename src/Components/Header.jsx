import { useRef } from "react";

const Header = ({scroller , heroRef , aboutRef , contactRef , projectsRef , tagline , setTagline , name , setName , email , setEmail , showOverlay , setShowOverlay}) => {

  return (
    <div
      id="header"
      className="fixed top-0 left-0 h-[7vh] w-[100vw] z-50  text-white flex bg-[#0B0B0B] justify-between px-5 items-center outline-white outline-1 outline text-[1.09375vw] "
    >
      <p onClick={() => scroller(heroRef)} className=" w-[20vw] uppercase bg-[#0B0B0B]">{name}</p>
      <div className="overflow-hidden h-[3.5vh] w-[17vw] text-[0.9375vw] rounded-full outline outline-white hover:outline-orange-400 transition-all duration-500 ease-in-out outline-1 items-center flex  whitespace-nowrap">
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[1vh] w-[1vh] rounded-full mr-2 bg-orange-400"></div>
           <p>{tagline} </p>
          </div>
        </div>
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[1vh] w-[1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
           <p>{tagline} </p>
          </div>
        </div>
        <div className="slider inline-block">
          <div className="mr-4 flex items-center">
            <div className="h-[1vh] w-[1vh] rounded-full mr-2 bg-orange-400"></div>{" "}
           <p>{tagline} </p>
          </div>
        </div>
      </div>
      <div className="flex flex-row justify-between uppercase w-[20vw] ">
        <p onClick={() => scroller(projectsRef)}>projects</p>
        <p onClick={() => scroller(aboutRef)}>about</p>
        <p onClick={() => scroller(contactRef)}>contact</p>
      </div>
    </div>
  );
};

export default Header;
