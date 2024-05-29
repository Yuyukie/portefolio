import Footer from "@/components/Footer";
import ImageWithModal from "@/components/ImageWithModal";
import MobileNav from "@/components/MobileNav";
import Nav from "@/components/Nav";

import React, { useState } from "react";

const MonVieuxGrimoire = () => {
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
        <div className="w-[80%] grid-cols-1 mx-auto grid gap-[3rem] h-[100%] items-center">
          <div>
            <h1 className="text-[40px] md:text-[40px] text-white font-bold text-center">
              Présen
              <span className="text-yellow-400">tation</span>
            </h1>
            <p className="mt-[2rem] text=[18px] text-slate-400">
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Mollitia
              fugiat unde deleniti deserunt quos quae corporis nostrum,
              voluptatem fuga eum ipsum earum autem, quaerat magnam perspiciatis
              repudiandae accusamus. Nulla, rem.
            </p>
          </div>
          <div className="grid grid-cols-1 lg:grid-cols-2 xl:grid-cols-3 mt-[4rem] mb-[4rem] gap-[3rem]  mx-auto">
            <article className="border-2 border-gray-400 bg-gray-400">
              <ImageWithModal src="/images/obj.png" alt="Sophie Bluel" />
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/spe-tech.png" alt="Sophie Bluel" />
              </div>
            </article>
            <article className="border-2 border-gray-400 bg-gray-400">
              <div className="object-cover">
                <ImageWithModal src="/images/scenario.png" alt="" />
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
export default MonVieuxGrimoire;
