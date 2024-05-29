import { Bars3Icon } from "@heroicons/react/16/solid";
import React from "react";
import Link from "next/link";

interface Props {
  openNav: () => void;
}

const Nav = ({ openNav }: Props) => {
  return (
    <div className="w-[100%] top-0 h-[12vh] bg-[#141c27] shadow-md fixed z-[1000]">
      <div className="flex items-center justify-between w-[80%] mx-auto h-[100%]">
        <h2 className="flex-[0.6] cursor-pointer text-[25px] text-white font-bold">
          WEB
          <span className="text-yellow-300">DEV</span>
        </h2>
        <div className="nav-link">
          <Link href="/#home">Home</Link>
        </div>
        <div className="nav-link">
          <Link href="/#services">Services</Link>
        </div>
        <div className="nav-link">
          <Link href="/#about">About</Link>
        </div>
        <div className="nav-link">
          <Link href="/#projects">Projects</Link>
        </div>
        <div className="nav-link">
          <Link href="/#blog">Blog</Link>
        </div>
        <div className="nav-link">
          <Link href="/#contact">Contact</Link>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className=" w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
