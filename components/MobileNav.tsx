import { XMarkIcon } from "@heroicons/react/24/solid";
import Link from "next/link";
import React from "react";

interface Props {
  nav: boolean;
  closeNav: () => void;
}

const MobileNav = ({ nav, closeNav }: Props) => {
  const navAnimation = nav ? "translate-x-0" : "translate-x-[100%]";

  return (
    <div
      className={`fixed ${navAnimation} transform transition-all duration-300 top-0 left-0 right-0 bottom-0 z-[10000] bg-[#09101a]`}
    >
      <div className="w-[100vw] h-[100vh] flex flex-col md:hidden items-center justify-center">
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/#home">Home</Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/#services">Services</Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/#about">About</Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/#projects">Projects</Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/#blog">Blog</Link>
        </div>
        <div className="nav-link-mobile" onClick={closeNav}>
          <Link href="/#contact">Contact</Link>
        </div>
      </div>
      <div onClick={closeNav}>
        <XMarkIcon className="absolute z-[1000000] cursor-pointer top-[2.5rem] right-[4.5rem] w-[2rem] h-[2rem] text-yellow-400" />
      </div>
    </div>
  );
};

export default MobileNav;
