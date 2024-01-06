import { useEffect,useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRightLong } from "@fortawesome/free-solid-svg-icons";
// import * as THREE from 'three';

const Hero = ({ heroRef }) => {
  gsap.registerPlugin(ScrollTrigger);
  // const particlesRef = useRef(null);
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
          <p className="flex flex-col mt-[5vh]">
            <span className="uppercase text-[6.5vw] font-semibold leading-none text-white hero-line-1">
              &nbsp;&nbsp;&nbsp; independent
            </span>
            <span className="uppercase text-[6.5vw] font-semibold leading-none text-white hero-line-2">
              full-stack
            </span>
            <span className="uppercase text-[6.5vw] font-semibold leading-none text-white hero-line-3">
              &nbsp;&nbsp;&nbsp; web developer
            </span>
          </p>
          <p className="ml-[42vw] hero-line-4">
            <span className="text-[3.5vmin]">Welcome to my <span className="font-serif italic">Portfolio</span>&nbsp;^_^</span>
          </p>
        </div>
        <div className="flex h-[15vh] justify-between w-[100vw] px-[1.3vw] pb-[1.3vw]">
          <div className="flex w-[25vw] mt-[8vh] self-baseline justify-between text-[1.09375vw] text-white uppercase">
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
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023 Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023 Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023 Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
        </div>
        <div className="vertical vertical-text-2 flex text-nowrap gap-2 ">
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
          <p className=" text-orange-400 font-serif italic">
            &nbsp;&nbsp;&nbsp;2023&nbsp;Portfolio
          </p>
          <p>&nbsp;&nbsp;&nbsp;Mohana&nbsp;krishnan</p>
        </div>
      </div>
    </section>
  );
};

export default Hero;
