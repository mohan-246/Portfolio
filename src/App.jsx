import { useEffect , useRef } from "react";
import gsap from "gsap";
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
    <section className="overflow-hidden">
      <Header scroller={scroller} heroRef={heroRef} aboutRef={aboutRef} contactRef={contactRef} projectsRef={projectsRef} />
      <div className=" bg-[#0B0B0B] flex flex-row containerr w-[704vw]">
        <Hero heroRef={heroRef}/>
        <Projects projectsRef={projectsRef} />
        <About aboutRef={aboutRef} contactRef={contactRef} scroller={scroller} heroRef={heroRef} />
      </div>
    </section>
  );
};

export default App;
