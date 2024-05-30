import React from "react";

interface Props {
  title: string;
  year: string;
  description: string;
}

const SkillsItem = ({ title, year, description }: Props) => {
  return (
    <div className=" flex flex-col items-center">
      <div className="flex gap-8 items-center justify-center pb-4">
        <span className=" flex items-center h-[50px] px-[2rem] text-[#55e6a5] font-bold text-[18px] border-[2px] border-[#55e6a5] ">
          {year}
        </span>
        <h2 className=" mt-4 uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
          {title}
        </h2>
      </div>
      <p className="font-norma; w-[80%] h-[250px] text-[17px] text-slate-400   ">
        {description}
      </p>
    </div>
  );
};

export default SkillsItem;
