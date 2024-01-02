import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = ({ projectsRef }) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".word-1", {
      xPercent: 100,
      scrollTrigger: {
        trigger: ".vertical-container",
        start: `bottom 92%`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.from(".word-2", {
      xPercent: -100,
      scrollTrigger: {
        trigger: ".vertical-container",
        start: `bottom 92%`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".word-2", {
      x: (window.innerWidth * 2 * 102.5) / 100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `bottom -100%`,
        end: `+=${window.innerWidth * 3} bottom`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".word-1", {
      x: (window.innerWidth * 2 * 97.5) / 100,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `bottom -100%`,
        end: `+=${window.innerWidth * 3} bottom`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".works-1 , .works-2", {
      x: window.innerWidth * 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".works-1 ", {
      y: -window.innerHeight * 4,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
   
    gsap.to(".works-2 ", {
      y: -window.innerHeight * 2,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-3",
        start: `+=${window.innerWidth * 2.04} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
  }, []);

  return (
    <div
      ref={projectsRef}
      className="h-[100vh] w-[300vw] flex justify-start items-center vertical-container  "
    >
      <div className=" bg-inherit flex justify-center items-center panel w-[100vw]  project-1  flex-col z-50 text-container">
        <p className="text-[6vw] uppercase leading-none word-1 font-semibold opacity-70 filter invert">
          Selected
        </p>
        <p className="text-[6vw] uppercase leading-none word-2 text-white font-thin font-serif">
          works
        </p>
      </div>
      <div className="w-[100vw] h-[100vh] panel project-2 relative">
        <div className="h-[30vh] works-1 flex items-center absolute top-[105vh] left-[-30vw] w-[12vw] rounded-lg ">
        <img src="moviescope.jpg" alt="projects" className="project-img object-cover h-full w-full rounded-lg object-center" />
        </div>
        <div className="h-[30vh] works-1 absolute top-[110vh] left-[-80vw] w-[12vw] rounded-lg flex ">
        <img src="dalle.jpg" alt="projects" className="project-img object-cover h-full w-full rounded-lg object-center" />
        </div>

        <div className="h-[35vh] works-1 absolute top-[165vh] left-[-55vw] w-[14vw] rounded-lg">
        <img src="photography.jpg" alt="projects" className="project-img object-cover h-full w-full rounded-lg object-center" />
        </div>
      </div>
      <div className="w-[100vw] h-[100vh] panel project-3 relative">
        <div className="h-[30vh] works-2 absolute top-[120vh] left-[-180vw] w-[12vw] rounded-lg">
        <img src="developer.jpg" alt="projects" className="project-img object-cover h-full w-full rounded-lg object-center" />
        </div>
        <div className="h-[25vh] works-2 absolute top-[115vh] left-[-130vw] w-[10vw] rounded-lg ">
        <img src="chatapp.jpg" alt="projects" className="project-img object-cover h-full w-full rounded-lg object-center" />
        </div>
        {/* <div className="h-[35vh] works-2 absolute top-[165vh] left-[-155vw] w-[14vw] rounded-lg bg-red-50"></div> */}
      </div>
    </div>
  );
};

export default Projects;
