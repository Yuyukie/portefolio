import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";
import React from "react";
import { saveAs } from "file-saver";
import Image from "next/image";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const About = () => {
  const handleDownloadImage = () => {
    const imageUrl = "/images/cv.pdf";
    const fileName = "CV-Mazars-Benjamin.pdf";
    saveAs(imageUrl, fileName);
  };

  return (
    <div
      id="about"
      className="bg-[#141c27] pb-[3rem] pt-[4rem] md:pt-[8rem] flex"
    >
      <div className="grid grid-cols-1 md:grid-cols-2 w-[80%] mx-auto gap-[100px] xl:gap-[16rem] items-center">
        <div className="flex flex-col items-center md:items-start">
          <h1 className="text-[20px] font-bold uppercase text-[#55e6a5] mb-[1rem]">
            À propos de moi
          </h1>
          <h2 className="text-[25px] md:text-[35px] lg:text-[45px] md:leading-[3rem] leading-[2rem] capitalize mb-[3rem] font-bold text-white">
            Un nouveau monde sans aucune{" "}
            <span className="text-yellow-400">limite</span> commence maintenant
          </h2>
          <div className="mb-[3rem] flex items-center md:space-x-10">
            <span className="w-[50px] hidden md:block h-[5px] bg-slate-400 rounded-sm"></span>
            <p className="text-[19px] text-slate-400 w-[100%] text-center">
              Les pieds sur terre, mais la tête dans les nuages. C’est ma vision
              du monde et de la vie aujourd’hui. Après une reconversion forcée,
              j’ai choisi de m’orienter vers un univers qui me passionne depuis
              mon plus jeune âge : le monde numérique, qui permet de repousser
              les limites et d’accomplir de grandes choses avec peu de moyens.
            </p>
          </div>
          <div className="flex justify-center gap-4 w-[100%]">
            <div className="relative group">
              <button
                onClick={handleDownloadImage}
                className="w-[50px] h-[50px] flex justify-center items-center space-x-2 bg-[#55e6a5] text-black font-bold uppercase rounded-full hover:bg-yellow-400 transition-all duration-200"
              >
                <ArrowDownTrayIcon className="w-[1.6rem] h-[1.7rem] text-black" />
              </button>
              <span className="absolute bottom-[110%] w-[35px] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                CV
              </span>
            </div>
            <div className="relative group">
              <a
                href="https://github.com/Yuyukie"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] flex justify-center items-center bg-[#55e6a5] text-black font-bold uppercase rounded-full hover:bg-yellow-400 transition-all duration-200"
              >
                <FaGithub className="w-[1.6rem] h-[1.7rem] text-black" />
              </a>
              <span className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                GitHub
              </span>
            </div>
            <div className="relative group">
              <a
                href="www.linkedin.com/in/benjamin-mazars-emploie-alternance-apprentissage-developpeur-toulouse-2024-cdi"
                target="_blank"
                rel="noopener noreferrer"
                className="w-[50px] h-[50px] flex justify-center items-center bg-[#55e6a5] text-black font-bold uppercase rounded-full hover:bg-yellow-400 transition-all duration-200"
              >
                <FaLinkedin className="w-[1.6rem] h-[1.7rem] text-black" />
              </a>
              <span className="absolute bottom-[110%] left-1/2 transform -translate-x-1/2 bg-black text-white text-sm py-1 px-2 rounded opacity-0 group-hover:opacity-100 transition-opacity duration-200">
                LinkedIn
              </span>
            </div>
          </div>
        </div>
        <div className="hidden md:block lg:w-[400px] mx-auto md:mx-0 lg:mt-0 w-[300px] h-[300px] relative bg-[#55e6a5]">
          <div className="absolute w-[100%] h-[100%] top-[2rem] right-[2rem] text-white">
            <Image
              src="/images/avatarmontagne.webp"
              fill
              alt="Image d'un homme sur un montagne représentant la tirade : avoir les pieds sur terre mais la tete dans les nuages"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
