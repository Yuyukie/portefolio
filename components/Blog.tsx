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
              <Image src="/images/grafikart.webp" alt="" fill className="p-4" />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] rounded-xl relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Grafikart
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 md:h-[180px]">
              <p className="text-xs md:text-sm text-wrap text-white ">
                For me, he is one of the most educational content creators on
                the web. His content is regularly updated which allows us to
                stay abreast of technological developments while learning how to
                use them.
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
                alt=""
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
                This is my main technology for the frontend. Its functioning and
                structure fascinate me. it is important for me to stay informed
                about its evolution thanks to its reference social network
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
              <Image src="/images/dvp.webp" alt="" fill className="p-8" />
            </Link>
          </div>
          <div className="w-[90%] text-center mx-auto bg-[#09101a] rounded-xl relative p-[2rem] mt-[-1rem] ">
            <div className=" w-fit px-[2rem] py-[1rem] bg-[#55e6a5] relative mt-[-3rem] text-black font-semibold text-[17px] mx-auto">
              Devellopez
            </div>
            <div className="flex flex-col md:flex-row items-center mt-[1rem] space-x-4 md:h-[180px]">
              <p className="text-xs md:text-sm text-wrap text-white">
                One of the sites offering a vast quantity of information,
                articles, reviews and books concerning the world of the web and
                its derivatives. This allows you to discover new possibilities
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blog;
