import React from "react";

interface Props {
  skill1: string | undefined;
  skill2: string | undefined;
  skill3: string | undefined;
  icone1: React.JSX.Element | undefined;
  icone11?: React.JSX.Element | undefined;
  icone2: React.JSX.Element | undefined;
  icone22?: React.JSX.Element | undefined;
  icone3: React.JSX.Element | undefined;
  icone33?: React.JSX.Element | undefined;
}

const SkillsLanguage = ({
  skill1,
  skill2,
  skill3,
  icone1,
  icone11,
  icone2,
  icone22,
  icone3,
  icone33,
}: Props) => {
  return (
    <div>
      <div className="relative mb-[3rem]">
        <h2 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-center text-[20px] font-bold flex items-center justify-center">
          {icone1 || icone11}
          <span className="ml-2">{skill1}</span>
        </h2>
      </div>
      <div className="relative mb-[3rem]">
        <h2 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-center text-[20px] font-bold flex items-center justify-center">
          {icone2 || icone22}
          <span className="ml-2">{skill2}</span>
        </h2>
      </div>
      <div className="relative mb-[3rem]">
        <h2 className="p-5 w-[100%] uppercase bg-gray-800 rounded-sm text-white text-center text-[20px] font-bold flex items-center justify-center">
          {icone3 || icone33}
          <span className="ml-2">{skill3}</span>
        </h2>
      </div>
    </div>
  );
};

export default SkillsLanguage;
