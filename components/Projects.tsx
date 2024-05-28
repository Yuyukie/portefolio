import { UserCircleIcon } from "@heroicons/react/20/solid";
import Image from "next/image";
import React from "react";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[1rem]"
    >
      <h2 className="heading">
        My <span className="text-yellow-400">Project</span>
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[95%] mx-auto">
        <article
          className="border-2 border-gray-400 bg-yellow-400 hover:scale-105 transform transition-all duration-300 
                          hover:-rotate-6 cursor-pointer"
        >
          <div className="flex flex-col h-[150px] items-center justify-center m-4">
            <Image
              src="/images/sophie.png"
              alt=""
              width={500}
              height={500}
              className="object-cover"
            />
          </div>
          <div className="w-[100%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[2rem]">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Mon Vieux Grimoire
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <q className="text-xs md:text-sm text-wrap text-white">
                  Développez le back-end d un site de notation de livres en
                  utilisant Node.js, Express, et MongoDB, en mettant en place un
                  serveur sécurisé avec des fonctionnalités CRUD et d
                  authentification.
                </q>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font font-semibold">
              <ul className="flex flex-wrap justify-center items-center gap-2">
                <li className="">NodeJS</li>
                <li className="">Express</li>
                <li className="">MongoDB</li>
                <li className="">CRUD</li>
              </ul>
            </p>
          </div>
        </article>
        <article className="border-2 border-gray-400 bg-yellow-400 hover:scale-105 transform transition-all duration-300 cursor-pointer">
          <div className="flex flex-col h-[150px] items-center justify-center m-4">
            <Image
              src="/images/kasa.png"
              alt=""
              width={500}
              height={375}
              className="object-cover"
            />
          </div>
          <div className="w-[100%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[2rem]">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Mon Vieux Grimoire
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <q className="text-xs md:text-sm text-wrap text-white">
                  Développez le back-end d un site de notation de livres en
                  utilisant Node.js, Express, et MongoDB, en mettant en place un
                  serveur sécurisé avec des fonctionnalités CRUD et d
                  authentification.
                </q>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font font-semibold">
              <ul className="flex flex-wrap justify-center items-center gap-2">
                <li className="">NodeJS</li>
                <li className="">Express</li>
                <li className="">MongoDB</li>
                <li className="">CRUD</li>
              </ul>
            </p>
          </div>
        </article>
        <article
          className="border-2 border-gray-400 bg-yellow-400 hover:scale-105 transform transition-all duration-300 
                          hover:rotate-6 cursor-pointer"
        >
          <div className="flex flex-col h-[150px] items-center justify-center m-4 ">
            <Image
              src="/images/grimoire.png"
              alt=""
              width={500}
              height={375}
              className="object-cover"
            />
          </div>
          <div className="w-[100%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[2rem]">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Mon Vieux Grimoire
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <q className="text-xs md:text-sm text-wrap text-white">
                  Développez le back-end d un site de notation de livres en
                  utilisant Node.js, Express, et MongoDB, en mettant en place un
                  serveur sécurisé avec des fonctionnalités CRUD et d
                  authentification.
                </q>
              </div>
            </div>
            <p className="mt-[1rem] text-white text-[18px] font font-semibold">
              <ul className="flex flex-wrap justify-center items-center gap-2">
                <li className="">NodeJS</li>
                <li className="">Express</li>
                <li className="">MongoDB</li>
                <li className="">CRUD</li>
              </ul>
            </p>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
