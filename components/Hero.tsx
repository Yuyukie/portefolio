import React from "react";
import TextEffect from "./TextEffect";
import Image from "next/image";

const Hero = () => {
  return (
    <div
      id="home"
      className=" bg-[url('/images/banner.webp')] mt-[12vh] bg-cover bg-center"
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
            Passionate, curious, rigorous, meticulous and determined are the
            words that best define me. Developing is a real pleasure, which
            makes this work a pleasure itself.
          </p>
          <div className="mt-[2rem] flex-col space-y-6 sm:space-y-0 flex items-center sm:space-x-6"></div>
        </div>
        <div className=" flex items-center justify-center rounded-full m-auto">
          <Image
            src="/images/avatar.webp"
            alt="Image de profil Mazars Benjamin"
            width={250}
            height={250}
            className="  rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Hero;
