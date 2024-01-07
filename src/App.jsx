import { useEffect, useRef, useState } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Header from "./Components/Header";
import Lenis from "@studio-freight/lenis";
import ConfirmOverlay from "./Components/ConfirmOverlay";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef(null);
  const aboutRef = useRef(null);
  const projectsRef = useRef(null);
  const contactRef = useRef(null);
  const [showOverlay , setShowOverlay] = useState(false)

  //content
  const tagline = 'Available for freelance work';
const name = 'Mohana krishnan';
const email = 'sample@gmail.com';
const heroLine1 = 'independent';
const heroLine2 = 'full-stack';
const heroLine3 = 'web developer';
const gitHub = 'https://github.com';
const linkedIn = 'https://www.linkedin.com';
const twitter = 'https://twitter.com';
const project1 = ['Chat App', 'https://example.com/', null, 'pic1.png'];
const project2 = ['Photographer Portfolio', 'https://example.com/', null, 'pic2.png'];
const project3 = ['Image generation platform', 'https://example.com/', null, 'pic3.png'];
const project4 = ['AI snake', 'https://example.com', null, 'pic4.png'];
const project5 = ['Personal Portfolio', 'https://example.com/', null, 'pic5.png'];
const project6 = ['Movie finder', 'https://example.com/', null, 'pic6.png'];
const aboutLine1= "Hey! I'm Mohan";
const aboutLine2= 'a nineteen years old';
const aboutLine3= 'full-stack developer. Currently';
const aboutLine4= 'based in Chennai, India';
const aboutPara1= 'As a full-stack developer, I predominantly work with React and Node.js. I utilize Redux to manage the state of my applications, GSAP for animations, and MongoDB as my preferred database solution. This combination allows me to efficiently build and deliver dynamic, responsive, and data-driven web applications.';
const aboutPara2= 'A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them to ensure a smooth and remarkable navigation.';
const aboutPara3= 'On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices of every tool I use.';
const aboutPara4= 'I develop your new website by listening to your needs and desires and by giving you my point of view in order to get the best for your project.';
const aboutHead2= 'INTERACTION';
const aboutHead3= 'PERFORMANCE';
const aboutHead4= 'TEAMWORK';
const aboutImage= [null, 'pic7.png'];
  //content

  useEffect(() => {
    const tl = gsap.timeline();
    tl.to(".loading-slide-2", {
      left: "50vw",
      width: "50vw",
      duration: 0.75,
      ease: Power4.easeIn,
    })
      .to(".loading-slide-2", {
        left: "-10vw",
        width: "10vw",
        duration: 0.75,
        ease: Power4.easeOut,
      })
      .to(
        ".loading-slide-1",
        {
          left: "-50vw",
          duration: 0.75,
          ease: Power4.easeIn,
        },
        0
      )
      .to(
        ".loading-slide-1",
        {
          left: "-110vw",
          duration: 0.75,
          ease: Power4.easeOut,
        },
        0.75
      )
      .from(
        ".hero-line-2",
        {
          x: "19.5vw",
          duration: 0.75,
          ease: Power4.easein,
        },
        0.75
      )
      .from(
        ".hero-line-3",
        {
          x: "-19.5vw",
          duration: 0.75,
          ease: Power4.easein,
        },
        0.75
      )
      .from(
        ".hero-line-4",
        {
          x: "-150%",
          duration: 0.75,
          ease: Power4.easein,
        },
        0.75
      );
  }, []);
  useEffect(() => {
    const lenis = new Lenis();
    function raf(time) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);
    let sections = gsap.utils.toArray(".panel");

    gsap.to(sections, {
      x:
        -(
          window.innerWidth * (sections.length - 1) +
          (window.innerWidth * 4) / 100
        ) - 1,
      ease: "none",
      scrollTrigger: {
        trigger: ".containerr",
        pin: true,
        // markers: true,
        scrub: 1,
        end: () =>
          "+=" +
          (document.querySelector(".containerr").offsetWidth -
            window.innerWidth),
      },
    });
  }, []);

  function scroller(element) {
    console.log(element.current, element.current.offsetLeft);
    window.scrollTo({ top: element.current.offsetLeft, behavior: "smooth" });
  }
  
  return (
    <> 
      
      <section className="overflow-hidden main-wrapper">
        <Header
          scroller={scroller}
          heroRef={heroRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          tagline={tagline}
          name={name}
          email={email}
          setShowOverlay={setShowOverlay}
        />
        <div className=" bg-[#0B0B0B] flex flex-row containerr w-[704vw]">
          <Hero heroRef={heroRef} 
            heroLine1={heroLine1}
            heroLine2={heroLine2}
            heroLine3={heroLine3}
            gitHub={gitHub}
            linkedIn={linkedIn}
            twitter={twitter}
            email={email}
            name={name}
          />
          <Projects projectsRef={projectsRef} 
          project1={project1}
          project2={project2}
          project3={project3}
          project4={project4}
          project5={project5}
          project6={project6}
          
          />
          <About
            aboutRef={aboutRef}
            contactRef={contactRef}
            scroller={scroller}
            heroRef={heroRef}
            aboutLine1={aboutLine1}
            aboutLine2={aboutLine2}
            aboutLine3={aboutLine3}
            aboutLine4={aboutLine4}
            aboutPara1={aboutPara1} 
            aboutPara2={aboutPara2} 
            aboutPara3={aboutPara3} 
            aboutPara4={aboutPara4} 
            aboutHead2={aboutHead2} 
            aboutHead3={aboutHead3} 
            aboutHead4={aboutHead4} 
            aboutImage={aboutImage}
            gitHub={gitHub}
            linkedIn={linkedIn}
            twitter={twitter}
            email={email}
            name={name}
          />
        </div>
      </section>
      <div className="bg-[#0B0B0B] loading-slide-1 w-[100vw] h-[100vh] fixed left-0 top-0"></div>
      <div className="bg-orange-400 loading-slide-2 w-[10vw] h-[100vh] fixed left-[100vw] top-0"></div>
    </>
  );
};

export default App;
