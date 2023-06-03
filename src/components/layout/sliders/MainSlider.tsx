import Link from "next/link";
import Image from "next/image";
import { Text } from "@util/texts/Text";
import { Title } from "@util/texts/Title";
import { Button } from "@util/buttons/Button";
import { Project } from "@models/project";
import { LinkButton } from "@util/buttons/LinkButton";
import { useState, useEffect } from "react";
import { prismicProjectDetail } from "@models/prismic";
type MainSliderProps = {
  projects: Project[] & prismicProjectDetail[];
  currentId: number;
};

export function MainSlider({ projects, currentId }: MainSliderProps) {
  const [currentImage, setCurrentImage] = useState(0);
  const [timer, setTimer] = useState(8);
  const [animationClass, setAnimationClass] = useState("");
  const [animationTitleClass, setAnimationTitleClass] = useState("");

  useEffect(() => {
    setAnimationClass("");
 
    setCurrentImage(0);
    setTimer(8);
  }, [currentId]);

  useEffect(() => {
    const timeRef = setTimeout(() => {
      setAnimationTitleClass("animate-appear");
      setTimer((t) => t - 1);

      if (timer === 0) {
        setCurrentImage((prev) =>
          prev === projects.length - 1 ? 0 : prev + 1
        );
        setTimer(8);
        setAnimationTitleClass("");
      }

      setAnimationClass("before:animate-overlay before:bg-white/20");
    }, 1000);

    return () => clearTimeout(timeRef);
  }, [currentImage, timer]);

  const { image, title, subtitle, acess, github, id } = projects[currentImage];

  const overlay = `before:absolute before:inset-0 brightness-125 ${animationClass}`;

  const checkCurrentThumb = (index: number) =>
    index === currentImage
      ? `border-orangeDark animate-jump ${overlay} cursor-default`
      : "ring-1 ring-white/25 brightness-105";

  return (
    <div className="relative h-full 2xl:h-screen w-screen -left-10 -top-10 z-10">
      <div className="flex justify-center items-center h-full w-full">
        <Image
          placeholder="blur"
          blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
          priority
          src={image}
          width={1920}
          height={980}
          fetchPriority="high"
          quality={100}
          alt="carousel image"
          className="border border-orangeDark pointer-events-none brightness-1250"
        />
        <div className="w-full h-full absolute bg-gradiant-to-t" />
        <div className="w-full h-full absolute bg-gradiant-to-r" />
        <div className="absolute by-galaxy-fold:bottom-0 -bottom-16 sm:bottom-16 left-0 w-5/6 h-fit">
          <div className="relative bottom-12 md:bottom-14">
            <Title
              title={title}
              className={`absolute left-10 font-SecondarySans
              text-xl sm:text-3xl pointer-events-none ${animationTitleClass}`}
            />
          </div>
          <Text
            size="xs"
            className="relative left-10 text-[10px]
            sm:text-sm font-SecondarySans pointer-events-none"
          >
            {subtitle}
          </Text>
          <div className="flex flex-wrap gap-4 pt-4 items-center bottom-1 relative left-10">
            <LinkButton
              data={projects[currentImage]}
              href={acess}
              text="Acessar"
              className="bg-white"
            />
            <LinkButton
              data={projects[currentImage]}
              href={github}
              text="Github"
              github
            />
            <Link href={`/projectDetail/${title}/${id}`}>
              <Button data={projects[currentImage]} text="Detalhe" />
            </Link>
          </div>
        </div>
      </div>
      <div
        className={`relative by-galaxy-fold:-bottom-4 -bottom-[4.5rem] sm:bottom-14 left-0 w-full`}
      >
        <div className="flex justify-center w-screen z-40 bg-gradiant-full-black">
          <div className="flex">
            {projects.map((post, index) => {
              return (
                <button
                  disabled={index === currentImage}
                  key={index}
                  onClick={() => {
                    setCurrentImage(index);
                    setAnimationTitleClass("animate-appear");
                    setTimer(8);
                  }}
                  className={`relative border mx-1 md:mx-6 rounded overflow-hidden
                    disabled:pointer-events-none w-full sm:w-52 sm:h-32 brightness-50
                    ${checkCurrentThumb(index)}`}
                >
                  <Image
                    placeholder="blur"
                    blurDataURL="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAYAAAAfFcSJAAAADUlEQVR42mOMDYutBwADuQGRo8ohBwAAAABJRU5ErkJggg=="
                    src={post.image}
                    width={1980}
                    height={920}
                    quality={100}
                    sizes="500"
                    alt={`thumbnail ${index}`}
                    className={`rounded p-0.5 transition-all ${
                      index === currentImage ? "" : "hover:scale-105"
                    }`}
                  />
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
