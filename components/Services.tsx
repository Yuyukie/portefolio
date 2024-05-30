import {
  CodeBracketSquareIcon,
  CommandLineIcon,
  RocketLaunchIcon,
} from "@heroicons/react/20/solid";
import React from "react";

const Services = () => {
  return (
    <div
      id="services"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[5rem]"
    >
      <p className="heading">
        My<span className="text-yellow-400">Services</span>
      </p>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[80%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div
            className="bg-gray-400 hover:scale-105 transform transition-all duration-300 
                          hover:-rotate-6 uppercase font-semibold text-center p-[2rem] h-[100%]"
          >
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h2>
            <p className="text-[15px] text-white font-normal">
              I offer you my services as a Frontend developer. Meticulous and
              rigorous in my work, I can integrate visual models while being
              attentive to details, I can also set up basic functionalities such
              as authentication but also more advanced such as exchanges with an
              API via requests to give an example.
            </p>
          </div>
        </div>
        <div
          className="bg-yellow-400 hover:scale-105 transform transition-all duration-300 
                     uppercase font-semibold text-center p-[2rem] h-[100%]"
        >
          <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
          <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Backend
          </h2>
          <p className="text-[15px] text-white font-normal">
            I offer you my services as a Backend developer. Meticulous and
            rigorous in my work, I can set up a server with Node.js and Express
            and connect it to a database. I can also implement an authentication
            system, data models as well as CRUD operations while ensuring data
            security.
          </p>
        </div>
        <div
          className="bg-green-400 hover:scale-105 transform transition-all duration-300 h-[100%]
                          hover:rotate-6 uppercase font-semibold text-center p-[2rem]"
        >
          <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
          <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Fullstack
          </h2>
          <p className="text-[15px] text-white font-normal">
            With my skills I can undertake projects and complete them in their
            entirety. It is important for me to see the purpose of a project,
            hence my great interest in becoming a meticulous and rigorous
            full-stack developer.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
