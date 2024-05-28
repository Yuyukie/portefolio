import { TypeAnimation } from "react-type-animation";

const TextEffect = () => {
  return (
    <TypeAnimation
      sequence={[
        "Web developer",
        500, // wait 1s before replacing "Mice" with "Hamsters"
        "Frontend",
        500,
        "Backend",
        500,
        "Fullstack",
        500,
      ]}
      speed={50}
      className=" text-[2rem] md:text-[2rem] text-[#55e6a5] font-bold uppercase"
      repeat={Infinity}
    />
  );
};
export default TextEffect;
