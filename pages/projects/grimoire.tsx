import Footer from "@/components/Footer";
import ImageWithModal from "@/components/ImageWithModal";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";

import React, { useState } from "react";

const Grimoire = () => {
  const [nav, setnav] = useState(false);
  const openNav = () => setnav(true);
  const closeNav = () => setnav(false);

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
          <p className="mt-[2rem] text=[18px] text-slate-400 ">
            I have been a freelance back-end developer for a year now in the
            Lille region. I am used to working with Kévin, a front-end developer
            more experienced than you, and who has already a good network of
            contacts in the industry. Kevin contacted me to offer me the
            opportunity to work with him by pooling our front/back skills on a
            brand new project that was assigned to him propose. It is a small
            chain of bookstores that he wants open a book referencing and rating
            site: Mon Vieux Grimoire.
          </p>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] mb-[4rem] gap-[3rem]  mx-auto">
            <article className="border-2 border-gray-400 bg-gray-400">
              <ImageWithModal src="/images/obj.png" alt="" />
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/scenario-1.png" alt="" />
              </div>
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/scenario-2.png" alt="" />
              </div>
            </article>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] mb-[4rem] gap-[3rem]  mx-auto">
            <article className="border-2 border-gray-400 bg-gray-400">
              <ImageWithModal src="/images/spe-fct.png" alt="" />
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/spe-fct-2.png  " alt="" />
              </div>
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/spe-fct-3.png" alt="" />
              </div>
            </article>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] mb-[4rem] gap-[3rem]  mx-auto">
            <article className="border-2 border-gray-400 bg-gray-400">
              <ImageWithModal src="/images/spe-API.png" alt="" />
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/spe-API-2.png" alt="" />
              </div>
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/spe-API-3.png" alt="" />
              </div>
            </article>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] mb-[4rem] gap-[3rem]  mx-auto">
            <article className="border-2 border-gray-400 bg-gray-400">
              <ImageWithModal src="/images/grimoire-1.png" alt="" />
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/grimoire-2.png" alt="" />
              </div>
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/grimoire-3.png" alt="" />
              </div>
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/grimoire-4.png" alt="" />
              </div>
            </article>
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
