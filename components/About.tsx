import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import { saveAs } from "file-saver";

const About = () => {
  const handleDownloadImage = () => {
    const imageUrl = "/images/cv.pdf";
    const fileName = "CV-Mazars-Benjamin.pdf";
    saveAs(imageUrl, fileName);
  };

  return (
    <div id="about" className="bg-[#141c27] pb-[3rem] pt-[4rem] md:pt-[8rem] ">
      <div className=" grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[3rem] items-center">
        <div>
          <h1 className="text-[20px]  font-bold uppercase text-[#55e6a5] mb-[1rem]">
            ABOUT ME
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white  ">
            A New World without <span className="text-yellow-400">limit</span>{" "}
            start now.
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[100px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-400 w-[80%]">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Porro
              voluptate at magni animi, aspernatur inventore natus soluta
              explicabo, nisi veritatis dicta totam expedita corporis possimus
              culpa quo architecto officiis nihil.
            </p>
          </div>
          <button
            onClick={handleDownloadImage}
            className="px-[2rem] hover:bg-yellow-400 transition-all duration-200 py-[1rem] text-[18px]
                               font-bold uppercase bg-[#55e6a5] text-black flex items-center space-x-2"
          >
            <p>Download CV</p>
            <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
          </button>
        </div>
        <div className="lg:w-[300px]  mx-auto md:mx-0 mt-[2rem] lg:mt-0 lg:h-[300px] w-[300px] h-[300px] relative bg-[#55e6a5]">
          <div className="absolute w-[100%] h-[100%]  bg-black top-[2rem] right-[-2rem] text-white">
            img
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
