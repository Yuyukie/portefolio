import React from "react";
import SkillsItem from "./SkillsItem";
import SkillsLanguage from "./SkillsLanguage";
import { FaNodeJs, FaReact } from "react-icons/fa";
import { DiJavascript } from "react-icons/di";
import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript } from "react-icons/si";

const description1 =
  "To be recognized as a web developer I went through the OC training course in order to acquire the basics of the profession by learning HTML CSS and JAVASCRIPT. This training also offered to learn the basics of the backend with Node.js Express and MongoDB in order to be able to lead a project from a to z";

const description2 =
  "My professional goal is to become a competent and efficient full stack developer. Therefore, I am interested in Next.js technology to continue to deepen REACT. I was also interested in TYPESCRIPT which for me is an inevitable technology in business to facilitate teamwork";

const icone1 = <DiJavascript />;
const icone2 = <FaReact />;
const icone3 = <FaNodeJs />;
const icone11 = <RiTailwindCssFill />;
const icone22 = <RiNextjsFill />;
const icone33 = <SiTypescript />;

const Skills = () => {
  return (
    <div className="pt-[4rem] md:pt-[8rem] pb-[5rem] bg-[#141c27]">
      <h2 className="heading">
        Formation & <span className="text-yellow-400">compétences</span>
      </h2>
      <div className="w-[90%] mx-auto pt-[4rem] md:pt-[8rem] grid grid-cols-1 md:grid-cols-2 gap-[2rem] items-center">
        <div>
          <SkillsItem
            title="OC's training"
            year="2024"
            description={description1}
          />
          <SkillsLanguage
            skill1="JS"
            icone1={icone1}
            skill2="REACT"
            icone2={icone2}
            skill3="NODE.JS"
            icone3={icone3}
          />
        </div>
        <div>
          <SkillsItem
            title="Fullstack Dev"
            year="2024"
            description={description2}
          />
          <SkillsLanguage
            skill1="TAILWIND"
            icone1={icone11}
            skill2="NEXT.JS"
            icone2={icone22}
            skill3="TYPESCRIPT"
            icone3={icone33}
          />
        </div>
      </div>
    </div>
  );
};

export default Skills;
