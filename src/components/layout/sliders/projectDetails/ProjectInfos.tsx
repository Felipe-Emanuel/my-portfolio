import Image from "next/image";
import { Text } from "@util/texts/Text";
import { ModalImage } from "@layout/ModalImage";
import { ColoredIconsList } from "@util/lists/ColoredIconsList";
import { useState, useEffect } from "react";
import { SwiperComponent, SwiperSlide } from "../swiper";

interface ProjectInfosProps {
  posters: string[];
  subtitle: string;
  description: string;
  techs: string[];
}

export function ProjectInfos({
  posters,
  subtitle,
  description,
  techs,
}: ProjectInfosProps) {
  const [isModal, setIsModal] = useState(false);
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsModal(false);
      }
    };

    if (window) {
      window.addEventListener("keydown", handleKeyDown);

      return () => {
        window.removeEventListener("keydown", handleKeyDown);
      };
    }
  }, []);

  const openModal = (i: number) => {
    setIsModal(true);
    setIndex(i);
  };

  return (
    <div className="relative px-10 h-full justify-center items-center bg-gradiant-to-b">
      <ul className="py-4 flex flex-wrap sm:gap-4 md:gap-8 items-center justify-between w-full sm:w-fit">
        <ColoredIconsList techs={techs} />
      </ul>
      {isModal && (
        <ModalImage
          image={posters[index]}
          subtitle={subtitle}
          onClick={() => setIsModal(false)}
        />
      )}
      <SwiperComponent>
        {posters?.map((poster, i) => (
          <SwiperSlide key={i} className="lg:px-10">
            <Image
              onClick={() => openModal(i)}
              placeholder="blur"
              blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
              src={poster}
              width={1980}
              height={920}
              alt={subtitle}
              className="ring-1 sm:ring-2 m-2 p-2 ring-orangeDark w-full h-fit rounded-lg"
            />
          </SwiperSlide>
        ))}
      </SwiperComponent>
      <Text
        className="w-full max-w-sm text-[0.5rem] md:text-base py-4 max-w-xmd:absolute z-10 left-10 
        h-ull flex items-center justify-center
        pointer-events-none"
      >
        {description}
      </Text>
    </div>
  );
}
