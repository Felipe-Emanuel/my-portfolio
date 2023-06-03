import { TooltipComp } from "@util/tools/TooltipComp";
import { CssIcon, FirebaseIcon, HtmlIcon, JavascriptIcon, NextJstIcon, ReactIcon, TailwindcssIcon, TypescriptIcon } from "@icons/index";

interface ColoredIconsListProps {
  techs: string[];
}

const techList: {
  [key: string]: JSX.Element;
} = {
  Typescript: <TypescriptIcon />,
  ReactJs: <ReactIcon />,
  tailwindCss: <TailwindcssIcon />,
  NextJS: <NextJstIcon />,
  Firebase: <FirebaseIcon />,
  Javascript: <JavascriptIcon />,
  html: <HtmlIcon />,
  Css: <CssIcon />
};

export function ColoredIconsList({ techs }: ColoredIconsListProps) {
  return (
    <>
      {techs.map((tech) => (
        <li key={tech}>
          <TooltipComp text={tech}>{techList[tech]}</TooltipComp>
        </li>
      ))}
    </>
  );
}
