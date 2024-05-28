import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#02050a] pt-[4rem] md:pt-[8rem] pb-[1rem]"
    >
      <h2 className="heading">
        My <span className="text-yellow-400">Project</span>
      </h2>
      <div className="w-[80%] pt-[2rem] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[2rem] mb-2">
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-100 relative w-[100%] h-[400px] md:h-[300px]">
          <Image
            src="/images/Sophie-Bluel.webp"
            alt="Projet Sophie Bluel"
            layout="fill"
            className="object-containt"
          />
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-100 relative w-[100%] h-[400px] md:h-[400px]">
          <Image
            src="/images/Kasa.webp"
            alt="Projet Kasa"
            layout="fill"
            className="object-containt"
          />
        </div>
        <div className="transform cursor-pointer hover:-translate-y-6 transition-all duration-100 relative w-[100%] h-[400px] md:h-[400px]">
          <Image
            src="/images/Vieux-grimoire.webp"
            alt="Projet mon Vieux-grimoire"
            layout="fill"
            className="object-containt"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
