import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#141c27]">
      <h2 className="heading">
        Education & <span className="text-yellow-400">Skills</span>
      </h2>
      <div className="w-[80%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem title="OpenClassRooms's Formation" year="2024" />
          <SkillsLanguage skill1="JS" skill2="REACT" skill3="NODE.JS" />
        </div>
        <div>
          <SkillsItem title="Fullstack Developper" year="2024" />
          <SkillsLanguage
            skill1="TAILWIND"
            skill2="NEXT.JS"
            skill3="TYPESCRYPT"
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
