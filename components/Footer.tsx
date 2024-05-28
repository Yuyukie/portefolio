import {
  DevicePhoneMobileIcon,
  EnvelopeIcon,
  MapIcon,
} from "@heroicons/react/20/solid";
import React from "react";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <div className="pt-[8rem] pb-[4rem] bg-[#02050a]">
      <div className="grid border-b-[1px] pb-[6rem] border-gray-400 grid-cols-1 w-[80%] mx-auto gap-[3rem] xl:grid-cols-2">
        <div className=" flex justify-center gap-4 xl:flex-col xl:gap-10">
          <div className="flex items-center space-x-6">
            <div className=" md:w-[6rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <MapIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] m-0 text-black" />
            </div>
            <div>
              <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Find Me
              </h2>
              <p className="text-[17px] w-[90%] text-white opacity-60">
                Adress
              </p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className=" md:w-[6rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <DevicePhoneMobileIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] m-0 text-black" />
            </div>
            <div>
              <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Phone number
              </h2>
              <p className="text-[17px] w-[90%] text-white opacity-60">06...</p>
            </div>
          </div>
          <div className="flex items-center space-x-6">
            <div className=" md:w-[6rem] md:h-[6.5rem] w-[5rem] flex items-center justify-center rounded-full bg-[#55e6a5]">
              <EnvelopeIcon className="md:w-[5rem] md:h-[5rem] w-[3rem] h-[3rem] text-black" />
            </div>
            <div>
              <h2 className="text-[25px] mb-[0.2rem] font-semibold text-white">
                Send me Email
              </h2>
              <p className="text-[17px] w-[90%] text-white opacity-60">
                xxxxx@xxx.xxx
              </p>
            </div>
          </div>
        </div>
        <div>
          <ContactForm />
        </div>
      </div>
      <div className="w-[80%] mt-[2rem] mx-auto items-center justify-between">
        <div className="text-[16px] mb-[2rem] text-center md:mb-0 text-white opacity-20">
          Mazars Benjamin 2024 . All Right Reserved
        </div>
      </div>
    </div>
  );
};

export default Footer;
