import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowTurnDown } from "@fortawesome/free-solid-svg-icons";

const About = ({aboutRef , contactRef , scroller , heroRef}) => {
  gsap.registerPlugin(ScrollTrigger);
  useEffect(() => {
    gsap.from(".name span", {
      y: "-27vh",
      opacity: 0,
      stagger: 0.1,
      scrollTrigger: {
        trigger: ".about-3",
        start: `+=${window.innerWidth * 6} bottom`,
        // markers: true,
      },
    });
    ScrollTrigger.create({
      trigger: ".vertical",
      start: `+=${window.innerWidth * 3.5} bottom`,
      end: `+=${window.innerWidth}`,
      // markers: true,
      onUpdate: (self) => {
        // gsap.to(".about-image",{
        //   scale: 1 + 0.5 * self.progress
        // })
        gsap.to(".vertical-text-3", {
          yPercent: 100 * self.progress,
        });
      },
    });
    gsap.from(".about-line-3",{
      xPercent: 15 ,
      scrollTrigger:{
        trigger: ".vertical",
        start: `+=${window.innerWidth * 4} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1 ,
        // markers: true,
      }
    })
    gsap.to(".about-image",{
      scale: 1.15 ,
      scrollTrigger:{
        trigger: ".vertical",
        start: `+=${window.innerWidth * 4} bottom`,
        end: `+=${window.innerWidth}`,
        scrub: 1 ,
        // markers: true,
      }
    })
  });
  return (
    <div ref={aboutRef} className="w-[300vw] h-[100vh] about flex flex-row containerrr">
      <div className="h-[100vh] w-[110vw] panel border-l border-white text-white flex items-center justify-start panel1">
        <div  className="w-[4vw] border-r flex justify-center border-white">
          <div className=" vertical-text-3 text-[1.8vw] h-[100vh] overflow-visible flex text-nowrap gap-2 uppercase">
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
            <p>&nbsp;&nbsp;&nbsp;know more about me.</p>
          </div>
        </div>
        <div className="w-[70vw] ">
          <p className="text-[6vw] leading-none flex flex-col italic text-nowrap">
            <span>
              &nbsp;&nbsp;Hey! I&apos;m{" "}
              <span className="font-serif">Mohan</span>,
            </span>
            <span>&nbsp;&nbsp;&nbsp;a nineteen years old</span>{" "}
            <span className="about-line-3">&nbsp;full-stack developer. Currently</span>{" "}
            <span>
              &nbsp;&nbsp;&nbsp;based in{" "}
              <span className="font-serif">Chennai, India</span>
            </span>
          </p>
        </div>
        <div className="w-[36vw] h-[100vh] flex">
          <div className="w-[35vw] h-[100vh] flex flex-col justify-center overflow-hidden items-center">
          <div className="h-[7vh]"></div>
          <img className=" object-cover object-center about-image h-[93vh] w-[35vw] -z-50 " src="./chembarambakkam lake.jpg" alt="chembarambakkam lake viewpoint" />

          </div>
          <div className="bg-orange-400 h-[100vh] w-[1vw]"></div>
        </div>
      </div>

      <div className="h-[100vh] w-[90vw] panel border-r border-white flex justify-center items-center text-white panel2">
        <div className="flex flex-col items-start w-[80vw]">
          <div className="h-[50vh] flex items-center justify-center">
            <p className="w-[40vw] text-[1.25vw]">
              {" "}
              As a full-stack developer, I predominantly work with React and
              Node.js. I utilize Redux to manage the state of my applications,
              GSAP for animations, and MongoDB as my preferred database
              solution. This combination allows me to efficiently build and
              deliver dynamic, responsive, and data-driven web applications.{" "}
            </p>{" "}
          </div>
          <div className="flex justify-between w-[60vw]">
            <div className="w-[15vw] h-[40vh]">
              <p className="mb-4">
                <span className=" text-orange-400 font-serif text-[1.25vw]">
                  01
                </span>
                <span className="ml-3 text-[1.25vw]">INTERACTION</span>
              </p>
              <p className="text-[1.09375vw]">
                A pleasant experience for your users goes through the animations
                and interactions of your project, I spend time to imagine and
                design them to ensure a smooth and remarkable navigation.
              </p>
            </div>
            <div className="w-[15vw] h-[40vh]">
              <p className="mb-4">
                <span className=" text-orange-400 font-serif text-[1.25vw]">
                  02
                </span>
                <span className="ml-3 text-[1.25vw]">PERFORMANCE</span>
              </p>
              <p className="text-[1.09375vw]">
                On the web, every second counts, I pay particular attention to
                the performance of your project by respecting the best practices
                of every tool I use.
              </p>
            </div>
            <div className="w-[15vw] h-[40vh]">
              <p className="mb-4">
                <span className=" text-orange-400 font-serif text-[1.25vw]">
                  03
                </span>
                <span className="ml-3 text-[1.25vw]">TEAMWORK</span>
              </p>
              <p className="text-[1.09375vw]">
                I develop your new website by listening to your needs and
                desires and by giving you my point of view in order to get the
                best for your project.
              </p>
            </div>
          </div>
        </div>
      </div>
      <div ref={contactRef} className="h-[100vh] w-[100vw] panel about-3 text-white ">
        <div className="mt-[10vh] h-[90vh] flex flex-col">
          <div className="h-[25vh] flex justify-center items-center w-[100vw]">
            <p className="text-[13vw] text-nowrap flex gap-0 font-semibold name">
              <span>M</span>
              <span>o</span>
              <span>h</span>
              <span>a</span>
              <span>n</span>
              <span>a</span>
              <span>K</span>
              <span>r</span>
              <span>i</span>
              <span>s</span>
              <span>h</span>
              <span>n</span>
              <span>a</span>
              <span>n</span>
            </p>
          </div>
          <div className="h-[17vh] items-center w-[100vw] flex justify-between">
            <p className="mx-[1.6vw] font-sans uppercase text-[3.45vw] my-auto leading-none flex flex-col">
              <span>want to discuss</span>
              <span>a new project?</span>
            </p>
            <p onClick={() => scroller(heroRef)} className="mx-[1.6vw] font-sans uppercase text-[3.45vw] my-auto leading-none arrow hover:scale-150 rotate-90 duration-500">
              <FontAwesomeIcon icon={faArrowTurnDown} />
            </p>
          </div>
          <div className="h-[17vh] flex justify-start items-center">
            <div className="mx-[1.6vw] outline flex items-center justify-center px-10 py-1 hover:bg-orange-400 duration-500 text-orange-400 hover:text-[#0B0B0B] text-[2vw] italic font-serif my-auto outline-orange-400 rounded-full">
              <a className="" href={`mailto:sample@gmail.com`}>
              send me an e-mail
              </a>
            </div>
          </div>
          <div className="h-[31vh] flex items-end justify-between text-[1.09375vw] uppercase">
            <div className="mx-[1.6vw] mb-[1.6vw]">
              <p className="flex flex-col uppercase">
                <span className="font-bold">Thanks for your visit!</span>
                <span>you can check out my networks</span>
                <span>to follow my new adventures!</span>
              </p>
            </div>
            <div className="flex w-[25vw] justify-between mx-[1.6vw] mb-[1.6vw]">
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.instagram.com"
              >
                instagram
              </a>
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.linkedin.com"
              >
                LinkedIn
              </a>
              <a
                className=""
                target="_blank"
                rel="noopener noreferrer"
                href="https://www.twitter.com"
              >
                Twitter
              </a>
              <a className="" href={`mailto:sample@gmail.com`}>
                email
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
