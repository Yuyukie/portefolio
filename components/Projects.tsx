import Image from "next/image";
import React from "react";
import Link from "next/link";

const Projects = () => {
  return (
    <div
      id="projects"
      className="bg-[#121212] pt-[4rem] md:pt-[8rem] pb-[1rem]"
    >
      <h2 className="heading">
        Mes <span className="text-yellow-400">Projets</span>
      </h2>
      <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[90%] mx-auto">
        <Link href="/projects/sophie">
          <article className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-200  cursor-pointer">
            <div className="flex flex-col h-[150px] items-center justify-center m-4">
              <Image
                src="/images/sophie.png"
                alt="Sophie Bluel"
                width={500}
                height={500}
                className="object-cover"
              />
            </div>
            <div className="w-[100%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[2rem] h-[200px] xl:h-[308px]">
              <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                Sophie-Bluel
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <p className="text-xs md:text-sm text-wrap text-white">
                    Création de la page web dynamique de Sophie-Bluel avec
                    JavaScript. Dans ce projet, il est demandé de créer une page
                    avec HTML, CSS et JS qui communique avec une API pour
                    récupérer les données afin de les afficher.
                  </p>
                </div>
              </div>
              <div className="mt-[1rem] text-white text-[18px] font font-semibold">
                <ul className="flex flex-wrap justify-center items-center  gap-2">
                  <li className="">HTML</li>
                  <li className="">CSS</li>
                  <li className="">JS</li>
                </ul>
              </div>
            </div>
          </article>
        </Link>

        <Link href="/projects/kasa">
          <article className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-200 cursor-pointer">
            <div className="flex flex-col h-[150px] items-center justify-center m-4">
              <Image
                src="/images/kasa.webp"
                alt="Kasa Immobilier"
                width={500}
                height={375}
                className="object-cover"
              />
            </div>
            <div className="w-[100%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[2rem] h-[200px] xl:h-[308px]">
              <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                Kasa Immobilier
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <p className="text-xs md:text-sm text-wrap text-white">
                    Création du site web de location immobilière avec REACT.
                    Dans ce projet, il est demandé de créer toute la partie
                    front-end du site en utilisant REACT et REACT-ROUTER. Il est
                    aussi demandé de gérer toutes les erreurs possibles lors du
                    changement de pages.
                  </p>
                </div>
              </div>
              <div className="mt-[1rem] text-white text-[18px] font font-semibold">
                <ul className="flex flex-wrap justify-center items-center gap-2">
                  <li className="">React</li>
                  <li className="">React-Router</li>
                  <li className="">JS</li>
                  <li className="">SCSS</li>
                </ul>
              </div>
            </div>
          </article>
        </Link>

        <Link href="/projects/grimoire">
          <article className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-200 cursor-pointer">
            <div className="flex flex-col h-[150px] items-center justify-center m-4">
              <Image
                src="/images/grimoire.webp"
                alt="Mon Vieux Grimoire"
                width={500}
                height={375}
                className="object-cover"
              />
            </div>
            <div className="w-[100%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[2rem] h-[200px] xl:h-[308px]">
              <div className="w-fit px-[2rem] py-[1rem] bg-yellow-400 relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
                Mon Vieux Grimoire
              </div>
              <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4">
                <div className="flex items-center space-x-3">
                  <p className="text-xs md:text-sm text-wrap text-white">
                    Création du backend pour un site qui évalu des livres. Dans
                    ce projet, il est demandé de créer toute la partie Backend
                    du site en utilisant Node.js, Express et MongoDB. Il est
                    aussi demandé de créer un serveur, la base de données et les
                    opérations CRUD pour la gestion des livres et des
                    évaluations.
                  </p>
                </div>
              </div>
              <div className="mt-[1rem] text-white text-[18px] font font-semibold">
                <ul className="flex flex-wrap justify-center items-center gap-2">
                  <li className="">NodeJS</li>
                  <li className="">Express</li>
                  <li className="">MongoDB</li>
                </ul>
              </div>
            </div>
          </article>
        </Link>
      </div>
    </div>
  );
};

export default Projects;
