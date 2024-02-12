import React from "react";
import { IoIosLink } from "react-icons/io";
import { FaGithub } from "react-icons/fa";

const ProjectCard = ({
  img,
  title,
  desc,
  techStack,
  livePreview,
  repoLink,
}) => {
  return (
    <>
      <div className="mx-5 xl:mx-10 card-outer w-60 xl:w-64 bg-[#363636] rounded-xl my-7">
        <img src={img} className="rounded-t-xl" alt="project-img" />
        <div className="p-4">
          <p className="mb-3 font-semibold text-xl text-[#]">{title}</p>
          <p className="text-xs">{desc}</p>
          <p className="text-xs my-3">
            <span className="font-bold">Tech Stack:</span> {techStack}
          </p>
          <div className="flex justify-between">
            <a href={livePreview} target="_blank" className="flex space-x-1">
              <IoIosLink />
              <span className="text-xs underline underline-offset-2">
                Live Preview
              </span>
            </a>

            {repoLink && (
              <a
                href={repoLink}
                target="_blank"
                className="flex space-x-1"
              >
                <FaGithub />
                <span className="text-xs underline underline-offset-2">
                  View Code
                </span>
              </a>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default ProjectCard;
