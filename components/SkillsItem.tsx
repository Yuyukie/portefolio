import React from "react";

interface Props {
  title: string;
  year: string;
}

const SkillsItem = ({ title, year }: Props) => {
  return (
    <div className="mb-[4rem] md:mb-[8rem]">
      <span className="px-[2rem] text-[#55e6a5] py-[0.9rem] font-bold text-[18px] border-[2px] border-[#55e6a5] ">
        {year}
      </span>
      <h2 className="mt-[2rem] uppercase font-semibold mb-[1rem] text-[20px] sm:text-[25px] md:text-[30px] text-white">
        {title}
      </h2>
      <p className="text-[] font-norma; w-[80%] text-[17px] ">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed, quos!
        Magnam architecto rerum vero alias nesciunt fugiat doloremque! Nihil
        totam quia quibusdam veritatis deleniti obcaecati perferendis laudantium
        qui, voluptate non.
      </p>
    </div>
  );
};

export default SkillsItem;
