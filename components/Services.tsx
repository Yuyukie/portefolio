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
              Je vous propose mes services en tant que développeur Frontend.
              Méticuleux et rigoureux dans mon travail, je peux intégrer des
              maquettes visuelles tout en étant attentif aux détails. Je suis
              également capable de mettre en place des fonctionnalités de base
              telles que le login, mais aussi des fonctionnalités plus avancées
              comme les échanges avec une API via des requêtes, pour ne citer
              que cet exemple.
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
            Je vous propose mes services en tant que développeur Backend.
            Méticuleux et rigoureux dans mon travail, je peux configurer un
            serveur avec Node.js et Express et le connecter à une base de
            données. Je suis également capable de mettre en place un système de
            login, des modèles de données ainsi que des opérations CRUD tout en
            garantissant la sécurité des données.
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
            Grâce à mes compétences, je suis en mesure de prendre en charge des
            projets et de les mener à terme dans leur totalité. Il est essentiel
            pour moi de comprendre pleinement les objectif du projet, ce qui
            nourrit mon fort désir de devenir un développeur full-stack à la
            fois méticuleux et rigoureux.
          </p>
        </div>
      </div>
    </div>
  );
};

export default Services;
