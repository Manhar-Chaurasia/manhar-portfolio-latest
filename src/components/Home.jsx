import React from "react";
import Navbar from "./Navbar";
import About from "./About";
import TechStack from "./TechStack";
import Projects from "./Projects";

const Home = () => {
  return (
    <>
      <div className="container mx-auto px-7 md:px-20 mb-20 md:mb-56">
        <div className="flex flex-col-reverse md:flex-row items-center justify-between md:my-28 my-5">
          <div className="left text-2xl lg:text-5xl md:text-3xl font-semibold ">
            <span className="text-xl md:text-xl lg:text-4xl m">Hi, I am</span>
            <br />
            <span className="bg-gradient-to-r from-blue-500 via-pink-700 to-indigo-400 text-transparent bg-clip-text">
              Manhar Chaurasia
            </span>
            <br />
            <span>Full Stack Developer</span>
            <br />
          </div>
          <div className="right">
            <img
              src={process.env.PUBLIC_URL + "/assets/profile-img.png"}
              alt="profile-img"
              className="w-48 lg:w-72 md:w-60 lg:mr-12 mb-5 md:mb-0 rounded-full "
              style={{
                boxShadow:
                  "0px 3px 6px rgba(75, 0, 130, 0.5), 0px -1px 6px rgba(0, 191, 255, 0.5)",
              }}
            />
          </div>
        </div>
      </div>
      <About />
      <TechStack />
      <Projects />
    </>
  );
};

export default Home;
