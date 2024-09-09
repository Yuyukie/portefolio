import Image from "next/image";
import Link from "next/link";
import React from "react";

const Blog = () => {
  return (
    <div id="blog" className="pt-[4rem] md:pt-[8rem] pb-[4rem] bg-[#141c27]">
      <h2 className="heading">
        BL<span className="text-yellow-400">OG</span>
      </h2>
      <div className=" grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] gap-[3rem] w-[80%] mx-auto items-center ">
        <div className="w-[90%] m-auto hover:scale-105 transform transition-all duration-200">
          <div className="w-[100%] relative h-[200px] sm:h-[350px] xl:h-[300px] 2xl:h-[400px] md: bg-gray-400 rounded-3xl">
            <Link
              href="https://www.youtube.com/user/grafikarttv"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/grafikart.webp"
                alt="Logo de Grafikart"
                fill
                className="p-4"
              />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] rounded-xl relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Grafikart
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 md:h-[180px]">
              <p className="text-xs md:text-sm text-wrap text-white ">
                Pour moi, il fait partie des créateurs de contenu les plus
                pédagogue sur le web. Ses contenus sont régulièrement mis à
                jour, ce qui nous permet de rester informés des évolutions
                technologiques tout en apprenant à les utiliser.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] m-auto hover:scale-105 transform transition-all duration-200">
          <div className="w-[100%] relative h-[200px] sm:h-[350px] xl:h-[300px] 2xl:h-[400px] bg-gray-400 rounded-3xl">
            <Link
              href="https://x.com/reactjs"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/react.webp"
                alt="Logo de React"
                fill
                className=" object-contain p-8"
              />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] rounded-xl relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              X Twitter React
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 md:h-[180px] ">
              <p className="text-xs md:text-sm text-wrap text-white">
                React est ma technologie principale pour le front-end. Son
                fonctionnement et sa structure me fascinent. Il est important
                pour moi de rester informé de son évolution grâce à son réseau
                social de référence.
              </p>
            </div>
          </div>
        </div>
        <div className="w-[90%] m-auto hover:scale-105 transform transition-all duration-200">
          <div className="w-[100%] relative h-[200px] sm:h-[350px] xl:h-[300px] 2xl:h-[400px] bg-gray-400 rounded-3xl">
            <Link
              href="https://www.developpez.com/"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src="/images/dvp.webp"
                alt="Logo du site Devellopez"
                fill
                className="p-8"
              />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] rounded-xl relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Devellopez
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 md:h-[180px]">
              <p className="text-xs md:text-sm text-wrap text-white">
                Un des sites offrant une grande quantité avec des ressources,
                des articles, des critiques et des livres concernant le monde du
                web et ses dérivés. Cela permet de découvrir de nouvelles
                possibilités.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
