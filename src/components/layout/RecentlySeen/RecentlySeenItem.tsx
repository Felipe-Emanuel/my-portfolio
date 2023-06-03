import Link from "next/link";
import Image from "next/image";
import { Title } from "@util/texts/Title";
import { Button } from "@util/buttons/Button";
import { useState } from "react";
import { ResponsiveIcon } from "@icons/index";

interface RecentlySeenItemProps {
  image: string;
  title: string;
  responsive: boolean;
  linkDetails: string;
  alt: string;
  id: number | string;
}

export function RecentlySeenItem({
  image,
  title,
  responsive,
  linkDetails,
  alt,
  id,
}: RecentlySeenItemProps) {
  const [hoverProjectId, setHoverProjectId] = useState<number | string>("");

  const validId = hoverProjectId === id;

  const changeVisibility = (projectId: number | string) =>
    setHoverProjectId(projectId);

  const checkButton = validId
    ? "translate-y-[0%]"
    : "opacity-0 hover:opacity-100 translate-y-[10%]";

  return (
    <div
      onMouseEnter={() => changeVisibility(id)}
      onMouseLeave={() => changeVisibility("")}
      className={`overflow-hidden w-full h-full relative transition-all duration-500 ${
        validId ? "rounded-none" : "rounded-xl"
      }`}
    >
      <Image
        placeholder="blur"
        blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
        src={image}
        width={1980}
        height={920}
        quality={100}
        alt={alt}
      />
      <div
        className={`
          absolute inset-0 bg-dark/75 transition-all duration-500
          flex flex-col justify-center items-center flex-wrap ${
            validId ? "-translate-x-[100%]" : "translate-x-0"
          }`}
      >
        <Title
          className="text-white/75 font-extrabold text-xs text-center sm:text-sm lg:text-lg"
          as="h2"
          title={title}
        />
        {responsive && <ResponsiveIcon />}
      </div>
      <Link
        href={linkDetails}
        className={`absolute bottom-4 right-4 transition-all duration-500 ease-in-out ${checkButton}`}
      >
        <Button text="Mais..." />
      </Link>
    </div>
  );
}
