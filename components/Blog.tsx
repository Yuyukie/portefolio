import { UserCircleIcon } from "@heroicons/react/20/solid";
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
        <div className="w-[100%] m-auto">
          <div className="w-[100%] relative h-[400px]  bg-gray-400 rounded-3xl">
            <Link href="https://www.youtube.com/user/grafikarttv">
              <Image src="/images/grafikart.png" alt="" fill />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Grafikart
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 "></div>
            <p className="mt-[1rem] text-white text-[18px] font font-semibold ">
              For me, he is one of the most educational content creators on the
              web. Its content is regularly updated which allows us to stay
              abreast of technological developments while learning how to use
              them.
            </p>
          </div>
        </div>
        <div className="w-[100%] m-auto">
          <div className="w-[100%] relative h-[400px] bg-gray-400 rounded-3xl">
            <Link href="https://x.com/reactjs">
              <Image src="/images/react.png" alt="" fill className="p-8" />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              X Twitter React
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 "></div>
            <p className="mt-[1rem] text-white text-[18px] font font-semibold">
              This is my main technology for the frontend. Its functioning and
              structure fascinate me. it is important for me to stay informed
              about its evolution thanks to its reference social network
            </p>
          </div>
        </div>
        <div className="w-[100%] m-auto">
          <div className="w-[100%] relative h-[400px] bg-gray-400 rounded-3xl">
            <Link href="https://www.developpez.com/">
              <Image src="/images/dvp.png" alt="" fill />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Devellopez
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 "></div>
            <p className="mt-[1rem] text-white text-[18px] font font-semibold">
              One of the sites offering a vast quantity of information,
              articles, reviews and books concerning the world of the web and
              its derivatives. This allows you to discover new possibilities
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
