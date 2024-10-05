import React from "react";
import { BsTwitterX } from "react-icons/bs";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const Contact = () => {
  const logo = "{Manhar}";
  return (
    <>
      <div className="container mx-auto px-7 md:px-20 w-full h-full text-center text-gray-300 mt-40">
        <span className="text-3xl font-bold flex mb-5">Contact</span>

        <div className="flex flex-col">
          <span className="text-2xl md:text-4xl">
            For any queries please mail:
          </span>
          <a
            href="mailto:manharchaurasia100@gmail.com"
            className="text-sm md:text-2xl mt-4 flex justify-center items-center  bg-gradient-to-r from-blue-500 via-pink-700 to-indigo-400 text-transparent bg-clip-text"
          >
            <span className="ml-2 font-semibold">
              manharchaurasia100@gmail.com
            </span>
          </a>
        </div>

        <hr className="mt-60" />
        <div className="footer flex justify-between items-center mt-2 mb-5">
          <span className="text-sm md:text-xl text-gray-500">{logo}</span>
          <div className="footer-right flex space-x-10 text-xs md:text-sm">
            <span>8447517102</span>
            <span className="md:block hidden">
              manharchaurasia100@gmail.com
            </span>

            <div className="nav-icons flex space-x-2 lg:space-x-4 md:space-x-3 items-center">
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

export default Contact;
