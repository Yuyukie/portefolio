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
          <a href="#home">Home</a>
        </div>
        <div className="nav-link">
          <a href="#services">Services</a>
        </div>
        <div className="nav-link">
          <a href="#about">About </a>
        </div>
        <div className="nav-link">
          <a href="#projects">Projects </a>
        </div>
        <div className="nav-link">
          <a href="#blog">Blog </a>
        </div>
        <div className="nav-link">
          <a href="#contact">Contact </a>
        </div>
        <div onClick={openNav}>
          <Bars3Icon className=" w-[2rem] md:hidden h-[2rem] cursor-pointer text-yellow-300" />
        </div>
      </div>
    </div>
  );
};

export default Nav;
