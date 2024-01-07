import { useEffect, useState } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";

const Hero = ({
  heroRef,
  heroLine1,
  heroLine2,
  heroLine3,
  setHeroLine1,
  setHeroLine2,
  setHeroLine3,
  gitHub,
  linkedIn,
  email,
  twitter,
  setGitHub,
  setEmail,
  setLinkedIn,
  setTwitter,
  name
}) => {
  gsap.registerPlugin(ScrollTrigger);
 
  useEffect(() => {
    ScrollTrigger.create({
      trigger: ".vertical",
      start: "bottom bottom",
      end: `+=${window.innerWidth} bottom`,
      //   markers: true,
      onUpdate: (self) => {
        gsap.to(".vertical-text-1", {
          yPercent: 100 * self.progress,
        });
        gsap.to(".vertical-text-2", {
          yPercent: -100 * self.progress,
        });
      },
    });
  }, []);

  return (
    <section
      ref={heroRef}
      className="h-[100vh] w-[104vw] flex panel relative text-white "
    >
      <div className="w-[100vw] flex flex-col ">
        <div className="w-[100vw] h-[7vh]"></div>
        <div className="w-[100vw] h-[78vh] flex items-center flex-col justify-center">
          <div className="flex flex-col mt-[5vh]">
            <p className="uppercase text-[6.5vw] font-semibold leading-none text-white hero-line-1"
              >&nbsp;&nbsp;&nbsp;&nbsp;{heroLine1}</p>
            
            <p className="uppercase text-[6.5vw] font-semibold leading-none text-white hero-line-2"
              >{heroLine2}</p>
            
            <p className="uppercase text-[6.5vw] font-semibold leading-none text-white hero-line-3"
              >&nbsp;&nbsp;&nbsp;&nbsp;{heroLine3}</p>
            
          </div>
          <p className="ml-[42vw] hero-line-4">
            <span className="text-[3.5vmin]">
              Welcome to my <span className="font-serif italic">Portfolio</span>
              &nbsp;^_^
            </span>
          </p>
        </div>
        <div className="flex h-[15vh] justify-between w-[100vw] px-[1.3vw] pb-[1.3vw]">
          <div className="flex min-w-[25vw] w-auto mt-[8vh] self-baseline justify-between text-[1.09375vw] text-white uppercase">
            <a  className=""
                target="_blank"
                rel="noopener noreferrer"
                href={gitHub} >GitHub</a>
            <a  className=""
                target="_blank"
                rel="noopener noreferrer"
                href={linkedIn} >LinkedIn</a>
            <a  className=""
                target="_blank"
                rel="noopener noreferrer"
                href={twitter} >Twitter</a>
            <a   className=""
                target="_blank"
                rel="noopener noreferrer"
                href={`mailto:${email}`}>email</a>
          </div>
          <div className="w-[19vw]  mt-[8vh] ">
            <div className="float-ed flex justify-evenly items-center">
              <p className="text-[1.09375vw] text-white text-center align-middle  w-[15vw]">
                scroll to begin your journey
              </p>
              <p className="pl-2  w-[4vw]">
                <FontAwesomeIcon
                  className="arrow-right"
                  icon={faArrowRightLong}
                />
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between  w-[4vw] text-[1.1vw] border-x border-white ">
        <div className="vertical vertical-text-1 flex text-nowrap gap-2">
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024 Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024 Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024 Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
        </div>
        <div className="vertical vertical-text-2 flex text-nowrap gap-2 ">
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2024&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;{name}</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
