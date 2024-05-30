import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div id="contact" className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 w-[80%] mx-auto gap-[2rem] xl:grid-cols-2">
        <div className="  hidden grid-cols-2 sm:grid  xl:grid-cols-1 gap-4 xl:gap-[10px]">
          <div className="flex items-center space-x-6 w-[100%]">
            <a
              href="https://www.google.com/maps/search/?api=1&query=31+rue+du+barry%2C+12360+Camares"
              target="_blank"
              rel="noopener noreferrer"
              className="w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-[#55e6a5]"
            >
              <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] m-0 text-black" />
            </a>
            <div className="text-center">
              <h2 className="text-[25px] font-semibold text-white">Find Me</h2>
              <p className="text-[17px] text-white opacity-60 ">
                12360 Camares
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 w-[100%]">
            <div className=" w-[6rem] h-[6rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] m-0 text-black" />
            </div>
            <div>
              <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Phone
              </h2>
              <p className="text-[17px]  text-white opacity-60">
                06-59-57-91-73
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6 w-[100%] col-span-2 xl:col-span-1">
            <div className=" h-[6rem] w-[6rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[5rem] text-black" />
            </div>
            <div>
              <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Email
              </h2>
              <p className="text-[17px] text-white opacity-60">
                mazars.benjamin@hotmail.fr
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto items-center justify-between">
        <div className="text-[16px] mb-[2rem] text-center md:mb-0 text-white">
          Mazars Benjamin 2024 . All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
