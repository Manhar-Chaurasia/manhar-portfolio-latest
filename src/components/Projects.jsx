import React from "react";
import { projectsData } from "./ProjectsData/projectsData";
import ProjectCard from "./ProjectCard";

const Projects = () => {
  return (
    <>
      <div className="container mx-auto px-7 md:px-20 mb-24 text-gray-300">
        <span className="text-3xl font-bold flex mb-2 md:mb-5">Projects</span>
        <div className=" flex flex-wrap justify-center">
          {projectsData.map((item) => {
            return (
              <div className="outer" key={item.id}>
                <ProjectCard
                  img={item.img}
                  title={item.title}
                  desc={item.desc}
                  techStack={item.techStack}
                  livePreview={item.livePreview}
                  repoLink={item.repoLink}
                />
              </div>
            );
          })}
        </div>
      </div>
    </>
  );
};

export default Projects;
