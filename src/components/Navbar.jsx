import React, { useState } from "react";
import { Link } from "react-router-dom";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { RxHamburgerMenu } from "react-icons/rx";
import { BsTwitterX } from "react-icons/bs";

const Navbar = () => {
  const [toggleMenu, setToggleMenu] = useState(false);
  const logo = "{Manhar}";

  const handleToggle = () => {
    setToggleMenu(!toggleMenu);
  };

  return (
    <>
      <div className="relative div text-neutral-400 font-semibold py-4 container mx-auto px-7 md:px-20">
        <div className="md:flex justify-between items-center">
          <Link to="/">
            <span className="text-lg md:text-2xl font-semibold bg-gradient-to-r from-blue-500 via-pink-700 to-indigo-400 text-transparent bg-clip-text">
              {logo}
            </span>
          </Link>

          <span className="absolute block md:hidden top-6 right-9">
            <RxHamburgerMenu onClick={handleToggle} />
          </span>

          <div
            className={`md:flex lg:space-x-12 md:space-x-8 text-sm md:text-xs lg:text-sm flex-col md:flex-row space-y-6 md:space-y-0 mt-5 md:mt-0 ${
              toggleMenu ? "flex" : "hidden"
            } md:block`}
          >
            <Link to="/">Home</Link>
            <Link to="/about">About</Link>
            <Link to="/techstack">Tech Stack</Link>
            <Link to="/projects">Projects</Link>
            <Link to="/contact">Contact</Link>

            <div
              className={`nav-icons md:flex space-x-2 lg:space-x-4 md:space-x-3 items-center ${
                toggleMenu ? "flex" : "hidden"
              } md:block`}
            >
              <a href="https://github.com/Manhar-Chaurasia/" target="_blank">
                <FaGithub />
              </a>
              <a
                href="https://www.linkedin.com/in/manhar-chaurasia-4193bb227/"
                target="_blank"
              >
                <FaLinkedin />
              </a>
              <a href="#">
                <BsTwitterX />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Navbar;
