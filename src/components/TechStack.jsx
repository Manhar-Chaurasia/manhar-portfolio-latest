import React from "react";

const TechStack = () => {
  return (
    <>
      <div className="container mx-auto px-7 md:px-20 my-14 text-gray-300 mb-24">
        <span className="text-3xl font-bold flex mb-8 md:mb-14">My Tech Stack</span>
        <div className="stacks text-sm grid grid-cols-3 md:grid-cols-5 gap-x-10 gap-y-12">
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/html-logo.png"}
              className=""
              alt="html-logo"
            />
            <span className="text-[0.7rem]">HTML 5</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/css-logo.png"}
              className=""
              alt="css-logo"
            />
            <span className="text-[0.7rem]">CSS 3</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/js-logo.png"}
              className=""
              alt="js-logo"
            />
            <span className="text-[0.7rem]">JavaScript</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/react-logo.png"}
              className=""
              alt="react-logo"
            />
            <span className="text-[0.7rem]">ReactJs</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/redux-logo.png"}
              className=""
              alt="redux-logo"
            />
            <span className="text-[0.7rem]">Redux/Redux Toolkit</span>
          </div>

          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/bootstrap-logo.png"}
              className=""
              alt="bootstrap-logo"
            />
            <span className="text-[0.7rem]">Bootstrap</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/tailwind-logo.png"}
              className=""
              alt="tailwind-logo"
            />
            <span className="text-[0.7rem]">Tailwind CSS</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/sass-logo.png"}
              className=""
              alt="sass-logo"
            />
            <span className="text-[0.7rem]">Sass/Scss</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/nodejs-logo.png"}
              className=""
              alt="github-logo"
            />
            <span className="text-[0.7rem]">NodeJs</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/mongodb-logo.png"}
              className=""
              alt="github-logo"
            />
            <span className="text-[0.7rem]">MongoDB</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/git-logo.png"}
              className=""
              alt="git-logo"
            />
            <span className="text-[0.7rem]">Git</span>
          </div>
          <div className="flex flex-col space-y-2 items-center w-10 md:w-20">
            <img
              src={process.env.PUBLIC_URL + "/assets/github-logo.png"}
              className=""
              alt="github-logo"
            />
            <span className="text-[0.7rem]">Github</span>
          </div>
        </div>
      </div>
    </>
  );
};

export default TechStack;
