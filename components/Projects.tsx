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
        <div className="bg-white transform cursor-pointer hover:-translate-y-6 transition-all duration-100 relative w-[100%] h-[300px]">
          <Image
            src="/images/sophie.png"
            alt="Projet Sophie Bluel"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <div className="bg-white transform cursor-pointer hover:-translate-y-6 transition-all duration-100 relative w-[100%] h-[300px]">
          <Image
            src="/images/kasa.png"
            alt="Projet Kasa"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
        <div className="bg-white transform cursor-pointer hover:-translate-y-6 transition-all duration-100 relative w-[100%] h-[300px]">
          <Image
            src="/images/grimoire.png"
            alt="Projet mon Vieux-grimoire"
            fill
            className="object-contain"
            sizes="100vw"
          />
        </div>
      </div>
    </div>
  );
};

export default Projects;
