import React from "react";
import TextEffect from "./TextEffect";
import { ArrowDownTrayIcon } from "@heroicons/react/20/solid";

const Hero = () => {
  return (
    <div
      id="home"
      className=" bg-[url('/images/banner.jpg')] mt-[12vh] bg-cover bg-center"
    >
      <div className=" w-[80%] grid-cols-1 mx-auto grid lg:grid-cols-2 gap-[3rem] h-[100%] items-center">
        <div>
          <h1 className="text-[40px] md:text-[40px] text-white font-bold text-center">
            Hello, I am
            <span className="text-yellow-400"> Mazars Benjamin</span>
          </h1>
          <div className="flex items-center justify-center">
            <TextEffect />
          </div>
          <p className="mt-[2rem] text=[18px] text-slate-400">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
            fugiat unde deleniti deserunt quos quae corporis nostrum, voluptatem
            fuga eum ipsum earum autem, quaerat magnam perspiciatis repudiandae
            accusamus. Nulla, rem.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 flex items-center sm:space-x-6"></div>
        </div>
        <div className="w-[300px] h-[300px] bg-[#55e6a5] relative mb-2 lg:flex items-center lg:justify-center rounded-full m-auto"></div>
      </div>
    </div>
  );
};

export default Hero;
