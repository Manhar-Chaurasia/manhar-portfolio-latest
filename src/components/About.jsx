import React from "react";
import { IoCalendarOutline } from "react-icons/io5";

const About = () => {
  return (
    <>
      <div className="container mx-auto px-7 md:px-20 text-gray-300 mb-24">
        <div className="about-section my-14 md:w-7/12">
          <span className="text-3xl font-bold flex mb-5">About Me</span>
          <p className="text-sm mb-14">
            I've completed my Bachelor's of Computer
            Application from IITM New Delhi, Affiliated with Guru Gobind Singh
            Indraprastha University. I am always ready to face new challenges
            and to learn new things.
          </p>

          <span className="text-3xl font-bold flex mb-5">Education</span>
          <div className="flex justify-between items-center">
            <div className="edu-left">
              <p className="">Bachelor's in Computer Application</p>
              <p className="text-[0.70rem] text-neutral-400 mt-2">
                Institue of Innovation in Technology & Management
              </p>
            </div>
            <div className="edu-right">
              <span className="text-xs px-2 bg-[#363636] rounded-full">
                Regular
              </span>
              <div className="flex items-center justify-between space-x-1 text-sm">
                <span className="hidden md:block mt-1">
                  <IoCalendarOutline />
                </span>
                <p className="text-[0.70rem] mt-2 text-neutral-400">
                  Dec 2021 - June 2024
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 bg-neutral-700 border-0 h-px my-7" />

          <span className="text-3xl font-bold flex mb-5">Work Experience</span>
          <div className="flex justify-between items-center">
            <div className="edu-left">
              <p className="text-sm md:text-base">
                Full Stack Developer (Full time)
              </p>
              <p className="text-[0.5rem] md:text-[0.70rem] text-neutral-400 mt-2">
                Grorapid Labs
              </p>
            </div>
            <div className="edu-right">
              <span className="text-xs text-white px-2 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 rounded-full">
                Onsite
              </span>
              <div className="flex items-center justify-between space-x-1 text-sm">
                <span className="hidden md:block mt-2">
                  <IoCalendarOutline />
                </span>
                <p className="text-[0.6rem] md:text-[0.70rem] mt-2 text-neutral-400">
                  Jul 2024 - Oct 2024
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 bg-neutral-700 border-0 h-px my-7" />

          <div className="flex justify-between items-center">
            <div className="edu-left">
              <p className="text-sm md:text-base">
                Frontend Developer Internship
              </p>
              <p className="text-[0.5rem] md:text-[0.70rem] text-neutral-400 mt-2">
                Grorapid Labs
              </p>
            </div>
            <div className="edu-right">
              <span className="text-xs text-white px-2 bg-gradient-to-r from-blue-700 via-purple-700 to-pink-500 rounded-full">
                Onsite
              </span>
              <div className="flex items-center justify-between space-x-1 text-sm">
                <span className="hidden md:block mt-2">
                  <IoCalendarOutline />
                </span>
                <p className="text-[0.6rem] md:text-[0.70rem] mt-2 text-neutral-400">
                  Sep 2023 - Oct 2023
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 bg-neutral-700 border-0 h-px my-7" />

          <div className="flex justify-between items-center">
            <div className="edu-left">
              <p className="text-sm md:text-base">Web Developer Internship</p>
              <p className="text-[0.5rem] md:text-[0.70rem] text-neutral-400 mt-2">
                College
              </p>
            </div>
            <div className="edu-right">
              <span className="text-xs px-2 bg-[#363636] rounded-full">
                Hybrid
              </span>
              <div className="flex items-center justify-between space-x-1 text-sm">
                <span className="hidden md:block mt-1">
                  <IoCalendarOutline />
                </span>
                <p className="text-[0.6rem] md:text-[0.70rem] mt-2 text-neutral-400">
                  Jul 2023 - Aug 2023
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 bg-neutral-700 border-0 h-px my-8" />

          <div className="flex justify-between items-center">
            <div className="edu-left">
              <p className="text-sm md:text-base">Web Developer Internship</p>
              <p className="text-[0.5rem] md:text-[0.70rem] text-neutral-400 mt-2">
                CodSoft
              </p>
            </div>
            <div className="edu-right">
              <span className="text-xs px-2 bg-[#363636] rounded-full">
                Virtual
              </span>
              <div className="flex items-center justify-between space-x-1 text-sm">
                <span className="hidden md:block mt-2">
                  <IoCalendarOutline />
                </span>
                <p className="text-[0.6rem] md:text-[0.70rem] mt-2 text-neutral-400">
                  Aug 2023 - Sep 2023
                </p>
              </div>
            </div>
          </div>
          <hr className="mt-5 bg-neutral-700 border-0 h-px my-8" />
        </div>
      </div>
    </>
  );
};

export default About;
