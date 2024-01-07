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
  const [tagline, setTagLine] = useState(`Available for freelance work`);
  const [name, setName] = useState(`Mohana krishnan`);
  const [email, setEmail] = useState(`sample@gmail.com`);
  const [heroLine1 , setHeroLine1] = useState(`independent`)
  const [heroLine2 , setHeroLine2] = useState(`full-stack`)
  const [heroLine3 , setHeroLine3] = useState(`web developer`)
  const [gitHub , setGitHub] = useState(`https://github.com`)
  const [linkedIn , setLinkedIn] = useState(`https://www.linkedin.com`)
  const [twitter , setTwitter] = useState(`https://twitter.com`)
  const [project1 , setProject1] = useState([`Chat App`,`https://example.com/`,null,'pic1.jpg'])
  const [project2 , setProject2] = useState([`Photographer Portfolio`,`https://example.com/`,null,'pic2.jpg'])
  const [project3 , setProject3] = useState([`Image generation platform`,`https://example.com/`,null,'pic3.jpg'])
  const [project4 , setProject4] = useState([`AI snake`,`https://example.com`,null,'pic4.jpg'])
  const [project5 , setProject5] = useState([`Personal Portfolio`,`https://example.com/`,null,'pic5.jpg'])
  const [project6 , setProject6] = useState([`Movie finder`,`https://example.com/`,null,'pic6.jpg'])
  const [aboutLine1 , setAboutLine1] = useState(`Hey! i'm Mohan`)
  const [aboutLine2 , setAboutLine2] = useState(`a nineteen years old`)
  const [aboutLine3 , setAboutLine3] = useState(`ful-stack developer. Currently`)
  const [aboutLine4 , setAboutLine4] = useState(`based in Chennai, India`)
  const [aboutPara1 , setAboutPara1] = useState(`As a full-stack developer, I predominantly work with React and Node.js. I utilize Redux to manage the state of my applications, GSAP for animations, and MongoDB as my preferred database solution. This combination allows me to efficiently build and deliver dynamic, responsive, and data-driven web applications.`)
  const [aboutPara2 , setAboutPara2] = useState(`A pleasant experience for your users goes through the animations and interactions of your project, I spend time to imagine and design them to ensure a smooth and remarkable navigation.`)
  const [aboutPara3 , setAboutPara3] = useState(`On the web, every second counts, I pay particular attention to the performance of your project by respecting the best practices of every tool I use.`)
  const [aboutPara4 , setAboutPara4] = useState(`I develop your new website by listening to your needs and desires and by giving you my point of view in order to get the best for your project.`)
  const [aboutHead2 , setAboutHead2] = useState(`INTERACTION`)
  const [aboutHead3 , setAboutHead3] = useState(`PERFORMANCE`)
  const [aboutHead4 , setAboutHead4] = useState(`TEAMWORK`)
  const [aboutImage, setAboutImage] = useState([null,'pic7.jpg'])

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
  function host() {
    
    const formData = new FormData();
    formData.append("variant", "Developer-Portfolio-1")
    formData.append("emailAddress", email);
    formData.append("navName", name);
    formData.append("file", project1[2]); // Assuming pic1Source is an array [URL, File]
    formData.append("file", project2[2]);
    formData.append("file", project3[2]);
    formData.append("file", project4[2]);
    formData.append("file", project5[2]);
    formData.append("file", project6[2]);
    formData.append("file", aboutImage[0]);
    formData.append("tagline", tagline);
    formData.append("heroLine1", heroLine1);
    formData.append("heroLine2", heroLine2);
    formData.append("heroLine3", heroLine3);
    formData.append("linkedInLink", linkedIn);
    formData.append("gitHubLink", gitHub);
    formData.append("twitterLink", twitter);
    formData.append("project1Title", project1[0]);
    formData.append("project2Title", project2[0]);
    formData.append("project3Title", project3[0]);
    formData.append("project4Title", project4[0]);
    formData.append("project5Title", project5[0]);
    formData.append("project6Title", project6[0]);
    formData.append("project1Link", project1[1]);
    formData.append("project2Link", project2[1]);
    formData.append("project3Link", project3[1]);
    formData.append("project4Link", project4[1]);
    formData.append("project5Link", project5[1]);
    formData.append("project6Link", project6[1]);
    formData.append("aboutLine1", aboutLine1);
    formData.append("aboutLine2", aboutLine2);
    formData.append("aboutLine3", aboutLine3);
    formData.append("aboutLine4", aboutLine4);
    formData.append("aboutPara1", aboutPara1);
    formData.append("aboutPara2", aboutPara2);
    formData.append("aboutPara3", aboutPara3);
    formData.append("aboutPara4", aboutPara4);
    formData.append("aboutHead2", aboutHead2);
    formData.append("aboutHead3", aboutHead3);
    formData.append("aboutHead4", aboutHead4);

    fetch("http://localhost:3001/upload", {
      method: "POST",
      body: formData,
    })
      
      .catch((error) => console.error("Error:", error));
  }
  return (
    <> 
      {showOverlay && <ConfirmOverlay setShowOverlay={setShowOverlay} host={host}/>}
      <section className="overflow-hidden main-wrapper">
        <Header
          scroller={scroller}
          heroRef={heroRef}
          aboutRef={aboutRef}
          contactRef={contactRef}
          projectsRef={projectsRef}
          tagline={tagline}
          setTagline={setTagLine}
          name={name}
          setName={setName}
          email={email}
          setEmail={setEmail}
          setShowOverlay={setShowOverlay}
        />
        <div className=" bg-[#0B0B0B] flex flex-row containerr w-[704vw]">
          <Hero heroRef={heroRef} 
            heroLine1={heroLine1}
            heroLine2={heroLine2}
            heroLine3={heroLine3}
            setHeroLine1={setHeroLine1}
            setHeroLine2={setHeroLine2}
            setHeroLine3={setHeroLine3}
            gitHub={gitHub}
            linkedIn={linkedIn}
            twitter={twitter}
            email={email}
            setGitHub={setGitHub}
            setEmail={setEmail}
            setLinkedIn={setLinkedIn}
            setTwitter={setTwitter}
            name={name}
          />
          <Projects projectsRef={projectsRef} 
          project1={project1}
          setProject1={setProject1}
          project2={project2}
          setProject2={setProject2}
          project3={project3}
          setProject3={setProject3}
          project4={project4}
          setProject4={setProject4}
          project5={project5}
          setProject5={setProject5}
          project6={project6}
          setProject6={setProject6}
          
          />
          <About
            aboutRef={aboutRef}
            contactRef={contactRef}
            scroller={scroller}
            heroRef={heroRef}
            aboutLine1={aboutLine1}
            setAboutLine1={setAboutLine1}
            aboutLine2={aboutLine2}
            setAboutLine2={setAboutLine2}
            aboutLine3={aboutLine3}
            setAboutLine3={setAboutLine3}
            aboutLine4={aboutLine4}
            setAboutLine4={setAboutLine4}
            aboutPara1={aboutPara1} 
            setAboutPara1={setAboutPara1}
            aboutPara2={aboutPara2} 
            setAboutPara2={setAboutPara2}
            aboutPara3={aboutPara3} 
            setAboutPara3={setAboutPara3}
            aboutPara4={aboutPara4} 
            setAboutPara4={setAboutPara4}
            aboutHead2={aboutHead2} 
            setAboutHead2={setAboutHead2}
            aboutHead3={aboutHead3} 
            setAboutHead3={setAboutHead3}
            aboutHead4={aboutHead4} 
            setAboutHead4={setAboutHead4}
            aboutImage={aboutImage}
            setAboutImage={setAboutImage}
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
