import { AiFillHtml5 } from "react-icons/ai";
import { RiReactjsLine } from "react-icons/ri";
import { TbBrandNextjs } from "react-icons/tb";
import { DiJavascript1, DiCss3Full, DiSass } from "react-icons/di";
import { SiTypescript, SiTailwindcss, SiFirebase, SiTestinglibrary, SiJest } from "react-icons/si";

interface IconsListProps {
  techs: string[];
}

const techList: {
  [key: string]: JSX.Element;
} = {
  Typescript: <SiTypescript className="sm:w-10 sm:h-10" />,
  ReactJs: <RiReactjsLine className="sm:w-10 sm:h-10" />,
  tailwindCss: <SiTailwindcss className="sm:w-10 sm:h-10" />,
  NextJS: <TbBrandNextjs className="sm:w-10 sm:h-10" />,
  Firebase: <SiFirebase className="sm:w-10 sm:h-10" />,
  Javascript: <DiJavascript1 className="sm:w-10 sm:h-10" />,
  html: <AiFillHtml5 className="sm:w-10 sm:h-10" />,
  Css: <DiCss3Full className="sm:w-10 sm:h-10" />,
  Sass: <DiSass className="sm:w-10 sm:h-10" />,
  TestingLibrary: <SiTestinglibrary className="sm:w-10 sm:h-10" />,
  Jest: <SiJest className="sm:w-10 sm:h-10" />,
};

export function IconsList({ techs }: IconsListProps) {
  return (
    <>
      {techs.map((tech) => (
        <li key={tech}>{techList[tech]}</li>
      ))}
    </>
  );
}
