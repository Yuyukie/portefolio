import Footer from "@/components/Footer";
import ImageWithModal from "@/components/ImageWithModal";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";
import Image from "next/image";
import Link from "next/link";

import React, { useState } from "react";

const Grimoire = () => {
  const [nav, setnav] = useState(false);
  const [showAll, setShowAll] = useState(false);

  const openNav = () => setnav(true);
  const closeNav = () => setnav(false);
  const toggleShowAll = () => setShowAll(!showAll);

  const images = [
    "/images/obj.png",
    "/images/scenario-1.png",
    "/images/scenario-2.png",
    "/images/spe-fct.png",
    "/images/spe-fct-2.png",
    "/images/spe-fct-3.png",
    "/images/spe-API.png",
    "/images/spe-API-2.png",
    "/images/spe-API-3.png",
    "/images/grimoire-1.png",
    "/images/grimoire-2.png",
    "/images/grimoire-3.png",
    "/images/grimoire-4.png",
  ];

  const displayedImages = showAll ? images : images.slice(0, 3);

  return (
    <div className="flex flex-col overflow-x-hidden">
      <div>
        <MobileNav nav={nav} closeNav={closeNav} />
        <Nav openNav={openNav} />
      </div>
      <div className="bg-[url('/images/banner.jpg')] mt-[12vh] bg-cover bg-center">
        <div className="w-[80%] grid-cols-1 mx-auto grid gap-[1rem] h-[100%] text-center">
          <h1 className="text-[40px] md:text-[40px] text-white font-bold mt-4">
            Presen
            <span className="text-yellow-400">tation</span>
          </h1>
          <p className="mt-[2rem] text-[18px] text-slate-400">
            I have been a freelance back-end developer for a year now in the
            Lille region. I am used to working with Kévin, a front-end developer
            more experienced than you, and who has already a good network of
            contacts in the industry. Kevin contacted me to offer me the
            opportunity to work with him by pooling our front/back skills on a
            brand new project that was assigned to him propose. It is a small
            chain of bookstores that he wants open a book referencing and rating
            site: Mon Vieux Grimoire.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] mb-[4rem] gap-[3rem] mx-auto">
            {displayedImages.map((src, index) => (
              <article
                key={index}
                className="border-2 border-gray-400 bg-gray-400 hover:scale-105 transform transition-all duration-300"
              >
                <ImageWithModal src={src} alt="" />
              </article>
            ))}
          </div>
          <div className="flex justify-center items-center gap-4">
            <div className=" w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <Link
                href="https://github.com/Yuyukie/Projet6"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Image
                  src="/images/giticon.png"
                  alt="123"
                  width={50}
                  height={50}
                  className="md:w-[80px] md:h-[80px]"
                />
              </Link>
            </div>
            <div>
              <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                GitHub
              </h2>
            </div>
          </div>
          <div className="mt-4 mb-4 text-white font-bold">
            {`${displayedImages.length}/${images.length}`}
          </div>
          <div>
            <button
              onClick={toggleShowAll}
              className=" mb-4 px-4 py-2 bg-yellow-400 text-white font-bold rounded"
            >
              {showAll ? "Fermer tous" : "Afficher plus"}
            </button>
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </div>
  );
};

export default Grimoire;
