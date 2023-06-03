import Image from "next/image";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { AboutType } from "@models/prismic";
import { Graduation } from "@layout/Graduation";
import { GitHubIcon, LinkedinIcon } from "@icons/index";

interface AboutMeProps {
  content: AboutType;
}

export function AboutMe({ content }: AboutMeProps) {
  const renderLinks = () => (
    <>
      <li className="hover:animate-jump">
        <a target="_blank" href={content.linkedin}>
          <LinkedinIcon />
        </a>
      </li>
      <li className="hover:animate-jump">
        <a target="_blank" href={content.github}>
          <GitHubIcon />
        </a>
      </li>
    </>
  );

  const renderParagraph = () => {
    return (
      <>
        {content.description.map((paragraph, i) => (
          <Text size="xs" className="leading-5 pt-2 sm:pt-4" key={i}>
            {paragraph}
          </Text>
        ))}
        <ul className="flex gap-4 py-4">{renderLinks()}</ul>
      </>
    );
  };

  return (
    <div className="flex flex-col items-start sm:flex-row justify-center sm:items-center max-w-[1280px] m-auto">
      <div className="flex gap-1 sm:gap-4">
        <div className="h-fit relative">
          <article
            className="
              w-20 h-20 sm:w-56 md:w-80 sm:h-56 md:h-80 rounded-full md:rounded-lg
              border-[3px] p-[0.10rem]
              border-orangeDark
              transition-all duration-300 ease-in
              "
          >
            <Image
              width={2000}
              height={2000}
              quality={100}
              fetchPriority="high"
              className="h-full w-full rounded-full md:rounded transition-all duration-300 ease-in"
              src={content.image}
              alt="Foto do desenvolvedor Felipe Emanuel"
            />
          </article>
          <Graduation content={content} />
        </div>

        <div className="sm:relative m-auto sm:m-0">
          <div className="h-fit flex flex-col gap-1 sm:gap-4 m-auto sm:relative top-1 left-1">
            <Title
              as="h3"
              title={content.name}
              className="text-xs sm:text-3xl"
              aria-label="Nome do desenvolvedor"
            />
            <Title
              as="h4"
              title={content.subtitle}
              className="font-default text-[10px] sm:text-lg "
              aria-label="Cargo do desenvolvedor"
            />
            <div className="hidden sm:block max-w-xl">{renderParagraph()}</div>
          </div>
        </div>
      </div>
      <div className="block sm:hidden max-w-xl">{renderParagraph()}</div>
    </div>
  );
}
