import Image from "next/image";
import { Text } from "@util/texts/Text";
import { useState } from "react";
import { LinkIcon } from "@icons/index";
import { AboutType } from "@models/prismic";

interface GraduationProps {
  content: AboutType;
}

export function Graduation({ content }: GraduationProps) {
  const [isOpen, setIsOpen] = useState(false);

  const openGraduation = () => setIsOpen((isOpen) => !isOpen);

  const checkIfIsOpen = () => (isOpen ? "w-24" : "w-5");

  return (
    <div className="flex md:justify-center md:items-center md:w-full md:max-w-[22rem] md:gap-4">
      <div
        onMouseEnter={openGraduation}
        onMouseLeave={openGraduation}
        className={`
                bg-light bg-opacity-25 flex transition-all duration-300 rounded-full ${checkIfIsOpen()}
                h-5 absolute bottom-0 left-14 sm:top-[5.5rem] sm:left-52
                md:w-20 md:h-20 md:bottom-0 md:left-0 md:relative md:mt-4 md:top-0
                lg:mt-10
                items-center gap-1 overflow-hidden
                ring-1 ring-orangeDark z-40
                
            `}
      >
        <Image
          src={content.graduationImage}
          alt="TrippleTen bootcamp logo"
          width={100}
          height={100}
          className="rounded-full w-5 h-5 md:h-full md:w-full"
        />
        <a
          href={content.graduationLink}
          target="_blank"
          className="flex items-center md:hidden"
        >
          <Text as="span" size="xs" className="text-white hover:opacity-75 z-10">
            {content.graduation}
          </Text>
        </a>
      </div>
      <div className="m-auto hidden md:flex md:flex-col">
        <a href={content.graduationLink} target="_blank" className="w-fit">
          <Text
            size="base"
            hover
            className="font-bold flex gap-2 items-center text-white hover:opacity-75"
          >
            {content.graduation} <LinkIcon />
          </Text>
        </a>
        <Text size="xs">{content.graduationSubtitle}</Text>
      </div>
    </div>
  );
}
