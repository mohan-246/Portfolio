import { useEffect , useRef } from "react";
import gsap from "gsap";
import { Power4 } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Hero from "./Components/Hero";
import Projects from "./Components/Projects";
import About from "./Components/About";
import Header from "./Components/Header";
import Lenis from "@studio-freight/lenis";

const App = () => {
  gsap.registerPlugin(ScrollTrigger);
  const heroRef = useRef(null)
  const aboutRef = useRef(null)
  const projectsRef = useRef(null)
  const contactRef = useRef(null)
  useEffect(() => {
    const tl = gsap.timeline();
    tl.to('.loading-slide-2',{
      left: '50vw',
      width: '50vw',
      duration: 0.75,
      ease: Power4.easeIn,
    })
    .to('.loading-slide-2',{
      left: '-10vw',
      width: '10vw',
      duration: 0.75,
      ease: Power4.easeOut,
    })
    .to('.loading-slide-1',{
      left: '-50vw',
      duration: 0.75,
      ease: Power4.easeIn,
    },0)
    .to('.loading-slide-1',{
      left: '-110vw',
      duration: 0.75,
      ease: Power4.easeOut,
    },0.75)
    .from(".hero-line-2",{
      x:'19.5vw',
      duration: 0.75,
      ease: Power4.easein
    },0.75)
    .from(".hero-line-3",{
      x:'-19.5vw',
      duration: 0.75,
      ease: Power4.easein
    },0.75)
    .from(".hero-line-4",{
      x:'-150%',
      duration: 0.75,
      ease: Power4.easein
    },0.75)

  },[])
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
  
  function scroller(element){
    console.log(element.current , element.current.offsetLeft)
    window.scrollTo({ top: element.current.offsetLeft, behavior: 'smooth' }); 
  }
  return (
    <>
      <section className="overflow-hidden main-wrapper">
      <Header scroller={scroller} heroRef={heroRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
      <div className=" bg-[#0B0B0B] flex flex-row containerr w-[704vw]">
        <Hero heroRef={heroRef}/>
        <Projects projectsRef={projectsRef} />
        <About aboutRef={aboutRef} contactRef={contactRef} scroller={scroller} heroRef={heroRef} />
      </div>
    </section>
    <div className="bg-[#0B0B0B] loading-slide-1 w-[100vw] h-[100vh] fixed left-0 top-0"></div>
    <div className="bg-orange-400 loading-slide-2 w-[10vw] h-[100vh] fixed left-[100vw] top-0"></div>
    </>
    
  );
};

export default App;
