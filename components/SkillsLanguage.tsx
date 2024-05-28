import React from "react";

interface Props {
  skill1: string | undefined;
  skill2: string | undefined;
  skill3: string | undefined;
}

const SkillsLanguage = ({ skill1, skill2, skill3 }: Props) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h2 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill1}
        </h2>
      </div>
      <div className="relative mb-[3rem]">
        <h2 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill2}
        </h2>
      </div>
      <div className="relative mb-[3rem]">
        <h2 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-[20px] font-bold">
          {skill3}
        </h2>
      </div>
    </div>
  );
};

export default SkillsLanguage;
