import Image from "next/image";
import Link from "next/link";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { Button } from "@util/buttons/Button";
import { Project } from "@models/project";
import { LinkButton } from "@util/buttons/LinkButton";
import { OwnerButton } from "@util/buttons/OwnerButton";
import { ProjectInfos } from "./ProjectInfos";
import { useEffect, useState } from "react";
import { prismicProjectDetail } from "@models/prismic";

interface projectDetailsProps {
  project: prismicProjectDetail & Project;
}

export function ProjectDetails({ project }: projectDetailsProps) {
  if (!project) return null;

  const {
    image,
    subtitle,
    posters,
    description,
    acess,
    github,
    owner,
    ownerRefere,
    stacks,
    title,
  } = project;

  const [animationTitleClass, setAnimationTitleClass] = useState("");
  useEffect(() => {
    setAnimationTitleClass("animate-appear");
  }, []);

  return (
    <div className="relative by-galaxy-fold:h-[45vh] h-[60vh] lg:h-screen w-screen -left-10 -top-10 z-10">
      <div className="flex justify-center items-center h-full w-full">
        <div className="relative h-full w-full">
          <Image
            placeholder="blur"
            blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
            priority
            src={image}
            width={1980}
            height={920}
            quality={100}
            alt="carousel image"
            className="border border-orangeDark pointer-events-none"
          />
        </div>
        <div className="w-full h-full absolute bg-gradiant-to-t" />
        <div className="w-full h-full absolute bg-gradiant-to-r" />
        <div className="absolute bottom-0 left-0 w-5/6 h-fit">
          <div className="relative bottom-10 md:bottom-14">
            <Title
              title={title}
              className={`absolute left-10 font-SecondarySans
              text-xl sm:text-3xl pointer-events-none ${animationTitleClass}`}
            />
          </div>
          <Text
            className="relative left-10 text-[10px]
            sm:text-sm font-SecondarySans pointer-events-none"
          >
            {subtitle}
          </Text>
          <div className="flex flex-wrap gap-4 pt-4 items-center bottom-1 relative left-10">
            <LinkButton
              data={project}
              href={acess}
              text="Acessar"
              className="bg-white"
            />
            <LinkButton data={project} href={github} text="Github" github />
            <Link href="/">
              <Button text="Início" />
            </Link>
            <OwnerButton owner={owner} ownerRefere={ownerRefere} />
          </div>
        </div>
      </div>
      <ProjectInfos
        techs={stacks}
        posters={posters}
        subtitle={subtitle}
        description={description}
      />
    </div>
  );
}
