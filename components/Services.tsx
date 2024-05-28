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
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 w-[90%] mx-auto items-center gap-[3rem] mt-[4rem] text-white">
        <div>
          <div
            className="bg-gray-400 hover:scale-110 transform transition-all duration-300 
                          hover:-rotate-6 uppercase font-semibold text-center p-[2rem]"
          >
            <CodeBracketSquareIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
            <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
              Frontend
            </h2>
            <p className="text-[15px] text-white font-normal">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
              neque, perferendis, blanditiis recusandae ipsum iusto rerum omnis
            </p>
          </div>
        </div>
        <div
          className="bg-yellow-400 hover:scale-110 transform transition-all duration-300 
                     uppercase font-semibold text-center p-[2rem]"
        >
          <RocketLaunchIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
          <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Backend
          </h2>
          <p className="text-[15px] text-white font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            neque, perferendis, blanditiis recusandae ipsum iusto rerum omnis
          </p>
        </div>
        <div
          className="bg-green-400 hover:scale-110 transform transition-all duration-300 
                          hover:rotate-6 uppercase font-semibold text-center p-[2rem]"
        >
          <CommandLineIcon className="w-[6rem] h-[6rem] mx-auto text-white" />
          <h2 className="text-[20px] md:text-[30px] mt-[1.5rem] mb-[1.5rem]">
            Fullstack
          </h2>
          <p className="text-[15px] text-white font-normal">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Autem
            neque, perferendis, blanditiis recusandae ipsum iusto rerum omnis
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
