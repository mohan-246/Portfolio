import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Projects = ({ projectsRef }) => {
  gsap.registerPlugin(ScrollTrigger);
  const project1 = "Chat App",project2 = 'Photographer Portfolio',project3 = "Image generation platform",project4 = "AI snake",project5 = 'Personal Portfolio',project6 = 'Movie finder';
  const project1Link = "https://chat-frontend-n5np.onrender.com/",project2Link = 'https://jayanth-kpv-portfolio-1.onrender.com/',project3Link = "https://dall-e-mk5l.onrender.com/",project4Link = "https://github.com/mohan-246/snake_ai",project5Link = 'https://mohanakrishnang.onrender.com/',project6Link = 'https://moviescope.onrender.com/';
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
    // gsap.to(".works-1 ", {
    //   y: -window.innerHeight * 4,
    //   ease: "linear",
    //   scrollTrigger: {
    //     trigger: ".project-2",
    //     start: `+=${window.innerWidth * 1.54} bottom`,
    //     end: `+=${window.innerWidth * 2}`,
    //     scrub: 1,
    //     // markers: true,
    //   },
    // });
    gsap.to(".work-pic-1 ", {
      y: -window.innerHeight * 4 - 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-2 ", {
      y: -window.innerHeight * 4 ,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-3 ", {
      y: -window.innerHeight * 4 - 300,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-2",
        start: `+=${window.innerWidth * 1.54} bottom`,
        end: `+=${window.innerWidth * 2}`,
        scrub: 1,
        // markers: true,
      },
    });
    // gsap.to(".works-2 ", {
    //   y: -window.innerHeight * 2,
    //   ease: "linear",
    //   scrollTrigger: {
    //     trigger: ".project-3",
    //     start: `+=${window.innerWidth * 2.04} bottom`,
    //     end: `+=${window.innerWidth}`,
    //     scrub: 1,
    //     // markers: true,
    //   },
    // });
    gsap.to(".work-pic-4 ", {
      y: -window.innerHeight * 2 - 400,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-3",
        start: `+=${window.innerWidth * 2.04} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-5 ", {
      y: -window.innerHeight * 2 - 200,
      ease: "linear",
      scrollTrigger: {
        trigger: ".project-3",
        start: `+=${window.innerWidth * 2.04} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1,
        // markers: true,
      },
    });
    gsap.to(".work-pic-6 ", {
      y: -window.innerHeight * 2 ,
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
  const openSite = (site) => {
    window.open(site, '_blank');
  };
  return (
    <div
      ref={projectsRef}
      className="h-[100vh] w-[300vw] flex justify-start items-center vertical-container  "
    >
      <div className=" bg-transparent flex justify-center items-center panel w-[100vw]  project-1  flex-col  text-container">
        <p className="text-[6vw] uppercase leading-none word-1 font-semibold text-white">
          Selected
        </p>
        <p className="text-[6vw] uppercase leading-none word-2 text-white font-thin font-serif">
          works
        </p>
      </div>
      <div className="w-[100vw] h-[100vh] panel project-2 relative text-white">
        <div className=" works-1 flex absolute top-[105vh] left-[-30vw] rounded-lg work-pic-1 flex-col gap-3 font-serif italic text-sm" onClick={() => openSite(project1Link)} >
        <p className=" -translate-x-2">{project1}</p>
          <img
            src="chatapp.jpg"
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>
        <div className=" works-1 absolute top-[110vh] left-[-80vw]  rounded-lg flex work-pic-2 flex-col gap-3 font-serif italic text-sm" onClick={() => openSite(project2Link)} >
        <p className=" -translate-x-2">{project2}</p>
          <img
            src="photography.jpg"
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>

        <div className=" works-1 absolute top-[165vh] left-[-55vw]  rounded-lg flex work-pic-3 flex-col gap-3 font-serif italic text-sm" onClick={() => openSite(project3Link)} >
        <p className=" -translate-x-2">{project3}</p>
          <img
            src="dalle.jpg"
            alt="projects"
            className="project-img object-cover h-[35vh] w-[14vw] rounded-lg object-center"
          />
        </div>
      </div>
      <div className="w-[100vw] h-[100vh] panel project-3 relative text-white">
        
        <div className=" works-2 absolute top-[115vh] left-[-130vw]  rounded-lg work-pic-4 flex-col flex gap-3 font-serif italic text-sm" onClick={() => openSite(project4Link)} >
        <p className=" -translate-x-2">{project4}</p>
          {" "}
          <img
            src="snake.jpg"
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>
        <div className=" works-2 absolute top-[120vh] left-[-180vw] rounded-lg work-pic-5 flex-col flex gap-3 font-serif italic text-sm" onClick={() => openSite(project5Link)} >
        <p className=" -translate-x-2">{project5}</p>
          <img
            src="developer.jpg"
            alt="projects"
            className="project-img object-cover h-[30vh] w-[12vw] rounded-lg object-center"
          />
        </div>
        <div className=" works-2 absolute top-[165vh] left-[-155vw] rounded-lg work-pic-6 flex-col flex gap-3 font-serif italic text-sm" onClick={() => openSite(project6Link)} >
        <p className=" -translate-x-2">{project6}</p>
          <img
            src="moviescope.jpg"
            alt="projects"
            className="project-img object-cover h-[35vh] w-[14vw] rounded-lg object-center"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
