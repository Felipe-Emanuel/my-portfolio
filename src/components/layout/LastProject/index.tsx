import { Project } from "@models/project";
import { Text } from "@util/texts/Text";
import { LinkButton } from "@util/buttons/LinkButton";
import { PosterImageLink } from "./PosterImageLink";
import { Title } from "@util/texts/Title";
import { prismicProjectDetail } from "@models/prismic";

interface LastProjectProps {
  projects: Project[] & prismicProjectDetail[];
}

export function LastProject({ projects }: LastProjectProps) {
  if (!projects) return null;

  const { title, description, gitLlink } = projects[0];

  return (
    projects && (
      <div className="flex flex-col md:flex-row justify-center items-center gap-4 md:pt-10">
        <div className={`flex flex-col justify-between`}>
          <div>
            <Title
              as="h2"
              title="Último Projeto"
              className="text-sm text-black/75 dark:text-white/75 leading-8 py-4"
            />
            <Title
              as="h3"
              title={title}
              className="text-base sm:text-4xl leading-[3.75rem]"
            />
          </div>

          <Text className="max-w-[27rem] leading-5 md:pb-4 text-[0.7rem] sm:text-xs">
            {description}
          </Text>
          <div className="w-full lg:w-28 py-4 sm:pt-0">
            <LinkButton
              data={projects[0]}
              href={gitLlink}
              text="GitHub"
              github
              className="w-full lg:w-28 relative bottom-0 justify-center -left-0"
            />
          </div>
        </div>
        <PosterImageLink project={projects[0]} />
      </div>
    )
  );
}
