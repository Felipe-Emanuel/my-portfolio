import Link from "next/link";
import Image from "next/image";
import { Button } from "@util/buttons/Button";
import { Project } from "@models/project";
import { Cookies } from "@functions/Cookies";
import { IconsList } from "@util/lists/IconsList";
import { useState, useEffect } from "react";
import { prismicProjectDetail } from "@models/prismic";
import { useRecentlySeenContext } from "@hooks/useRecentlySeenContext";

interface PosterImageLinkProps {
  project: Project & prismicProjectDetail;
}

export function PosterImageLink({ project }: PosterImageLinkProps) {
  const [hoverProjectId, setHoverProjectId] = useState<number | string>("");

  const { setIsLoading, updateCookie, projectCookie } =
    useRecentlySeenContext();
  const { SetCookie } = Cookies();
  useEffect(() => {
    SetCookie("_projectCookie", projectCookie);
  }, [projectCookie]);

  const { acess, image, title, stacks, id } = project;

  const changeVisibility = (projectId: number | string) =>
    setHoverProjectId(projectId);

  const validId = hoverProjectId === id;

  const hoverStyles = validId
    ? "opacity-0 hover:opacity-100 -translate-y-[100%]"
    : "translate-y-[0%]";

  return (
    <div
      onMouseEnter={() => changeVisibility(id)}
      onMouseLeave={() => changeVisibility("")}
      onClick={() => {
        updateCookie(project);
        setIsLoading(false);
      }}
      className="relative overflow-hidden rounded-lg"
    >
      <a href={acess} className="flex m-auto" target="_blank">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
          className="w-[50rem] h-full rounded-lg
            transition-all duration-150 ease-in"
          src={image}
          alt={image}
          width={1000}
          height={1000}
        />
      </a>
      <div
        className={`absolute inset-0 bg-dark/75 transition-all duration-500 pointer-events-none flex items-center justify-center ${hoverStyles}`}
      >
        <ul className="flex gap-4 items-center flex-wrap text-white/75">
          <IconsList techs={stacks} />
        </ul>
      </div>
      <Link
        href={`/projectDetail/${title}/${id}`}
        className={`absolute bottom-4 right-4 transition-all duration-500 ease-in-out`}
      >
        <Button data={project} text="Acessar detalhes" />
      </Link>
    </div>
  );
}
