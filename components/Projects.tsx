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
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[90%] mx-auto">
        <article
          className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-300 
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
            <div className=" w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Sophie-Bluel
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <q className="text-xs md:text-sm text-wrap text-white">
                  Creation of a dynamic web page with JavaScript. In this
                  project, it is requested to create with HTML CSS AND JS a page
                  that communicates with an API to retrieve the data it contains
                  in order to display it to the user.
                </q>
              </div>
            </div>
            <div className="mt-[1rem] text-white text-[18px] font font-semibold">
              <ul className="flex flex-wrap justify-center items-center gap-2">
                <li className="">HTML</li>
                <li className="">CSS</li>
                <li className="">JavaScript</li>
              </ul>
            </div>
          </div>
        </article>
        <article className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-300 cursor-pointer">
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
            <div className=" w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Kasa Immobilier
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <p className="text-xs md:text-sm text-wrap text-white">
                  Creation of a real estate rental web application with REACT.
                  In this project, you are asked to create the entire frontend
                  part of the site using REACT and REACT-ROUTER. You also have
                  to manage all possible errors from one page to another
                </p>
              </div>
            </div>
            <div className="mt-[1rem] text-white text-[18px] font font-semibold">
              <ul className="flex flex-wrap justify-center items-center gap-2">
                <li className="">React</li>
                <li className="">React-Router</li>
                <li className="">JavaScript</li>
                <li className="">SCSS</li>
              </ul>
            </div>
          </div>
        </article>
        <article
          className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-300 
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
            <div className=" w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Mon Vieux Grimoire
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
              <div className="flex items-center space-x-3">
                <p className="text-xs md:text-sm text-wrap text-white">
                  Creation of the backend of a book rating site. In this
                  project, it is required to create the entire Backend part of
                  the site using node.js express and MongoDB. You must create
                  the server, the database and the entire CRUD part for managing
                  books and ratings.
                </p>
              </div>
            </div>
            <div className="mt-[1rem] text-white text-[18px] font font-semibold">
              <ul className="flex flex-wrap justify-center items-center gap-2">
                <li className="">NodeJS</li>
                <li className="">Express</li>
                <li className="">MongoDB</li>
                <li className="">CRUD</li>
              </ul>
            </div>
          </div>
        </article>
      </div>
    </div>
  );
};

export default Projects;
